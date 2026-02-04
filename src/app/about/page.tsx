'use client';

import { motion } from 'framer-motion';
import { SpotlightScene } from '@/components/canvas/SpotlightScene';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function About() {
    const timeline = [
        { year: "2023", title: "The Inception", desc: "Shunya was born from a desire to merge art with code. We started as a small duo experimenting with WebGL." },
        { year: "2024", title: "Global Expansion", desc: "Secured our first international enterprise clients. Expanded the team to include AI specialists and 3D artists." },
        { year: "2025", title: "The AI Revolution", desc: "Integrated proprietary LLM agents into our workflow, increasing efficiency by 300%. Launched Shunya Labs." },
        { year: "2026", title: "Present Day", desc: "Leading the market in immersive web experiences in Nepal and beyond. Building the future of the 3D web." },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            {/* Hero Section with 3D */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                <div className="order-2 lg:order-1">
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white leading-tight">
                        We Engineer <br />
                        <span className="text-shunya-cyan">Digital Reality</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        Shunya is more than an IT company. We are a digital forge where code meets creativity.
                        We specialize in building immersive 3D websites, AI-powered applications, and next-gen digital experiences that leave a lasting impact.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-16 h-1 bg-shunya-purple rounded-full" />
                        <div className="w-8 h-1 bg-shunya-cyan rounded-full" />
                    </div>
                </div>
                <div className="h-[400px] lg:h-[500px] w-full order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10 glass">
                    {/* Interactive 3D Model */}
                    <div className="w-full h-full relative">
                        <Canvas shadows camera={{ position: [7, 7, 7], fov: 50 }}>
                            <Suspense fallback={null}>
                                <SpotlightScene />
                                <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>

            {/* Vision & Methodology */}
            <div className="grid md:grid-cols-2 gap-8 mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-10 glass rounded-2xl border-l-4 border-shunya-purple"
                >
                    <h2 className="text-3xl font-bold font-display mb-4 text-white">Our Vision</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        To maintain a state of &quot;Shunya&quot; (Zero) — the point of infinite potential. We believe the web should be an immersive canvas, unrestricted by traditional 2D boundaries.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-10 glass rounded-2xl border-l-4 border-shunya-cyan"
                >
                    <h2 className="text-3xl font-bold font-display mb-4 text-white">Our Stack</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        We don&apos;t just use frameworks; we master them. Next.js for performance, Three.js for immersion, and Python/Node.js for intelligent backends.
                    </p>
                </motion.div>
            </div>

            {/* Timeline */}
            <div className="mb-32">
                <h2 className="text-4xl font-bold font-display text-center mb-16 neon-text-purple">The Journey</h2>
                <div className="relative border-l border-white/10 ml-6 md:ml-1/2 space-y-12">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative pl-12 md:pl-0">
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-shunya-cyan rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />

                            <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                                <div className={`mb-2 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:hidden'}`}>
                                    <span className="text-5xl font-bold text-white/5 font-display">{item.year}</span>
                                </div>
                                <div className={`${index % 2 !== 0 ? 'md:pl-12' : 'md:col-start-1 md:text-right md:pr-12'}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                                <div className={`hidden md:block ${index % 2 !== 0 ? '' : 'md:col-start-2 md:pl-12'}`}>
                                    <span className="text-5xl font-bold text-white/5 font-display">{item.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Global Clients", value: "50+" },
                        { label: "Projects Shipped", value: "120+" },
                        { label: "Bot Interactions", value: "10K+" },
                        { label: "Lines of Code", value: "1M+" }
                    ].map((stat) => (
                        <div key={stat.label} className="p-6 glass rounded-xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
