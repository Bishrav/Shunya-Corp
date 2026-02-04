'use client';

import { use } from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            {/* Hero Image */}
            <div className="container mx-auto max-w-5xl">
                <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full h-[50vh] rounded-2xl overflow-hidden glass border border-white/10"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <span className="text-shunya-cyan font-bold tracking-widest uppercase mb-2">{project.category}</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white">{project.title}</h1>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 mt-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{project.fullDescription || project.description}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="glass p-8 rounded-xl h-fit border border-shunya-purple/20">
                        <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>
                        <div className="space-y-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-colors border border-white/10"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full gap-2 bg-shunya-cyan text-black hover:bg-shunya-cyan/90 py-3 rounded-lg transition-colors font-bold"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            )}
                            {!project.github && !project.link && (
                                <p className="text-center text-gray-500 italic">No public links available for this enterprise project.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
