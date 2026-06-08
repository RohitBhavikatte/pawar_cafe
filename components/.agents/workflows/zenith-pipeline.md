# 🏛️ Uriah Agency: The Zenith Pipeline

This is the Master Agency Workflow for **Uriah Agency** to build futuristic, Awwwards-level websites. It integrates **Strategic Business Discovery** and **Aesthetic Research** before moving into technical implementation to ensure 60fps performance, high conversions, and zero technical debt.

**Rule Zero:** NEVER build "Section-by-Section". Build "Layer-by-Layer".

---

## 🌑 Ground Zero: The Strategic Foundation
*Goal: Understand the "Why" and the "Who" before the "How".*

1.  **Business Intelligence:**
    *   Define the client’s core business, unique selling proposition (USP), and primary goals (Conversions, Brand Awareness, Promotion).
    *   Analyze historical data: What failed in their last site? Where did users drop off?
2.  **Strategic Mapping:**
    *   Identify the target audience's psychological profile (e.g., "High-Net-Worth Investors" vs. "Gen-Z Gamers").
    *   Define the "Conversion North Star" (The one action we want every user to take).
3.  **Brand Voice definition:**
    *   Define the "Brand Voice" (e.g., Clinical, Ethereal, Bold, Minimal).
    *   **Crucial:** DO NOT write final copy yet. Only define the messaging pillars.
4.  **The Socratic Gate:**
    *   Agent must ask 3-5 strategic questions to stress-test the requirements.
    *   **Result:** A `STRATEGY.md` file outlining the project's business objectives and brand voice.

---

## 🔍 Phase 0: Aesthetic & Asset Discovery
*Goal: Research and curate the visual and technical elements.*

1.  **Mood & Aesthetic Research:**
    *   Agent researches modern design trends, color palettes (Harmonious HSL), and typography pairings (Modern Grotesk, Serif, etc.).
    *   Agent presents "Moodboards" via descriptions or generated references.
2.  **Asset Gathering (Cinematics & 3D):**
    *   **Cinematics:** Find inspiration frames, motion patterns, and shader references from platforms like Behance, Awwwards, or Pinterest.
    *   **3D Elements:** Search for high-quality assets on Poly Haven, Sketchfab, or CGTrader.
    *   **Agent Job:** Present the "Best of the Web" options to the user. User selects the winners.
3.  **The Asset Registry:**
    *   Initialize `ASSETS.md` to track URLs, performance specs (poly-count, file size), and licenses.
4.  **Technical Feasibility Check:** 
    *   Briefly analyze if chosen 3D assets/animations fit the "16.6ms Frame Budget."

---

## 🧪 Phase 0.5: The "Mechanic Test" & Tech Stack Selection
*Goal: Prove the core interactive mechanic and finalize the tools.*

1.  **Tech Stack Finalization (Mandatory):**
    *   Based on Ground Zero and Phase 0, select the primary framework (Next.js, Vite, Astro).
    *   **The Single-Engine Rule:** You must select **ONE** primary animation engine. 
        *   **GSAP:** Best for scrollytelling, WebGL, and complex timelines.
        *   **Framer Motion:** Best for layout-heavy, UI-centric animations.
        *   *Mixing both globally is strictly forbidden due to layout thrashing and bundle bloat.*
2.  **Isolation Test (In-Stack):**
    *   Build a single-file "Draft" of the most complex interaction using the **selected stack**.
    *   Verify performance on a simulated mobile device (Target: 60fps).
3.  **The "Go/No-Go" Decision:**
    *   Finalize the choice. If the mechanic is too heavy for the chosen stack, pivot now.

---

## 🚦 Phase 1: Information Architecture & Design Generation
*Goal: Map the user journey and generate the visual blueprints.*

1.  **Ground Zero Sitemap (IA):**
    *   Construct an optimum sitemap derived from Ground Zero goals.
    *   Define the user journey: How does a user flow from the "Hook" (Hero) to the "Conversion" (CTA)?
    *   Determine which pages are "Immersive" (3D-heavy) vs. "Utility" (Content-heavy).
2.  **Stitch Design Generation:**
    *   Use the `stitch-design` skill to generate high-fidelity screens.
    *   **The Prompting Rule:** Use the colors, typography, and mood discovered in **Phase 0** as the primary constraints for Stitch.
3.  **Semantic Copywriting (The Voice):**
    *   Write high-converting, SEO-optimized copy *after* the sitemap is locked.
    *   Ensure the copy fits the physical constraints of the design.
4.  **Layered Component Mapping:**
    *   Identify which parts of the design are **Static DOM** (Phase 2) and which are **Dynamic WebGL** (Phase 3).

---

## 📐 The Math & Performance Constraints
Before writing any code, respect the budget:
*   **Multi-page Persistence:** Since we are building multi-page, the `<Canvas>` must remain mounted across route changes (using persistent layout patterns).
*   **Frame Budget:** 16.6ms per frame (to hit 60fps).
*   **DOM Budget:** Never animate layout properties (width, top, etc.). Animate ONLY `transform` and `opacity`.
*   **WebGL Contexts:** Exactly ONE `<Canvas>` per application to prevent mobile crashes.
*   **Scroll Hijacking:** Avoid native scroll hijacking. Use Lenis for smooth scroll, but keep native scroll bars.

---

## 🏗️ Phase 2: The Static DOM Shell (Progressive Enhancement)
*Goal: Build the site for a user with JS disabled. Perfect SEO, 100/100 Lighthouse.*

1. **Component Lab Construction:**
   - Build semantic HTML/Tailwind components.
   - **Crucial:** DO NOT add GSAP, Framer Motion, or Three.js in this phase.
   - **Crucial:** Leave physical empty space (e.g., `<div className="h-[50vh] w-full" id="hero-3d-anchor"></div>`) where 3D elements will go.
2. **Layout Assembly:**
   - Assemble components into pages. 
   - Ensure the layout is 100% responsive on mobile, tablet, and desktop.

---

## 🌌 Phase 3: The Global Canvas Layer (WebGL Architecture)
*Goal: Initialize the 3D world safely behind the DOM.*

1. **The Single Canvas:**
   - Inject `<Canvas>` at the very root of the application (e.g., in Next.js `layout.tsx` or a global wrapper).
   - Set CSS: `position: fixed, top: 0, left: 0, width: 100vw, height: 100vh, z-index: -1, pointer-events: none`.
2. **Canvas Tunneling (`@react-three/drei` `<View>`):**
   - We must solve the "Local Component vs Global Canvas" problem.
   - Import `<View>` from `drei`.
   - In your isolated DOM components, use `<View>` as a portal to teleport 3D meshes into the global Canvas based on the DOM element's exact bounding box.
3. **Suspense & Preloading:**
   - Wrap 3D assets in React `<Suspense>` boundaries.
   - Use Drei's `<Preload>` to prevent stuttering when new meshes enter the camera frustum.

---

## 🎭 Phase 4: The GSAP Choreography (The Bind)
*Goal: Tie the DOM scroll to the WebGL camera and add micro-interactions without using React State.*

1. **The State Trap (WARNING):**
   - **DO NOT** use `useState` to track scroll position. React reconciliations take 5-10ms and will destroy the 16.6ms frame budget, causing massive lag.
2. **Direct Ref Mutation:**
   - Use GSAP `ScrollTrigger` to mutate `useRef` values directly on the Three.js objects or DOM nodes.
   - Example: `gsap.to(modelRef.current.rotation, { y: Math.PI, scrollTrigger: {...} })`.
3. **GSAP Context:**
   - Use `@gsap/react` `useGSAP()` hook for automatic cleanup.
   - Bind GSAP timelines to the Lenis smooth scroll ticker.
4. **DOM Micro-interactions:**
   - Now add `opacity` and `transform` reveals to text and buttons using GSAP stagger effects.

---

## 🔬 Phase 5: The Audit & Polish
*Goal: Zero bugs. Flawless execution.*

1. **Draw Call Check:**
   - Ensure WebGL draw calls are under 100. Use `InstancedMesh` if rendering multiple identical objects (like particles).
2. **Memory Leak Check:**
   - Unmount all Three.js geometries and materials when navigating away. Ensure `useGSAP()` scopes are cleaning up.
3. **Accessibility:**
   - `aria-hidden="true"` on the global Canvas so screen readers don't get confused.
   - Respect `prefers-reduced-motion` in all GSAP timelines.

---

## 📈 Phase 6: Post-Launch GEO & Analytics (The Harvest)
*Goal: Measure success and optimize for AI Search.*

1.  **GEO (Generative Engine Optimization):**
    *   Audit the site structure to ensure it is highly readable for AI agents (Claude, Perplexity, GPT).
    *   Optimize schema markup for brand authority.
2.  **Conversion Audit:**
    *   Verify that the "Conversion North Star" from **Ground Zero** is being tracked correctly.
3.  **Performance Maintenance:**
    *   Set up automated Lighthouse checks to prevent "Performance Creep" over time.

---

## 📊 The Zenith Dashboard (`STATUS.md`)
*Goal: Real-time project transparency.*

The agent MUST maintain a `STATUS.md` file in the root of the project. It should be updated at the end of every turn with:
- **Active Phase:** (e.g., Phase 0.5: Prototyping)
- **Technical Health:** Estimated FPS and Draw Calls.
- **Goal Completion:** Progress against the **Ground Zero** strategy.
- **Next Blocker:** The single most important task for the next session.

---

## 🧠 Multi-Agent Orchestration Protocol
*Goal: Leverage specialized sub-agents for peak efficiency.*

The Technical Director (Primary Agent) will coordinate specialized sub-agents during specific phases to ensure zero-defect delivery:

1.  **The Architect (Phase 0.5, 3, 5):**
    *   Focus: Tech stack selection, WebGL performance, and memory management.
2.  **The Designer (Phase 0, 1, 4):**
    *   Focus: Aesthetic research, Stitch iteration, and GSAP/Framer motion theory.
3.  **The Copywriter (Ground Zero, Phase 1):**
    *   Focus: Semantic brand voice and conversion-optimized copy.
4.  **The Auditor (Phase 5, 6):**
    *   Focus: Accessibility (A11y), Security, SEO, and GEO verification.

**Protocol:** When entering a new phase, the agent should state: *"🤖 Spawning @[Specialist] to handle [Task]..."* to ensure the correct mental mode is active.

---

**Execution:**
When the user types `/zenith-pipeline`, the agent MUST:
1.  **Acknowledge the Master Plan:** State the current phase and the goals.
2.  **Enforce Hard Truth Protocol:** If the user proposes a change that violates the "Single-Engine Rule" or "Layer-by-Layer" philosophy, the agent **MUST REFUSE** and provide a technical counter-argument.
3.  **No Shortcuts:** Strictly refuse to animate or add 3D until Phase 2 (Static DOM Shell) is completely verified.
4.  **Update Dashboard:** Never end a turn without updating `STATUS.md`.
