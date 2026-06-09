"use client";

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    if (!dot) return;

    let mouseX = 0, mouseY = 0;
    let rafId: number;

    // Use requestAnimationFrame for perfectly smooth, zero-delay following
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // We could set it directly here, but using requestAnimationFrame makes it smoother on high refresh rates
    };

    const render = () => {
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      rafId = requestAnimationFrame(render);
    };

    // Expand cursor on hoverable elements
    const onEnter = () => {
      dot.style.width = '24px';
      dot.style.height = '24px';
      dot.style.backgroundColor = 'rgba(255,215,0,0.2)';
      dot.style.border = '1px solid rgba(255,215,0,0.8)';
    };
    const onLeave = () => {
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.backgroundColor = '#ffd700';
      dot.style.border = 'none';
    };

    const hoverables = document.querySelectorAll<HTMLElement>('a, button, [role="button"], input, textarea, select, label');
    hoverables.forEach((el) => {
      el.style.cursor = 'none';
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(render);

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
    <div id="cursor-dot" />
  );
}
