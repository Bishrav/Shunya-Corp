'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Decal, useTexture } from '@react-three/drei';

function TechShape({ position, color, speed }: any) {
    const mesh = useRef<any>();
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * speed;
            mesh.current.rotation.y += delta * speed * 0.5;
            if (hovered) {
                mesh.current.rotation.x += delta * 2;
            }
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={mesh}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1}
            >
                <dodecahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial
                    color={hovered ? "#ffffff" : color}
                    wireframe
                    emissive={color}
                    emissiveIntensity={hovered ? 2 : 0.5}
                />
            </mesh>
        </Float>
    );
}

export function TechScene() {
    return (
        <group>
            <TechShape position={[-2, 0, 0]} color="#00f0ff" speed={0.2} />
            <TechShape position={[0, 1, 0]} color="#7000df" speed={0.3} />
            <TechShape position={[2, -0.5, 0]} color="#ffffff" speed={0.1} />
        </group>
    );
}
