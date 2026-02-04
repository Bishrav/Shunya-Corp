'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

import * as THREE from 'three';

export function InteractiveSphere() {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.5;
            // Pulse effect
            if (hovered) {
                mesh.current.rotation.y += delta * 2;
            }
        }
    });

    return (
        <Sphere args={[1, 64, 64]} ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.2 : 1}
        >
            <MeshDistortMaterial
                color={hovered ? "#00f0ff" : "#ffffff"}
                distort={0.4}
                speed={2}
                emissive={hovered ? "#00f0ff" : "#000"}
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
            />
        </Sphere>
    );
}
