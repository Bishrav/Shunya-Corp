'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
    const cursorSm = useRef<HTMLDivElement>(null);
    const cursorLg = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP quickTo is highly optimized for mouse movement
        const xSm = gsap.quickTo(cursorSm.current, "x", { duration: 0.1, ease: "power3" });
        const ySm = gsap.quickTo(cursorSm.current, "y", { duration: 0.1, ease: "power3" });

        const xLg = gsap.quickTo(cursorLg.current, "x", { duration: 0.5, ease: "power3" });
        const yLg = gsap.quickTo(cursorLg.current, "y", { duration: 0.5, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            // Center the cursors (assuming 16px and 32px widths)
            xSm(e.clientX - 8);
            ySm(e.clientY - 8);
            xLg(e.clientX - 16);
            yLg(e.clientY - 16);
        };

        const onHoverStart = () => {
            gsap.to(cursorSm.current, { scale: 3, duration: 0.3 });
            gsap.to(cursorLg.current, { scale: 0, opacity: 0, duration: 0.3 });
        };

        const onHoverEnd = () => {
            gsap.to(cursorSm.current, { scale: 1, duration: 0.3 });
            gsap.to(cursorLg.current, { scale: 1, opacity: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Add listeners to clickable elements
        const clickables = document.querySelectorAll('a, button');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', onHoverStart);
            el.addEventListener('mouseleave', onHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', onHoverStart);
                el.removeEventListener('mouseleave', onHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorSm}
                className="fixed top-0 left-0 w-4 h-4 bg-shunya-cyan rounded-full mix-blend-difference pointer-events-none z-[9999]"
            />
            <div
                ref={cursorLg}
                className="fixed top-0 left-0 w-8 h-8 border border-shunya-purple rounded-full pointer-events-none z-[9998]"
            />
        </>
    );
}
