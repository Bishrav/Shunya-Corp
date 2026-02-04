import { NextResponse } from 'next/server';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, history = [] } = body;
        const lowerMsg = message.toLowerCase();
        const lastUserMsg = (history as Message[]).filter(m => m.role === 'user').pop()?.content.toLowerCase();

        let reply = "I'm still learning, but I can tell you all about Shunya's 3D web designs, app development, and AI solutions! What's on your mind?";

        // 1. GREETINGS & MOODS
        const greetings = ['hi', 'hello', 'hey', 'yoo', 'supp', 'sup', 'yo', 'namaste'];
        if (greetings.some(g => lowerMsg === g || lowerMsg.startsWith(g + ' '))) {
            if (lowerMsg.includes('yoo') || lowerMsg.includes('sup') || lowerMsg.includes('yo')) {
                reply = "Yoo! What's up? Ready to build something futuristic today?";
            } else if (lowerMsg.includes('namaste')) {
                reply = "Namaste! Welcome to Shunya. How can we help you with your digital journey in Nepal?";
            } else {
                reply = "Hey there! Welcome to Shunya. I'm your AI guide to the future of the web. What are we building today?";
            }
        }

        // 2. CONTEXTUAL AWARENESS (Using History)
        else if (lowerMsg.includes('tell me more') || lowerMsg.includes('elaborate') || lowerMsg.includes('how so')) {
            if (lastUserMsg?.includes('project') || lastUserMsg?.includes('work')) {
                reply = "Our projects like PixelPunch use WebGL for insane performance, while NewMobizilla features a full 3D product viewer. We push the limits of what a browser can do!";
            } else if (lastUserMsg?.includes('service')) {
                reply = "Specifically, we use Next.js for speed and Three.js for immersion. We don't just make sites; we make digital worlds.";
            } else {
                reply = "I'd love to! Are we talking about our 3D tech, our AI agents, or how we can scale your business?";
            }
        }

        // 3. CORE SERVICES & KNOWLEDGE
        else if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('portfolio')) {
            reply = "We've built some wild stuff! 🚀 PixelPunch (Game Dev), NewMobizilla (E-commerce with 3D), and Neon City VR. Check our 'Projects' page for the full gallery!";
        } else if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do you do')) {
            reply = "We specialize in Interactive 3D Web, Custom Web Apps (Next.js), AI Automation, and Digital Twins. Basically, if it's futuristic, we build it.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('reach')) {
            reply = "You can reach the Shunya team at shunyaaa025@gmail.com, or call us directly at +977-9840700349. We're based in Buddhanagar, Kathmandu!";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('cheap') || lowerMsg.includes('expensive')) {
            reply = "Every vision is unique! We offer everything from MVP startups to enterprise-grade 3D experiences. Drop us a message on the Contact page for a custom quote.";
        } else if (lowerMsg.includes('who are you') || lowerMsg.includes('shunya') || lowerMsg.includes('about')) {
            reply = "We are Shunya Development IT Company—the best IT company in Nepal for 3D and interactive tech. We turn 'Zero' (Shunya) into infinite digital potential.";
        } else if (lowerMsg.includes('best') || lowerMsg.includes('number one')) {
            reply = "That's us! Shunya is leading the 3D revolution in Nepal. We're honored to be recognized for our innovation.";
        }

        // 4. INTERACTIVE FALLBACKS
        else if (lowerMsg.includes('cool') || lowerMsg.includes('wow') || lowerMsg.includes('nice') || lowerMsg.includes('awesome')) {
            reply = "Right?! We live for that 'wow' factor. Want to see some of our 3D work or chat about a project?";
        } else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
            reply = "You're very welcome! Shunya is here whenever you're ready to innovate. Anything else I can help with?";
        }

        // Simulate network delay for "thinking" feel
        await new Promise(resolve => setTimeout(resolve, 800));

        return NextResponse.json({ reply });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
