# 04. Art Direction and Visual Style

**Velvet Pong**

**Version:** 1.0 | **Date:** June 2026

---

## 1. Overall Visual Philosophy

Velvet Pong aims for a **cinematic, photorealistic-yet-stylized** presentation that captures the seductive glamour, dramatic lighting, and kinetic energy of a high-end contemporary strip club while maintaining the crisp readability required for competitive arcade gameplay.

**Key Visual Pillars:**

- **Neon and Shadow Play**: Dominant aesthetic of deep blacks, rich crimsons, electric blues, golds, and vibrant magentas. Strong contrast between bright neon signage/accents and deep, moody shadows. Volumetric god rays, light shafts through haze, and reflective surfaces (polished floors, chrome, glass) are essential.
- **Movement and Performance**: Every element — fabric on dancers, hair, smoke, fabric movement, ball trails, crowd reactions — must feel alive and responsive. High-quality cloth simulation, secondary animation, and procedural elements.
- **Cinematic Framing**: Matches are presented with dynamic camera work (subtle tracking, dramatic low angles during big moments, reactive zooms on spectacular hits) while preserving perfect gameplay readability. Optional cinematic replays and photo mode.
- **Elegance and Respect**: Character designs emphasize strength, grace, confidence, and individuality. Costumes are fashionable, revealing but never exploitative; focus on silhouette, movement, and material quality (silk, velvet, sequins, leather with realistic subsurface scattering and specular highlights).
- **Spectacle Layering**: Base Pong clarity + rich environmental storytelling + dynamic reactive systems (lighting, particles, animations) that escalate with gameplay intensity.

**Reference Mood Board (Textual):** Films like *Drive*, *Blade Runner 2049*, *The Neon Demon*, *John Wick* (club scenes), *Ex Machina* (clean futurism), and high-fashion editorials mixed with classic Vegas glamour and modern burlesque photography. Video game references: *Control* (lighting), *Cyberpunk 2077* (neon density and reactivity), *Hitman* series (detailed social spaces).

---

## 2. Color Palette and Lighting

**Primary Palette:**
- Deep background: #0A0A0F (near black)
- Neon accents: #FF2D95 (hot pink/magenta), #00F0FF (cyan), #FFD700 (gold), #FF4D00 (vibrant orange)
- Warm highlights: #C8A16E (warm gold/bronze), #E8D5B7 (champagne)
- Skin tones: Diverse, realistic range with high subsurface scattering.
- Table felt: Rich emerald or deep burgundy with subtle pattern.

**Lighting Approach:**
- **Lumen Global Illumination** for realistic bounce and color bleeding.
- **Dynamic Neon**: Hundreds of individual neon tubes and signs with emissive materials, slight flicker, and pulse synced to music/energy.
- **Spotlights and Practicals**: Moving follow spots on stage, practical lamps at tables, under-table glow for the Pong surface.
- **Volumetric Fog/Haze**: Light shafts, god rays, and atmospheric depth. Density increases with club energy.
- **Reactive Lighting**: Match intensity (rally length, big points) drives lighting changes — strobing, color shifts, intensity swells that enhance spectacle without obscuring gameplay.

---

## 3. Environment Design

**The Velvet Lounge Main Floor**

- **Architecture**: Opulent yet intimate. High ceilings with exposed industrial beams softened by heavy velvet drapes and crystal chandeliers mixed with modern neon. Central elevated stage with multiple poles and runway. Curved bar with backlit bottle displays. Scattered high-top tables and plush booths (VIP areas with better views of both stage and Pong table).
- **The Pong Table**: Custom centerpiece. Regulation size but elevated on a low platform with integrated neon edging and subtle under-lighting. Branded "Velvet Pong" logo inlaid. Surrounded by a small "pit" area with standing room and a few VIP stools. The table itself has slight curvature or modular sections that can shift for environmental interactions.
- **Details**: Condensation on glasses, scattered currency (stylized tips), cigarette smoke (tasteful particle systems), discarded programs or match schedules, security cameras, emergency exits with neon signage. Every surface has wear, fingerprints, and history.

**Modular & Variant Environments:**
- Standard main floor (default).
- VIP Lounge extension (more intimate, darker, higher stakes matches).
- Rooftop Terrace (open air, city lights, different acoustics and wind effects).
- Private Back Room (intimate, dramatic single-lighting, story-specific).
- Tournament Stage (larger, theatrical, audience seating, bigger spectacle).

All variants share the same high-fidelity asset library with material and lighting swaps.

---

## 4. Character Art Direction

**Diversity and Representation:** Full spectrum of body types, ethnicities, ages (within plausible range for performers/staff), and gender expressions. All characters designed with dignity, agency, and visual interest.

**Costume Philosophy:**
- **Dancers**: High-fashion burlesque / contemporary performance wear. Emphasis on movement (flowing fabrics, fringe, strategic cutouts, harness elements). Multiple tiers: Standard stage wear → Signature/relationship-unlocked elaborate costumes with unique particle or lighting effects → Story-specific or "private" outfits.
- **Staff (Bouncers, Bartenders, Manager)**: Sharp, professional, slightly intimidating or stylish uniforms that fit the club's brand. Subtle customization options.
- **Patrons**: Mix of high-society, creative industry, and underworld types. Varied silhouettes and detail levels.
- **Player Avatar**: Full customization with club-appropriate clothing options that can be upgraded.

**Animation Priorities:**
- High-quality mocap or hand-keyed dance routines (10–20 per primary dancer) with seamless blending and state machine logic.
- Facial animation and micro-expressions for all dialogue and reactions.
- Cloth, hair, and accessory simulation of AAA quality.
- Reactive idle and transition animations tied to club energy and match events.

---

## 5. UI and HUD Design

**Philosophy:** Diegetic and immersive where possible. Minimalist during active play to preserve focus.

- **In-Match HUD**: Subtle neon-outlined elements. Score as elegant digital or analog-style counters. Power-up icons as stylized club signage or glowing symbols. Minimal timer or set indicator.
- **Menus**: Framed as in-world objects — VIP tablet menus, neon signage selectors, or elegant leather-bound "house rules" books. Smooth animations, haptic feedback on controller.
- **Photo Mode**: Full cinematic controls with club-appropriate filters, depth of field, and "print" style output.

**Typography:** Custom or premium sans-serif with subtle glow/neon effects for headers. Clean, readable body text. Club logo integration.

---

## 6. VFX and Post-Processing

- **Ball and Paddle Effects**: Glowing trails with color based on spin/speed. Impact sparks, stylized "energy" bursts on strong hits. Subtle distortion or heat haze on very fast balls.
- **Environmental VFX**: Confetti or stylized currency rain on big wins, smoke puffs, lens flares, god rays intensification.
- **Post-Process**: Subtle film grain, vignette for cinematic feel, adaptive bloom and lens flare, color grading that shifts with club energy (warmer/more saturated at high energy).
- ** Niagara Particle Systems** for all effects — scalable and performant.

---

*End of Document 04*