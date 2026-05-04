// VERCEL API: /api/lab-tavily.js
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

    const key = process.env.TAVILY_API_KEY;
    if (!key) return res.status(500).json({ error: 'Missing MAPS Engine Configuration' });

    try {
        const target = sanitize(req.body.target);
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
