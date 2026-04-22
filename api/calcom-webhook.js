import nodemailer from 'nodemailer';

/**
 * VERCEL SERVERLESS FUNCTION: Cal.com Webhook Handler
 * Endpoint: POST /api/calcom-webhook
 */

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed. Must be POST.' });
    }

    try {
        const body = req.body;
        const payload = Array.isArray(body) ? body[0] : body;
        console.log('[SYSTEM] Cal.com Webhook Received. Event:', payload?.triggerEvent);

        if (payload?.triggerEvent === 'BOOKING_CANCELLED') {
             return res.status(200).json({ status: 'Ignored', reason: 'Cancellation ignored.' });
        }

        // Verify Event Title to route logic securely
        const eventTitle = payload?.payload?.eventTitle || payload?.payload?.title || payload?.eventTitle || '';
        const isStartup = eventTitle && eventTitle.toLowerCase().includes('startup');
        const isAgency = eventTitle && eventTitle.toLowerCase().includes('agency');

        if (!isStartup && !isAgency) {
            console.log('[SYSTEM] Webhook executed, but event title did not match Startup or Agency mapping.', eventTitle);
            return res.status(200).json({ status: 'Ignored', reason: 'Not a target event.' });
        }

        // 1. EXTRACT COMMON DATA
        const attendees = payload?.payload?.attendees || payload?.attendees || [];
        const leadName = attendees[0]?.name || 'Unknown User';
        // Split name accurately
        const nameParts = leadName.trim().split(/\s+/);
        const firstName = nameParts[0] || 'Unknown';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'Unknown';
        
        const leadEmail = attendees[0]?.email || 'Unknown Email';
        const userFields = payload?.payload?.responses || payload?.responses || {};
        
        // Website extraction based on cal.com standard custom field naming
        // Fallback checks multiple possible keys exactly mirroring the startup/agencies UI setup
        const leadWebsite = userFields['company_website']?.value || userFields['website']?.value || Object.values(userFields).find(f => f?.label?.toLowerCase().includes('website'))?.value || '';

        // 2. SCRAPE WEBSITE (Using Native Fetch, stripping HTML)
        let scrapedText = "";
        if (leadWebsite) {
            console.log(`[SCRAPER] Fetching domain data from: ${leadWebsite}`);
            try {
                const url = leadWebsite.startsWith('http') ? leadWebsite : `https://${leadWebsite}`;
                const websiteRes = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } });
                const rawHtml = await websiteRes.text();
                
                scrapedText = rawHtml
                    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
                
                // Limit to roughly ~10k characters
                scrapedText = scrapedText.substring(0, 10000);
            } catch (err) {
                console.error(`[SCRAPER] Failed to fetch target website.`, err);
                scrapedText = "Website could not be accessed.";
            }
        }

        // 3. GEMINI AI ENRICHMENT via OpenRouter using Fast Flash Model
        console.log(`[AI] Processing strategic payload with Gemini engine...`);
        const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY; 
        
        const systemInstruction = "As a $10billion worth Marketing & AI Automation Expert + $100billion worth Marketing psychology and Strategist who knows this particular niche/industry well and based on the current news and trends and direction by the top G's in this niche/industry: give me your opinion. You understand their whole business from the data and pass your Opinion as a $10billion worth GTM marketer.";
        const userInput = `Go over this scraped site content: "${scrapedText}". Tell me what they sell, who they sell to (target audience), and what value they give these people. Then analyze how we can work on growing this business using Marketing & AI Automations to implement across this business. Finally, search for how ${leadName} with email ${leadEmail} fits into this business and how this should concern them when growing.`;

        let deepAnalysis = "AI Analysis Skipped (Missing/Failed).";
        
        if (OPENROUTER_API_KEY) {
            try {
                const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "meta-llama/llama-3.3-70b-instruct:free", 
                        messages: [
                            { role: "system", content: systemInstruction },
                            { role: "user", content: userInput }
                        ]
                    })
                });

                const aiData = await aiRes.json();
                if (aiData.choices && aiData.choices.length > 0) {
                    deepAnalysis = aiData.choices[0].message.content;
                }
            } catch (e) {
                console.error("[AI] Error calling engine:", e);
            }
        }

        // 4. PUSH TO NOTION API (Dual-Database Framework)
        const NOTION_SECRET = process.env.NOTION_SECRET;
        const NOTION_DATABASE_ID_STARTUPS = process.env.NOTION_DATABASE_ID_STARTUPS; 
        const NOTION_DATABASE_ID_AGENCIES = process.env.NOTION_DATABASE_ID_AGENCIES; 
        
        const targetDbId = isStartup ? NOTION_DATABASE_ID_STARTUPS : NOTION_DATABASE_ID_AGENCIES;
        const emailPropertyHeader = isStartup ? "Email Address" : "Email";

        const makeRichText = (str) => ({ rich_text: [{ text: { content: String(str || '').substring(0, 2000) } }] });

        let isNewLead = true;

        if (!NOTION_SECRET || !targetDbId) {
            console.error(`[CRM] Missing Notion Keys. Simulation Mode bypass.`);
        } else {
            console.log(`[CRM] Pushing synthesized entity payload to target DB: ${targetDbId}`);
            
            // Map the generic user fields
            const extractedProps = {};
            for (const key in userFields) {
               const val = String(userFields[key]?.value || '');
               const label = String(userFields[key]?.label || '').toLowerCase();
               
               // Startups
               if(label.includes('funding') || label.includes('stage')) extractedProps.funding = val;
               if(label.includes('raise') || label.includes('amount')) extractedProps.raise = val;
               if(label.includes('pitch') || label.includes('deck')) extractedProps.pitch = val;
               if(label.includes('list') || label.includes('companies')) extractedProps.competitors = val;
               if(label.includes('additional') || label.includes('notes')) extractedProps.notes = val;
               
               // Agencies
               if(label.includes('bottleneck')) extractedProps.bottleneck = val;
               if(label.includes('revenue')) extractedProps.revenue = val;
               if(label.includes('tech') || label.includes('stack')) extractedProps.tech = val;
            }

            const activeProperties = isStartup ? {
                "First Name": { title: [{ text: { content: firstName } }] },
                "Last Name": makeRichText(lastName),
                "Email Address": makeRichText(leadEmail),
                "Phone": makeRichText(attendees[0]?.phoneNumber || extractedProps.phone || ''),
                "Current Funding Stage?": makeRichText(extractedProps.funding),
                "Company Website": makeRichText(leadWebsite),
                "Target Raise Amount?": makeRichText(extractedProps.raise),
                "Do you have a Pitch Deck or Investment Memo ready for review?": makeRichText(extractedProps.pitch),
                "List 1-2 companies that have already raised in your niche": makeRichText(extractedProps.competitors),
                "Additional notes/Requests": makeRichText(extractedProps.notes),
                "AI Opinion": makeRichText(deepAnalysis)
            } : {
                "First Name": { title: [{ text: { content: firstName } }] },
                "Last Name": makeRichText(lastName),
                "Email": makeRichText(leadEmail),
                "Bottleneck": makeRichText(extractedProps.bottleneck),
                "Website": makeRichText(leadWebsite),
                "Current Agency Revenue": makeRichText(extractedProps.revenue),
                "What is your current tech stack?": makeRichText(extractedProps.tech),
                "Additional notes/Requests": makeRichText(extractedProps.notes),
                "AI Opinion": makeRichText(deepAnalysis)
            };

            try {
                let existingPageId = null;
                // SEARCH DB FOR EXISTING LEAD
                const searchRes = await fetch(`https://api.notion.com/v1/databases/${targetDbId}/query`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${NOTION_SECRET}`,
                        'Content-Type': 'application/json',
                        'Notion-Version': '2022-06-28'
                    },
                    body: JSON.stringify({
                        filter: { property: emailPropertyHeader, rich_text: { equals: leadEmail } },
                        page_size: 1
                    })
                });

                const searchData = await searchRes.json();
                if (searchData.results && searchData.results.length > 0) {
                    existingPageId = searchData.results[0].id;
                    isNewLead = false;
                    console.log(`[CRM] Upsert Triggered: Found existing lead at ${existingPageId}`);
                }

                // EXECUTE UPSERT (UPDATE OR CREATE)
                const endpoint = existingPageId ? `https://api.notion.com/v1/pages/${existingPageId}` : `https://api.notion.com/v1/pages`;
                const payloadBody = existingPageId ? { properties: activeProperties } : { parent: { database_id: targetDbId }, properties: activeProperties };

                const upsertRes = await fetch(endpoint, {
                    method: existingPageId ? 'PATCH' : 'POST',
                    headers: {
                        'Authorization': `Bearer ${NOTION_SECRET}`,
                        'Content-Type': 'application/json',
                        'Notion-Version': '2022-06-28'
                    },
                    body: JSON.stringify(payloadBody)
                });
                
                if (!upsertRes.ok) {
                    const errTxt = await upsertRes.text();
                    console.error("[CRM] UPSERT FAILED:", errTxt);
                } else {
                    console.log("[CRM] Upsert Successful!");
                }
            } catch (err) {
                 console.error("[CRM] Notion SDK integration failure", err);
            }
        }

        // 5. DISPATCH GMAIL VIA NODEMAILER
        const GMAIL_USER = process.env.GMAIL_USER;
        const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

        if (GMAIL_USER && GMAIL_APP_PASSWORD) {
            if (!isNewLead) {
                console.log(`[EMAIL] Lead rescheduled/updated. Skipping welcome email to avoid spam.`);
            } else {
                console.log(`[EMAIL] Dispatching native Gmail pipeline...`);
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: GMAIL_USER,
                        pass: GMAIL_APP_PASSWORD
                    }
                });

                await transporter.sendMail({
                    from: `"Jude @ Nirvana" <${GMAIL_USER}>`,
                    to: leadEmail,
                    subject: `Thanks for Booking , To Ensure you are in.......`,
                    html: `<p>Hi ${firstName},</p>
                           <p>I just added you to my Calendar. I am looking forward to learning more about you & your business.</p>
                           <p>To ensure you don't miss this, kindly add this to your calendar. I will see you on the call.</p>
                           <p>Jude</p>`
                });
            }
        } else {
             console.log(`[EMAIL] Missing GMAIL env limits. Skipping email.`);
        }

        return res.status(200).json({
            status: 'Success',
            pipeline: isStartup ? 'Startups & Founders' : 'Agency Owners',
            extractedLead: { name: leadName, website: leadWebsite },
            analysisComplete: deepAnalysis !== "AI Analysis Skipped (Missing/Failed)."
        });

    } catch (error) {
        console.error('[SYSTEM Error] Webhook processing failed:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
