'use client';

import { Scene } from '@/components/canvas/Scene';
import { SpotlightScene } from '@/components/canvas/SpotlightScene';
import { TextReveal } from '@/components/ui/TextReveal';
import { Canvas } from '@react-three/fiber';

export function SpotlightSection() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">

            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0">
                {/* Re-using Scene wrapper might be tricky if preserving specific light/shadow settings 
                     Let's use a raw Canvas or customize Scene. 
                     The Scene component has its own lights which might conflict. 
                     Let's use a dedicated Canvas setup here for full control matching the demo.
                 */}
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [7, 4, 1], fov: 40 }}
                    gl={{ antialias: true }}
                >
                    <SpotlightScene />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 pointer-events-none text-center">
                <TextReveal>
                    <h2 className="text-5xl md:text-8xl font-bold font-display text-white tracking-tighter opacity-80 mix-blend-overlay">
                        SPOTLIGHT
                    </h2>
                </TextReveal>
                <TextReveal>
                    <p className="text-shunya-cyan uppercase tracking-[0.5em] text-sm mt-4">
                        Revealing the Unknown
                    </p>
                </TextReveal>
            </div>
        </section>
    );
}
