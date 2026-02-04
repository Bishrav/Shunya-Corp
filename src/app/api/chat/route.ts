import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message } = body;

        // SIMULATED AI RESPONSE (Mock Mode)
        // INSTRUCTION: To use real AI, replace this block with OpenAI/Gemini SDK calls.

        let reply = "I'm not sure about that. Could you try asking about our projects or services?";

        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            reply = "Hello! Welcome to Shunya. How can I help you build your digital future?";
        } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
            reply = "We have worked on exciting projects like PixelPunch (Game Dev), NewMobizilla (E-commerce), and Neon City VR. You can view them in the Projects page!";
        } else if (lowerMsg.includes('service') || lowerMsg.includes('offer')) {
            reply = "We offer Web Development, 3D Interactive Experiences, App Development, and AI Solutions.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
            reply = "You can reach us at shunyaaa025@gmail.com or call +977-9840700349.";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
            reply = "Our pricing depends on the project scope. Please contact us for a detailed quote!";
        } else if (lowerMsg.includes('best it company')) {
            reply = "That's us! Shunya is recognized as a leading IT company in Nepal for innovation and 3D web tech.";
        }

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ reply });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
