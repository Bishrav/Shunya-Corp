'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

// Robot model URL from official Three.js repo
const MODEL_URL = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/RobotExpressive/RobotExpressive.glb";

export function Robot(props: any) {
    const group = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF(MODEL_URL);
    // Clone scene to allow multiple instances if needed and avoid mutation issues
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { actions } = useAnimations(animations, group);

    const [currentAction, setCurrentAction] = useState('Walking');

    useEffect(() => {
        // Initial Animation
        const action = actions[currentAction];
        if (action) {
            action.reset().fadeIn(0.5).play();
        }

        return () => {
            // Cleanup
            action?.fadeOut(0.5);
        };
    }, [currentAction, actions]);

    const playEmote = () => {
        const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp', 'Dance'];
        const randomEmote = emotes[Math.floor(Math.random() * emotes.length)];

        // Don't interrupt if already doing something fun, or force it?
        // Let's force it for responsiveness

        const newAction = actions[randomEmote];
        const oldAction = actions[currentAction];

        if (newAction && oldAction) {
            oldAction.fadeOut(0.2);
            newAction.reset().fadeIn(0.2).play();

            newAction.clampWhenFinished = true;
            newAction.loop = THREE.LoopOnce;

            // Listen for finish to return to base state
            const onFinished = (e: any) => {
                if (e.action === newAction) {
                    newAction.fadeOut(0.2);
                    const base = actions['Idle']; // Return to Idle after emote
                    if (base) {
                        base.reset().fadeIn(0.2).play();
                        setCurrentAction('Idle');
                    }
                    // Remove listener
                    // mixer is internal to useAnimations, but we can access it if needed
                    // easier way with state in React is tricky because of the event listener closure
                }
            };

            // The mixer is accessible through actions[name].getMixer()
            newAction.getMixer().addEventListener('finished', onFinished);

            // Update state purely for tracking (won't re-trigger the effect above because handle manually)
            // actually, simpler logic:
        }
    };

    // Simpler click handler using state effect would be better but let's do imperative for transitions
    const handleClick = (e: any) => {
        e.stopPropagation();
        const emotes = ['Jump', 'Wave', 'ThumbsUp', 'Dance', 'Punch'];
        const next = emotes[Math.floor(Math.random() * emotes.length)];

        const outgoing = actions[currentAction];
        const incoming = actions[next];

        if (outgoing && incoming) {
            outgoing.fadeOut(0.5);
            incoming.reset().fadeIn(0.5).play();

            incoming.clampWhenFinished = true;
            incoming.loop = THREE.LoopOnce;

            incoming.getMixer().addEventListener('finished', () => {
                // Return to walking or idle
                const base = 'Walking';
                const baseAction = actions[base];
                if (baseAction) {
                    incoming.fadeOut(0.5);
                    baseAction.reset().fadeIn(0.5).play();
                    setCurrentAction(base);
                }
            });

            setCurrentAction(next);
        }
    };


    return (
        <group ref={group} {...props} dispose={null} onClick={handleClick}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
            <primitive object={clone} />
        </group>
    );
}

useGLTF.preload(MODEL_URL);
