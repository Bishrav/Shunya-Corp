'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({ children, className }: { children: React.ReactNode, className?: string }) {
    const el = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (el.current) {
            gsap.fromTo(el.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el.current,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }, []);

    return <div ref={el} className={className}>{children}</div>;
}
