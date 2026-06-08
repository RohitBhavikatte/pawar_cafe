# Premium UX Skill (@premium-ux)

> "Motion is the soul of interactive luxury."

This skill provides the architectural and technical foundation for 60FPS fluid motion, magnetic UI elements, and editorial typographic systems.

## Core Principles

1.  **Fluid Transition Logic**: Use GSAP (GreenSock Animation Platform) for all complex state transitions.
    *   **Reveal-on-Scroll**: 1.4s duration, power4.out easing.
    *   **Staggered Entry**: 0.05s intervals for child elements.
2.  **Magnetic & Tactile Elements**:
    *   Buttons and high-interaction targets should exhibit "magnetic" pull or elastic scaling on hover.
    *   Use secondary animation cues (subtle color shifts, drop-shadow expansion) to signal priority.
3.  **Sophisticated Typography**:
    *   **Scale**: Maintain a strict 1.250 (Major Third) or 1.414 (Augmented Fourth) typographic scale.
    *   **Kerning**: Always apply `letter-spacing: -0.02em` for headlines and `0.05em` for uppercase eyebrows.
    *   **Rhythm**: Consistent vertical line-height (1.2 for titles, 1.6 for body).

## Technical Implementation (Shopify/Liquid)

### GSAP Integration (GSAP 3.12+)
```html
<!-- Recommended CDN Injection -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
  gsap.registerPlugin(ScrollTrigger);
  
  // Standard Reveal Pattern
  const revealElements = document.querySelectorAll('.tp-reveal');
  revealElements.forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.4, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });
</script>
```

### CSS Design Tokens
```css
:root {
  --font-heading: 'Newsreader', serif;
  --font-body: 'Manrope', sans-serif;
  --duration-reveal: 1.4s;
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-tactile: 0 4px 30px rgba(0, 0, 0, 0.05);
}
```

## Review Checklist
- [ ] Is the motion "Fluid" (no jank)?
- [ ] Does the typography feel "Editorial" (not generic bootstrap)?
- [ ] Are interactions "Tactile" (responsive and weighted)?
