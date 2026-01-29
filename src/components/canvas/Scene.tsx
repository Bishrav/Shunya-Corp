'use client';

import { Canvas } from '@react-three/fiber';
import { Preload, Environment } from '@react-three/drei';
import { StarField } from './StarField';

export function Scene({ children, className, ...props }: any) {
    return (
        <div className={className}>
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                {...props}
            >
                <SetEnvironment />
                <StarField />
                {children}
                <Preload all />
            </Canvas>
        </div>
    );
}

function SetEnvironment() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
            <directionalLight position={[-10, -10, -5]} intensity={2} color="#7000df" />
            <Environment preset="city" />
        </>
    );
}
