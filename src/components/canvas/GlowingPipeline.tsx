'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function GlowingPipeline() {
    // Load models
    const pipe = useGLTF('/models/straight long.glb') as any;
    const ball = useGLTF('/models/light ball.glb') as any;

    const ballRef = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        // Animation Loop
        if (ballRef.current) {
            const speed = 4;
            const range = 25; // Wider range to go off-screen
            const t = (state.clock.elapsedTime * speed) % range;

            // Move from left (-12.5) to right (12.5)
            ballRef.current.position.x = t - (range / 2);

            // Rotate ball for dynamic effect
            ballRef.current.rotation.z -= 0.2;
            ballRef.current.rotation.x -= 0.1;
        }
    });

    return (
        <group position={[0, -0.5, 0]}>
            {/* Continuous Pipe Structure 
            Aligning multiple segments to form a single long pipe.
            Adjusting scale and rotation to match orientation.
        */}
            <group rotation={[0, 0, Math.PI / 2]} scale={[1.5, 1.5, 1.5]}>
                {/* Center Segment */}
                <primitive object={pipe.scene.clone()} position={[0, -5, 0]} />
                <primitive object={pipe.scene.clone()} position={[0, 0, 0]} />
                <primitive object={pipe.scene.clone()} position={[0, 5, 0]} />

                {/* Extension Segments for full width */}
                <primitive object={pipe.scene.clone()} position={[0, -10, 0]} />
                <primitive object={pipe.scene.clone()} position={[0, 10, 0]} />
            </group>

            {/* The Energy Ball */}
            <group ref={ballRef}>
                <primitive object={ball.scene.clone()} scale={[2.5, 2.5, 2.5]} />

                {/* Inner intense core */}
                <pointLight ref={lightRef} distance={5} intensity={10} color="#00f0ff" />

                {/* Outer glow aura */}
                <mesh>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload('/models/straight long.glb');
useGLTF.preload('/models/light ball.glb');
