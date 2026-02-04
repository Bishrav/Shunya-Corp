'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';

const TEXTURE_URL = "/textures/disturb.jpg";
const MODEL_URL = "/models/Lucy100k.ply";

export function SpotlightScene() {
    // Load texture
    const texture = useTexture(TEXTURE_URL);

    useEffect(() => {
        if (texture) {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.generateMipmaps = false;
            texture.needsUpdate = true;
        }
    }, [texture]);

    // Load PLY Model
    const geometry = useLoader(PLYLoader, MODEL_URL);
    // Determine if geometry needs computation (it's loaded as BufferGeometry)
    // The example code does: geometry.computeVertexNormals();
    if (!geometry.attributes.normal) {
        geometry.computeVertexNormals();
    }

    const lightRef = useRef<THREE.SpotLight>(null);

    // Animate light position
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() / 3; // Slowed down consistent with example (time/3000ms approx)
        if (lightRef.current) {
            lightRef.current.position.x = Math.cos(time) * 2.5;
            lightRef.current.position.z = Math.sin(time) * 2.5;
        }
    });

    return (
        <>
            <ambientLight intensity={0.1} />

            <spotLight
                ref={lightRef}
                position={[2.5, 5, 2.5]}
                angle={Math.PI / 6}
                penumbra={1}
                decay={2}
                distance={0}
                intensity={100}
                map={texture}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-focus={1}
                shadow-bias={-0.003}
            />

            {/* Floor */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshLambertMaterial color="#bcbcbc" />
            </mesh>

            {/* Target Object (Lucy PLY) */}
            <mesh
                geometry={geometry}
                scale={[0.0024, 0.0024, 0.0024]}
                rotation={[0, -Math.PI / 2, 0]}
                position={[0, -0.2, 0]} // Adjusted Y slightly to sit on floor correctly (-1 floor + 0.8 model Y from example = -0.2)
                castShadow
                receiveShadow
            >
                <meshLambertMaterial />
            </mesh>
        </>
    );
}
