'use client';

import { useGLTF, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ModelProps {
    url: string;
    position?: [number, number, number];
    scale?: number;
    rotation?: [number, number, number];
}

function Model({ url, position, scale = 1, rotation = [0, 0, 0] }: ModelProps) {
    const { scene } = useGLTF(url);
    const mesh = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            // Gentle rotation
            mesh.current.rotation.y += delta * 0.2;

            // Interactive rotation on hover
            if (hovered) {
                mesh.current.rotation.y += delta * 1;
                mesh.current.scale.lerp(new THREE.Vector3(scale * 1.2, scale * 1.2, scale * 1.2), 0.1);
            } else {
                mesh.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
            }
        }
    });

    return (
        <Float>
            <primitive
                ref={mesh}
                object={scene.clone()}
                position={position}
                scale={scale}
                rotation={rotation}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            />
        </Float>
    );
}

export function CustomModels() {
    return (
        <group>
            {/* Light Ball - Glowing Core */}
            <Model url="/models/light ball.glb" position={[0, 0, 0]} scale={0.5} />

            {/* Long Tubes - Framing the scene */}
            <Model url="/models/straight long.glb" position={[-3, 1, -2]} rotation={[0, 0, Math.PI / 4]} scale={0.8} />
            <Model url="/models/straight long black.glb" position={[3, -1, -2]} rotation={[0, 0, -Math.PI / 4]} scale={0.8} />
        </group>
    );
}

// Preload models
useGLTF.preload('/models/light ball.glb');
useGLTF.preload('/models/straight long.glb');
useGLTF.preload('/models/straight long black.glb');
