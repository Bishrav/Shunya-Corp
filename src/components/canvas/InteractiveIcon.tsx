'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export type ShapeType = 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron' | 'cone';

interface InteractiveIconProps {
    shape: ShapeType;
    color: string;
}

export function InteractiveIcon({ shape, color }: InteractiveIconProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.8;
        }
    });

    const getGeometry = () => {
        switch (shape) {
            case 'sphere': return <sphereGeometry args={[1, 32, 32]} />;
            case 'box': return <boxGeometry args={[1.5, 1.5, 1.5]} />;
            case 'torus': return <torusGeometry args={[0.8, 0.3, 16, 32]} />;
            case 'octahedron': return <octahedronGeometry args={[1.2]} />;
            case 'icosahedron': return <icosahedronGeometry args={[1.2]} />;
            case 'cone': return <coneGeometry args={[1, 2, 32]} />;
            default: return <sphereGeometry args={[1, 32, 32]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef}>
                {getGeometry()}
                <meshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                    wireframe={false}
                />
            </mesh>
        </Float>
    );
}
