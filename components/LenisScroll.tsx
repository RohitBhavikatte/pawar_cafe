"use client";

import { useEffect } from 'react';

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      try {
        // Dynamically import Lenis so the app doesn't crash if it's not installed yet
        const LenisModule = await import('lenis');
        const LenisClass = LenisModule.default;
        
        lenis = new LenisClass({
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential easing
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.8, // Slightly heavier, more premium feel
          touchMultiplier: 2,
        });

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Handle smooth anchor scrolling
        const handleAnchorClick = (e: MouseEvent) => {
          const target = e.currentTarget as HTMLAnchorElement;
          const href = target.getAttribute('href');
          if (href?.startsWith('#')) {
            e.preventDefault();
            lenis.scrollTo(href, { offset: -80, duration: 1.5 });
          }
        };

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener('click', handleAnchorClick as EventListener);
        });

      } catch (err) {
        console.warn('Lenis is not installed. Using native scroll. Run: npm install lenis');
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
