'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { InteractiveIcon, ShapeType } from '@/components/canvas/InteractiveIcon';

export default function Services() {
    // Services Data with 3D Shape mappings
    const services = [
        {
            shape: 'icosahedron',
            title: "Interactive 3D Web",
            description: "Immersive web experiences using Three.js and WebGL. We turn websites into digital worlds.",
            color: "#00f0ff" // shunya-cyan
        },
        {
            shape: 'box',
            title: "Custom Web Apps",
            description: "Scalable, high-performance web applications built with Next.js and modern architectures.",
            color: "#a855f7" // shunya-purple
        },
        {
            shape: 'torus',
            title: "Game Development",
            description: "Cross-platform game development with Unity, Unreal, and WebGL for next-gen entertainment.",
            color: "#00f0ff"
        },
        {
            shape: 'sphere',
            title: "AI & Automation",
            description: "Intelligent systems that automate workflows and enhance decision-making capabilities.",
            color: "#a855f7"
        },
        {
            shape: 'octahedron',
            title: "Digital Twins",
            description: "Virtual replicas of physical systems for monitoring, simulation, and optimization.",
            color: "#00f0ff"
        },
        {
            shape: 'cone',
            title: "Data Visualization",
            description: "Transforming complex datasets into intuitive, interactive 2D and 3D visual dashboards.",
            color: "#a855f7"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <div className="text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-display mb-6 neon-text-purple"
                >
                    SHUNYA Solutions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                    We leverage cutting-edge technology to build digital products that defy expectations.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-shunya-cyan/30"
                    >
                        {/* 3D Icon Container */}
                        <div className="h-40 mb-6 bg-white/5 rounded-xl overflow-hidden relative">
                            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                                <ambientLight intensity={0.5} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                                <Suspense fallback={null}>
                                    <InteractiveIcon
                                        shape={service.shape as ShapeType}
                                        color={service.color}
                                    />
                                </Suspense>
                            </Canvas>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-white transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Learn More</span>
                            <span className="text-xl">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
