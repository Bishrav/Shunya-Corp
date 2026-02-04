export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "pixelpunch",
        title: "PixelPunch",
        category: "Game Development",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650395/cld-sample-3.jpg", // Placeholder - replace with actual if available
        description: "A retro-style action brawler with modern mechanics.",
        fullDescription: "PixelPunch is a high-octane, retro-inspired brawler game designed for mobile and web platforms. Featuring pixel-perfect art validation, diverse character rosters, and multiplayer capabilities, it brings the nostalgia of 90s arcade games to modern devices.",
        technologies: ["Unity", "C#", "Photon PUN", "Pixel Art"],
        github: "https://github.com/Bishrav/PixelPunch"
    },
    {
        id: "2",
        slug: "newmobizilla",
        title: "NewMobizilla",
        category: "E-Commerce",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650392/cld-sample.jpg",
        description: "Next-gen mobile marketplace for tech enthusiasts.",
        fullDescription: "NewMobizilla is a comprehensive e-commerce platform dedicated to mobile technology. It features real-time inventory tracking, AI-powered product recommendations, and a seamless checkout experience optimized for mobile users.",
        technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
        github: "https://github.com/Bishrav/NewMobizilla"
    },
    {
        id: "3",
        slug: "automation-chatbot",
        title: "AI Automation Chatbot",
        category: "Artificial Intelligence",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650394/cld-sample-4.jpg",
        description: "Intelligent agent for customer support automation.",
        fullDescription: "An advanced LLM-powered chatbot capable of understanding context, managing support tickets, and automating routine client interactions. Built with state-of-the-art NLP models to provide human-like responses.",
        technologies: ["Next.js", "OpenAI API", "Vector Database", "TailwindCSS"]
    },
    {
        id: "4",
        slug: "neon-city-vr",
        title: "Neon City VR",
        category: "Virtual Reality",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650394/cld-sample-4.jpg",
        description: "Immersive cyberpunk city exploration.",
        fullDescription: "Experience the future in Neon City VR. A fully immersive virtual reality environment allowing users to explore a procedurally generated cyberpunk metropolis.",
        technologies: ["Three.js", "WebXR", "Blender", "React Three Fiber"]
    },
    {
        id: "5",
        slug: "shunya-web",
        title: "Shunya Corporate Web",
        category: "Web Development",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650392/cld-sample.jpg",
        description: "Our own immersive 3D corporate identity.",
        fullDescription: "The official website for Shunya Corp, showcasing our prowess in 3D web technologies. It features optimized GLB loading, procedural animations, and strict SEO compliance.",
        technologies: ["Next.js", "TypeScript", "Three.js", "TailwindCSS"]
    }
];
