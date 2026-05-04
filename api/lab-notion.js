// VERCEL API: /api/lab-notion.js
const rateLimitMap = new Map();
const checkRateLimit = (ip) => {
    const now = Date.now();
    const user = rateLimitMap.get(ip);
    if (!user || now - user.startTime > 60000) { rateLimitMap.set(ip, { count: 1, startTime: now }); return true; }
    if (user.count >= 50) return false;
    user.count += 1;
    return true;
};
const sanitize = (str) => typeof str === 'string' ? str.replace(/[<>]/g, '').trim() : str;

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const ip = req.headers['x-forwarded-for'] || 'unknown';
    if (!checkRateLimit(ip)) return res.status(429).json({ error: 'Rate limit exceeded. Try again in a minute.' });

    const key = process.env.NOTION_SECRET;
    // The "Website" database, not the startup or agency ones!
    const dbId = process.env.NOTION_DATABASE_ID_WEBSITE;

    if (!key || !dbId) return res.status(500).json({ error: 'Missing CRM Configuration in Stealth Mode' });

    try {
        const payload = {
            userData: {
                firstName: sanitize(req.body.userData?.firstName),
                email: sanitize(req.body.userData?.email),
                phone: sanitize(req.body.userData?.phone)
            },
            artifactId: sanitize(req.body.artifactId),
            input: sanitize(req.body.input),
            output: sanitize(req.body.output)
        };
        const apiRes = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28'
            },
            body: JSON.stringify({
                parent: { database_id: dbId },
                properties: {
                    'First Name': { title: [{ text: { content: payload.userData?.firstName || 'Anonymous' } }] },
                    'Email Address': { email: payload.userData?.email || null },
                    'Phone Number': { phone_number: payload.userData?.phone || null },
                    'Artifact Used': { select: { name: payload.artifactId || 'General' } },
                    'User Input Architecture': { rich_text: [{ text: { content: String(payload.input || 'N/A').substring(0, 2000) } }] },
                    'Instance Output': { rich_text: [{ text: { content: String(payload.output || 'Deployed').substring(0, 2000) } }] },
                    'Status': { status: { name: 'New' } }
                }
            })
        });

        if (!apiRes.ok) {
            const err = await apiRes.json().catch(() => ({}));
            console.error("Notion API Error Details:", err);
            throw new Error(`Notion Proxy Error: ${apiRes.status} -- ${err.message || 'Unknown integration error'}`);
        }

        return res.status(200).json({ success: true });
    } catch (e) {
        console.error("Internal CRM Error:", e);
        return res.status(500).json({ error: e.message });
    }
}
