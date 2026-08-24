const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';
const LOCAL_FALLBACKS = ['http://localhost:3001', 'http://localhost:3000', 'https://panel.rapidtechpro.com'];

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, interests } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, message: 'Name, email, and message are required.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const selectedInterests = Array.isArray(interests) && interests.length > 0 ? interests.join(', ') : 'General Inquiry';
        const formattedSubject = subject || `New Project Inquiry from ${name} (${selectedInterests})`;
        const formattedMessage = `
New Project Inquiry via RapidTechPro Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Client Details:
• Name: ${name}
• Email: ${email}
• Phone / WhatsApp: ${phone || 'Not provided'}
• Interested In: ${selectedInterests}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from: RapidTechPro Web Form
Time: ${new Date().toUTCString()}
        `.trim();

        const mailPayload = {
            to: 'admin@rapidtechpro.com',
            replyTo: email,
            subject: formattedSubject,
            message: formattedMessage,
            name,
            email,
            phone,
            interests: selectedInterests,
        };

        const targetBases = [BACKEND_URL, ...LOCAL_FALLBACKS];
        let sent = false;
        let lastError = null;

        for (const base of targetBases) {
            // Try POST /api/contact first
            try {
                const res = await fetch(`${base}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'x-api-key': API_KEY,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                    cache: 'no-store',
                });
                if (res.ok) {
                    sent = true;
                    break;
                }
            } catch (err) {
                lastError = err;
            }

            // Fallback: Try POST /api/mail/send
            try {
                const mailRes = await fetch(`${base}/api/mail/send`, {
                    method: 'POST',
                    headers: {
                        'x-api-key': API_KEY,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(mailPayload),
                    cache: 'no-store',
                });
                if (mailRes.ok) {
                    sent = true;
                    break;
                }
            } catch (err) {
                lastError = err;
            }
        }

        if (sent) {
            return new Response(
                JSON.stringify({ success: true, message: 'Message sent successfully! Our team will contact you soon.' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ success: false, message: 'Unable to deliver message right now. Please email info@rapidtechpro.com.' }),
            { status: 502, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({ success: false, message: error.message || 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
