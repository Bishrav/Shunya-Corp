'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function HeroModel() {
    const meshRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
            meshRef.current.rotation.y = Math.cos(t * 0.2) * 0.2;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x = t * 0.5;
            torusRef.current.rotation.y = t * 0.2;
        }
    });

    return (
        <group>
            <Float floatIntensity={2} speed={2}>
                <mesh ref={meshRef} scale={1.8}>
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        thickness={3}
                        chromaticAberration={1}
                        anisotropy={0.3}
                        distortion={0.6}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color="#00f0ff"
                        background={new THREE.Color("#030014")}
                    />
                </mesh>
            </Float>

            <Float floatIntensity={1} speed={3} rotationIntensity={2}>
                <mesh ref={torusRef} scale={2.5}>
                    <torusGeometry args={[1.8, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#7000df" emissive="#7000df" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </Float>
        </group>
    );
}
