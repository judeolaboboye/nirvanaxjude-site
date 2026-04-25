// VERCEL API: /api/lab-notion.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const key = process.env.NOTION_SECRET;
    // The "Website" database, not the startup or agency ones!
    const dbId = process.env.NOTION_DATABASE_ID_WEBSITE;

    if (!key || !dbId) return res.status(500).json({ error: 'Missing CRM Configuration in Stealth Mode' });

    try {
        const payload = req.body;
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
                    'Name': { title: [{ text: { content: payload.userData?.firstName || 'Anonymous' } }] },
                    'Email': { email: payload.userData?.email || null },
                    'Phone': { phone_number: payload.userData?.phone || null },
                    'Artifact Used': { select: { name: payload.artifactId } },
                    'User Input': { rich_text: [{ text: { content: String(payload.input || 'N/A').substring(0, 2000) } }] },
                    'Generated Output': { rich_text: [{ text: { content: String(payload.output || 'Deployed').substring(0, 2000) } }] },
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
