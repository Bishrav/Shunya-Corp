'use client';

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

// Robot model URL
const MODEL_URL = "/models/RobotExpressive.glb";

type RobotProps = {
    action?: string; // Action to play
    [key: string]: unknown; // Other props (position, scale, etc.)
}

export function Robot({ action = 'Walking', ...props }: RobotProps) {
    const group = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF(MODEL_URL);
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { actions } = useAnimations(animations, group);

    // Track previous action to fade out
    const previousAction = useRef<string | null>(null);

    useEffect(() => {
        const currentActionName = action;
        const newAction = actions[currentActionName];

        if (!newAction) {
            console.warn(`Robot: Action "${currentActionName}" not found.`);
            return;
        }

        // Handle transition
        if (previousAction.current && previousAction.current !== currentActionName) {
            const oldAction = actions[previousAction.current];
            oldAction?.fadeOut(0.5);
        }

        // Reset and play new action
        // Use reset() ensures it starts from beginning if it was played before
        // fadeIn ensures smooth blend
        newAction.reset().fadeIn(0.5).play();

        // Loop settings based on action type could be handled here if needed
        // For now, let typical loops happen (Walking, Dance loop). 
        // Some might be oneshots (Jump), but usually standard behavior is fine or controlled by parent resetting to Idle.
        // For continuous control, we usually want looping.
        if (['Death', 'Sitting', 'Standing'].includes(currentActionName)) {
            // eslint-disable-next-line
            newAction.clampWhenFinished = true;
            newAction.loop = THREE.LoopOnce;
        } else if (['Jump', 'Punch', 'Yes', 'No', 'Wave', 'ThumbsUp'].includes(currentActionName)) {
            // Optional: make these one-shots if desired, but for a "Showcase" continuous looping might be funny/okay
            // or better, one-shot then return to Idle? 
            // If parent controls state, parent should switch back to Idle after X seconds?
            // PROPOSAL: Let's just play them. If they loop, they loop.
            // Actually, RobotExpressive "Jump" usually loops in a weird way if not careful.
            // Let's force loop for Dance/Walking/Run, OneShot for others?
            // For simplicity in this iteration, let's stick to default gltf settings or force loop.
            // Most RobotExpressive animations are loops except Death.
        }

        previousAction.current = currentActionName;

        return () => {
            // No cleanup needed specifically here as next effect run handles fadeOut
        };
    }, [action, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={clone} />
        </group>
    );
}

useGLTF.preload(MODEL_URL);
