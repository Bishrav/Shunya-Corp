'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-12 neon-text-cyan">Our Projects</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Link href={`/projects/${project.slug}`} key={project.id} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass rounded-xl overflow-hidden cursor-pointer hover:neon-box-cyan transition-all duration-300 h-full flex flex-col"
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

                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold text-shunya-purple uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-shunya-cyan transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mt-2 text-sm line-clamp-2">{project.description}</p>
                                </div>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    {project.technologies.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-300">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
