'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function GlowingPipeline() {
    const pipe = useGLTF('/models/straight long.glb') as any;
    const ball = useGLTF('/models/light ball.glb') as any;

    const ballRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ballRef.current) {
            // Animate from Left (-10) to Right (10)
            // Adjust speed with the multiplier (5)
            // Modulo 20 because total distance is approx 20 units (-10 to 10)
            const time = state.clock.elapsedTime * 6;
            const position = (time % 20) - 10;

            ballRef.current.position.set(position, 0, 0);
            ballRef.current.rotation.z -= 0.1; // Rotate ball as it moves
        }
    });

    return (
        <group>
            {/* The Pipe - Repeated to make it long enough */}
            <group position={[-5, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2, 2, 2]}>
                <primitive object={pipe.scene.clone()} />
            </group>
            <group position={[5, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2, 2, 2]}>
                <primitive object={pipe.scene.clone()} />
            </group>

            {/* The Glowing Ball */}
            <group ref={ballRef}>
                <primitive object={ball.scene.clone()} scale={[0.8, 0.8, 0.8]} />
                <pointLight distance={8} intensity={8} color="#00f0ff" />
            </group>
        </group>
    );
}

useGLTF.preload('/models/straight long.glb');
useGLTF.preload('/models/light ball.glb');
