// VERCEL API: /api/lab-generate.js
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

    const key = process.env.OPENROUTER_API_KEY;
    if (!key) return res.status(500).json({ error: 'Missing LLM Engine Configuration' });

    try {
        const payload = {
            model: sanitize(req.body.model),
            systemPrompt: sanitize(req.body.systemPrompt),
            userMessage: sanitize(req.body.userMessage)
        };
        const apiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: payload.model || 'google/gemini-2.0-flash-lite-preview-02-05:free',
                messages: [
                    { role: 'system', content: payload.systemPrompt },
                    { role: 'user', content: payload.userMessage }
                ],
                max_tokens: 600,
                temperature: 0.7
            })
        });

        if (!apiRes.ok) {
            const err = await apiRes.text();
            throw new Error(`OpenRouter Proxy Error: ${apiRes.status} -- ${err}`);
        }

        const data = await apiRes.json();
        return res.status(200).json({ result: data.choices?.[0]?.message?.content || 'No response generated.' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message });
    }
}
