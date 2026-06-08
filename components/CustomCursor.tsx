"use client";

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    // Lag the ring for a trailing effect
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animate);
    };

    // Expand cursor on hoverable elements
    const onEnter = () => {
      dot.style.width = '14px';
      dot.style.height = '14px';
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(255,215,0,0.9)';
    };
    const onLeave = () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(255,215,0,0.5)';
    };

    const hoverables = document.querySelectorAll<HTMLElement>('a, button, [role="button"], input, textarea, select, label');
    hoverables.forEach((el) => {
      el.style.cursor = 'none';
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
