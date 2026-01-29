'use client';

import { motion } from 'framer-motion';
import { Scene } from '@/components/canvas/Scene';
import { HeroModel } from '@/components/canvas/HeroModel';
import Link from 'next/link';
import { ArrowRight, Code, Box, Layers } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-shunya-purple/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-shunya-cyan/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 border border-shunya-cyan/30 bg-shunya-cyan/5 px-4 py-2 rounded-full mb-6 glass">
                            <span className="w-2 h-2 rounded-full bg-shunya-cyan animate-pulse" />
                            <span className="text-shunya-cyan text-sm tracking-widest uppercase font-medium">Future of Digital</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Interactive</span> <br />
                            <span className="text-gradient neon-text-purple">Digital Realities</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
                    >
                        SHUNYA specializes in immersive 3D web experiences, AI-driven automation, and premium digital transformation. We build the impossible.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/projects" className="group relative px-8 py-4 bg-white text-black font-bold text-lg tracking-wide overflow-hidden rounded-sm hover:scale-105 transition-transform duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                View Our Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-shunya-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 opacity-20" />
                        </Link>

                        <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-shunya-cyan text-white font-medium text-lg tracking-wide rounded-sm glass hover:bg-shunya-cyan/10 transition-all duration-300">
                            Start Your Project
                        </Link>
                    </motion.div>

                    {/* Tech Stack Mini Display */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex items-center gap-6 pt-8 border-t border-white/10"
                    >
                        <span className="text-sm text-gray-500 uppercase tracking-widest">Powering Next-Gen via</span>
                        <div className="flex gap-4 text-gray-400">
                            <Box className="w-6 h-6 hover:text-shunya-cyan transition-colors" /> {/* 3D */}
                            <Layers className="w-6 h-6 hover:text-shunya-purple transition-colors" /> {/* React */}
                            <Code className="w-6 h-6 hover:text-white transition-colors" /> {/* Code */}
                        </div>
                    </motion.div>
                </div>

                {/* 3D Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-[500px] md:h-[700px] w-full relative"
                >
                    <Scene className="w-full h-full pointer-events-auto">
                        <HeroModel />
                    </Scene>
                </motion.div>

            </div>
        </section>
    );
}
