'use client';

import { motion } from 'framer-motion';

// Mock Data simulating Cloudinary response
const projects = [
    {
        id: 1,
        title: "Neon City VR",
        category: "Game Development",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650394/cld-sample-4.jpg", // Using a public Cloudinary demo image that definitely exists
        description: "Immersive VR experience for next-gen consoles."
    },
    {
        id: 2,
        title: "Alpha Finance AI",
        category: "Fintech",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650395/cld-sample-3.jpg",
        description: "AI-powered dashboard for real-time trading analytics."
    },
    {
        id: 3,
        title: "Cyberpunk Edu",
        category: "Education",
        image: "https://res.cloudinary.com/demo/image/upload/v1689650392/cld-sample.jpg",
        description: "Gamified learning platform for coding."
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen pt-32 px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-12 neon-text-cyan">Our Projects</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass rounded-xl overflow-hidden cursor-pointer hover:neon-box-cyan transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="h-64 overflow-hidden relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-shunya-cyan border border-shunya-cyan px-4 py-2 rounded-full font-bold">View Case Study</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <span className="text-xs font-bold text-shunya-purple uppercase tracking-widest">{project.category}</span>
                            <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-shunya-cyan transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
