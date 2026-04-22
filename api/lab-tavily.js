// VERCEL API: /api/lab-tavily.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const key = process.env.TAVILY_API_KEY;
    if (!key) return res.status(500).json({ error: 'Missing MAPS Engine Configuration' });

    try {
        const { target } = req.body;
        const apiRes = await fetch('https://api.tavily.com/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: key,
                query: `business owners and contact info for ${target}`,
                search_depth: "advanced"
            })
        });

        const data = await apiRes.json();
        return res.status(200).json({ results: data.results || [] });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message });
    }
}
