"use client";

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Defer until after React has fully painted the DOM tree
    const timer = setTimeout(async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.gsap;
        const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
        gsap.registerPlugin(ScrollToPlugin);
        gsap.config({ nullTargetWarn: false });

        const handleClick = (e: Event) => {
          const anchor = e.currentTarget as HTMLAnchorElement;
          const href = anchor.getAttribute('href');
          if (!href?.startsWith('#')) return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          gsap.to(window, {
            duration: 1.4,
            scrollTo: { y: target, offsetY: 80 },
            ease: 'power4.inOut',
          });
        };

        // Re-query AFTER full paint
        const anchors = Array.from(
          document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        );
        anchors.forEach((a) => a.addEventListener('click', handleClick));

        return () => anchors.forEach((a) => a.removeEventListener('click', handleClick));
      } catch (err) {
        // Fallback: native smooth scroll via CSS already set
        console.warn('GSAP scroll unavailable, using CSS fallback', err);
      }
    }, 500); // 500ms ensures full React tree is mounted

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
