---
name: Modern Heritage Cafe
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#fff4ec'
  on-tertiary: '#462a00'
  tertiary-container: '#ffd29d'
  on-tertiary-container: '#855400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#ffb95c'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter-sm: 16px
  gutter-md: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The design system is built on a "Premium Street" aesthetic—a blend of high-energy youth culture and traditional culinary pride. It targets the ambitious youth of Udgir by projecting a vibe that is simultaneously aspirational and grounded. 

The visual direction is **High-Contrast Modern** with **Tactile** accents. It utilizes the deep matte charcoal as a sophisticated canvas, allowing the vibrant gold-yellow gradients to "pop" like light or glowing embers. The mood is energetic, food-centric, and success-oriented, reflecting the core values of "Dream, Plan, Action, Success." Photography should be high-key and saturated to emphasize texture and flavor, while UI elements remain sharp and structured to convey professionalism.

## Colors

The palette is dominated by a dark-mode-first approach to create a "night-out" and "premium lounge" atmosphere. 

*   **Matte Charcoal Black (#121212):** Used for all primary backgrounds and surfaces to reduce eye strain and make the food imagery the hero.
*   **Gold-Yellow Gradient (#FFD700 to #FFA500):** This is the "Action" color. It is reserved for primary calls to action, active states, and highlights. It represents the warmth of the kitchen and the glow of success.
*   **Clean White (#FFFFFF):** Used exclusively for high-legibility body text and secondary icons to ensure accessibility against the dark backgrounds.
*   **Warning/Success:** Utilize the secondary orange-gold for warnings and a high-saturated white/gold mix for success states.

## Typography

This design system uses a tri-font strategy to balance character with utility:

1.  **Headlines (Syne):** Chosen for its avant-garde, bold presence that mimics the artistic flair of stylized Devanagari. It should be used for large titles and "Success" statements.
2.  **Body (Inter):** The workhorse font. It provides maximum readability for menus, descriptions, and transactional details against dark backgrounds.
3.  **Labels (Space Grotesk):** Used for technical data, price points, and tags. Its geometric nature adds a modern, "action-oriented" tech feel to the cafe's digital presence.

For Devanagari scripts, use a matching heavyweight font that mirrors the thick-and-thin strokes of the Syne typeface to maintain brand consistency across languages.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 8px rhythmic scale. 

*   **Mobile:** 4-column grid with 20px side margins. Content is mostly stacked, but horizontal "food carousels" are used to maximize vertical space.
*   **Desktop:** 12-column grid with a fixed container of 1200px. Gutters are kept wide (24px) to create a sense of luxury and breathing room between high-contrast elements.
*   **Padding:** Card components should use a minimum of 24px internal padding to ensure the matte black background frames the content effectively.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Glow Effects** rather than traditional heavy shadows.

*   **Surface Tiers:** The base layer is the deepest matte black. Elevated cards use a slightly lighter charcoal (#1E1E1E).
*   **Glows:** Instead of black shadows, primary buttons and active elements emit a subtle #FFD700 outer glow (5-10% opacity) to simulate the warmth of a neon sign or a kitchen heat lamp.
*   **Borders:** Use 1px "ghost" borders in low-opacity white (10%) for inactive containers. Use the gold gradient for active or "Success" focused containers.

## Shapes

The design system employs a **Rounded (level 2)** shape language. This provides a friendly, welcoming feel that contrasts with the aggressive "Modern" color palette.

*   **Base (0.5rem):** Standard buttons, input fields, and small UI elements.
*   **Large (1rem):** Menu cards, food categories, and promotional banners.
*   **Pill-shaped:** Used specifically for "Action" tags and status indicators (e.g., "Available", "New Product").

## Components

*   **Buttons:** Primary buttons use the gold-to-orange gradient with black Syne text. Secondary buttons are charcoal with a gold stroke.
*   **Cards:** Menu cards should feature high-quality imagery that bleeds to the top edge, with a 1px gold border on hover. Text within cards must be white or gold.
*   **Input Fields:** Ghost-style inputs with 1px white borders that transition to a 2px gold border on focus. Labels should use the Space Grotesk font.
*   **Values Strip:** A specialized component for the "Dream, Plan, Action, Success" values, featuring a gold-check icon and the Syne typeface in a horizontal scrolling format.
*   **Chef Character:** The logo character should be used as a "watermark" in background patterns or as a small floating "Badge of Quality" on food images.
*   **Chips/Tags:** Small pill-shaped containers with gold text on a 15% opacity gold background, used for food dietary markers (e.g., Spicy, Best Seller).
