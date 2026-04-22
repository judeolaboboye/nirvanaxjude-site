import handler from './api/calcom-webhook.js';

const mockReq = {
    method: 'POST',
    body: {
        triggerEvent: 'CREATION',
        payload: {
            title: "Startups & Founder Inquiries",
            attendees: [
                {
                    name: "Jude Dummy",
                    email: "judeolaboboye@gmail.com",
                    phoneNumber: "+123456789"
                }
            ],
            responses: {
                "website": {
                    value: "apple.com"
                },
                "funding_stage": {
                    value: "Series A"
                }
            }
        }
    }
};

const mockRes = {
    status: function(code) {
        console.log(`[RES] Status Code: ${code}`);
        return this;
    },
    json: function(data) {
        console.log(`[RES] Payload:`, JSON.stringify(data, null, 2));
    }
};

console.log("Starting Local Webhook Simulation...");
handler(mockReq, mockRes).then(() => console.log("Simulation Finished."));
