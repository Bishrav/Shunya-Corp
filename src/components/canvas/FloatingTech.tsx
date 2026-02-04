'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const LANGUAGES = [
    "React", "Next.js", "Three.js", "TypeScript",
    "Node.js", "Python", "Django", "WebGL", "GSAP"
];

function FloatingWord({ word, position, color }: { word: string, position: [number, number, number], color: string }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.lookAt(0, 0, 10);
        }
    });

    return (
        <Float rotationIntensity={0.5} floatIntensity={2} speed={1.5}>
            <Text
                ref={mesh}
                position={position}
                fontSize={0.5}
                color={color}
                font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj49.woff"
                anchorX="center"
                anchorY="middle"
            >
                {word}
                <meshStandardMaterial emissive={color} emissiveIntensity={0.8} toneMapped={false} />
            </Text>
        </Float>
    );
}

export function FloatingTech() {
    const words = useMemo(() => {
        return LANGUAGES.map((lang, i) => {
            const phi = Math.acos(-1 + (2 * i) / LANGUAGES.length);
            const theta = Math.sqrt(LANGUAGES.length * Math.PI) * phi;

            return {
                word: lang,
                position: [
                    4 * Math.cos(theta) * Math.sin(phi),
                    4 * Math.sin(theta) * Math.sin(phi),
                    4 * Math.cos(phi)
                ] as [number, number, number],
                color: i % 2 === 0 ? "#00f0ff" : "#7000df"
            };
        });
    }, []);

    const group = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={group}>
            {words.map((item, i) => (
                <FloatingWord key={i} {...item} />
            ))}
        </group>
    );
}
