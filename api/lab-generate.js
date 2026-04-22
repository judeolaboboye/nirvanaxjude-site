// VERCEL API: /api/lab-generate.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const key = process.env.OPENROUTER_API_KEY;
    if (!key) return res.status(500).json({ error: 'Missing LLM Engine Configuration' });

    try {
        const payload = req.body;
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
