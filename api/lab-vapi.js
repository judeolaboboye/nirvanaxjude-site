// VERCEL API: /api/lab-vapi.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const key = process.env.VAPI_PRIVATE_KEY;
    const assistantId = process.env.VAPI_ASSISTANT_ID;

    if (!key || !assistantId) return res.status(500).json({ error: 'Missing Voice Agent Configuration' });

    try {
        const payload = req.body;
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
