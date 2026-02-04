'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CatmullRomCurve3, Vector3 } from 'three';
import { Tube } from '@react-three/drei';
import * as THREE from 'three';

export function DataStream() {
    const curve = new CatmullRomCurve3([
        new Vector3(10, 0, 0),
        new Vector3(5, 2, 0),
        new Vector3(0, -2, 0),
        new Vector3(-5, 2, 0),
        new Vector3(-10, 0, 0),
    ]);

    const ballRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ballRef.current) {
            // Animation 0 to 1 loop
            const t = (state.clock.elapsedTime * 0.2) % 1;
            const pos = curve.getPoint(1 - t); // 1 - t to move Right to Left
            ballRef.current.position.copy(pos);
        }
    });

    return (
        <group>
            {/* The Tube */}
            <Tube args={[curve, 64, 0.2, 8, false]} >
                <meshBasicMaterial color="#7000df" transparent opacity={0.1} wireframe />
            </Tube>

            {/* The Glowing Ball */}
            <mesh ref={ballRef}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshBasicMaterial color="#00f0ff" />
                <pointLight distance={5} intensity={5} color="#00f0ff" />
            </mesh>
        </group>
    );
}
