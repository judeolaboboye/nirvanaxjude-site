// VERCEL API: /api/lab-vapi.js
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

    const key = process.env.VAPI_PRIVATE_KEY;
    const assistantId = process.env.VAPI_ASSISTANT_ID;

    if (!key || !assistantId) return res.status(500).json({ error: 'Missing Voice Agent Configuration' });

    try {
        const payload = { customerPhone: sanitize(req.body.customerPhone) };
        const apiRes = await fetch('https://api.vapi.ai/call/phone', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                assistantId: assistantId,
                customer: { number: payload.customerPhone }
            })
        });

        if (!apiRes.ok) {
            const errDetails = await apiRes.json().catch(() => ({}));
            throw new Error(errDetails.message || `Proxy Error: ${apiRes.status}`);
        }

        return res.status(200).json({ success: true, instruction: 'You will receive an incoming call from NirvanaXJude within the next 15–30 seconds. The AI receptionist will walk you through the demo.' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message });
    }
}
