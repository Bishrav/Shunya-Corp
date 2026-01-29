'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EnergyWave() {
    const count = 2000;
    const mesh = useRef<THREE.Points>(null);

    // Generate particles
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50; // Spread wide
            const y = (Math.random() - 0.5) * 2;  // Narrow height
            const z = (Math.random() - 0.5) * 2;  // Narrow depth

            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                // Wave movement
                const x = positions[i3];

                // Flow along sine wave based on X position and Time
                positions[i3 + 1] = Math.sin(x * 0.5 + time) * 1.5 + Math.cos(x * 0.3 + time * 0.5) * 0.5;

                // "Flow" effect - keep X moving but loop it back
                // Not truly moving x here to keep it simple, just animating Y creates the wave look
                // But let's add a subtle drift if we wanted
            }

            mesh.current.geometry.attributes.position.needsUpdate = true;
            mesh.current.rotation.x = time * 0.1;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#00f0ff"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
