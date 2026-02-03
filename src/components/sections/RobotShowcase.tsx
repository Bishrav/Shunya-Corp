'use client';

import { useState } from 'react';
import { Scene } from '@/components/canvas/Scene';
import { Robot } from '@/components/canvas/Robot';
import { TextReveal } from '@/components/ui/TextReveal';
import { OrbitControls } from '@react-three/drei';
import { Play, Hand, UserCheck, Zap, Music } from 'lucide-react'; // Example icons

export function RobotShowcase() {
    const [robotAction, setRobotAction] = useState('Idle');

    const actions = [
        { name: 'Idle', label: 'Idle', icon: <UserCheck className="w-4 h-4" /> },
        { name: 'Walking', label: 'Walk', icon: <Play className="w-4 h-4" /> },
        { name: 'Dance', label: 'Dance', icon: <Music className="w-4 h-4" /> },
        { name: 'Wave', label: 'Wave', icon: <Hand className="w-4 h-4" /> },
        { name: 'Jump', label: 'Jump', icon: <Zap className="w-4 h-4" /> },
    ];

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-shunya-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-shunya-purple/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">

                {/* 3D Robot Area */}
                <div className="h-[60vh] lg:h-[80vh] w-full order-2 lg:order-1 relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-shunya-cyan/10 to-transparent pointer-events-none" />

                    <div className="flex-grow w-full h-full">
                        <Scene className="w-full h-full cursor-grab active:cursor-grabbing">
                            {/* Zoomed out: Scale 1.5 */}
                            <Robot
                                position={[0, -2, 0]}
                                scale={[1.5, 1.5, 1.5]}
                                rotation={[0, 0.3, 0]}
                                action={robotAction}
                            />
                            <OrbitControls
                                enableZoom={true}
                                minPolarAngle={Math.PI / 4}
                                maxPolarAngle={Math.PI / 2}
                                autoRotate
                                autoRotateSpeed={0.5}
                            />
                            <ambientLight intensity={1} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00f0ff" />
                        </Scene>
                    </div>

                    {/* Interaction Hint */}
                    <div className="absolute top-6 right-6 pointer-events-none text-right">
                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-shunya-cyan font-mono text-sm border border-shunya-cyan/30 px-2 py-1 rounded bg-black/50 backdrop-blur-md inline-block">
                            {robotAction}
                        </p>
                    </div>

                    {/* Control Panel Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <div className="flex flex-wrap justify-center gap-3">
                            {actions.map((act) => (
                                <button
                                    key={act.name}
                                    onClick={() => setRobotAction(act.name)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300
                                        ${robotAction === act.name
                                            ? 'bg-shunya-cyan text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-shunya-cyan/50'
                                        }
                                    `}
                                >
                                    {act.icon}
                                    {act.label}
                                </button>
                            ))}
                        </div>
                        <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">
                            Scroll to Zoom • Drag to Rotate
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                    <TextReveal>
                        <div className="inline-flex items-center space-x-2 border border-shunya-purple/30 bg-shunya-purple/5 px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-shunya-purple animate-pulse" />
                            <span className="text-shunya-purple text-sm tracking-widest uppercase font-medium">Interactive AI</span>
                        </div>
                    </TextReveal>

                    <TextReveal>
                        <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                            Meet Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shunya-cyan to-shunya-purple">Digital Agent</span>
                        </h2>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Experience the future of human-computer interaction. Control the avatar, explore its capabilities, and imagine the possibilities of embodied AI.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <div className="px-6 py-3 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <span className="block text-2xl font-bold text-white mb-1">React</span>
                                <span className="text-xs text-shunya-cyan uppercase tracking-wide">Three Fiber</span>
                            </div>
                            <div className="px-6 py-3 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <span className="block text-2xl font-bold text-white mb-1">WebGL</span>
                                <span className="text-xs text-shunya-purple uppercase tracking-wide">Performance</span>
                            </div>
                        </div>
                    </TextReveal>
                </div>
            </div>
        </section>
    );
}
