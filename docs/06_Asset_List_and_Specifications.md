# 06. Asset List and Specifications

**Velvet Pong**

**Version:** 1.0 | **Date:** June 2026

*This document provides exhaustive, production-ready specifications for all asset categories. Use as a brief for internal teams, outsourcing partners, or AI-assisted generation pipelines. All assets must meet AAA quality standards: high-fidelity geometry/textures where visible, optimized LODs, clean UVs, proper naming conventions, and PBR material authoring.*

---

## 1. 3D Environment Assets

### 1.1 Main Club Interior (The Velvet Lounge)

**Hero Assets (High Detail):**
- Full modular floor, walls, ceiling kit (Nanite-enabled, ~200–400k tris per major module).
- Central elevated stage with 3–4 interactive poles, runway, stairs, lighting rig (detailed truss, moving heads, cables).
- Custom Pong table centerpiece: Regulation proportions, integrated neon edging, under-lighting, subtle surface wear and reflections. ~150k tris + Nanite.
- Bar counter (20+ ft long) with backlit shelving, 200+ unique bottle props, taps, glassware, ice machine.
- VIP booths (4–6 variations) with plush seating, tables, privacy curtains, integrated lighting.
- High-top tables and bar stools (modular set of 15+ pieces).

**Props and Detail Assets (Hundreds):**
- Neon signage ("Velvet Lounge", "Pong Table", "VIP", "Private", "House Rules", etc.) — 30+ unique signs with emissive materials and slight animation (flicker, pulse).
- Lighting fixtures: 50+ practicals, chandeliers, wall sconces, under-table LEDs.
- Furniture: Leather sofas, armchairs, side tables, coat check.
- Bar props: Hundreds of bottles, glasses, shakers, napkins, menus, ashtrays, tip jars.
- Stage props: Feather boas, discarded clothing items (tasteful), performance accessories.
- Crowd clutter: Purses, phones, jackets, programs, currency (stylized bills and chips).
- Security elements: Cameras, rope stanchions, emergency signage, fire extinguishers.

**Materials:** PBR with multiple variants (clean, worn, wet, reflective). Substance 3D or equivalent authoring. 4K+ base textures where hero assets visible.

**Optimization:** Nanite for hero geometry. HLOD for distant areas. Aggressive culling and LOD streaming.

### 1.2 Variant Environments

- VIP Private Rooms (2–3 unique): Darker, more intimate, single dramatic lighting, different table variants.
- Rooftop Terrace: Open skybox, cityscape backdrop, wind-affected particles, different acoustic profile.
- Tournament Hall: Larger scale, theatrical seating, bigger stage integration, championship branding.

All share core asset library with material and prop swaps.

---

## 2. Character Assets

### 2.1 Primary NPCs (8 Core)

Each primary character requires:
- **Full Body Mesh**: ~80k–120k tris (Nanite), detailed topology for animation and cloth.
- **Head**: Separate or blendshape-ready with high-detail face (MetaHuman or custom sculpt). 40–60 blendshapes minimum for dialogue and expression.
- **Outfits**: 3–5 tiers per character (base stage/work, signature/relationship, story-specific, optional "private" or performance variant). Each outfit 30k–60k tris with high-quality cloth simulation setup.
- **Hair**: High-fidelity groom or card-based with simulation.
- **Accessories**: Jewelry, shoes, performance props (microphones, fans, etc.) with physics.
- **Textures**: 4K albedo, normal, roughness, metallic, subsurface scattering, emissive where applicable. Multiple material IDs.
- **Animations**: 
  - Locomotion and idles (10–15).
  - Dance routines: 10–20 unique per primary dancer (mocap recommended, 30–120 seconds each, seamless loops and transitions).
  - Dialogue and reaction animations (facial + body).
  - Match-specific reactions (cheer, disappointment, taunt, power-up activation).
- **LOD Chain**: 3–4 levels down to ~5k tris for crowd distance.

**Specific Primary Characters:**
- Elena Voss (Star Dancer)
- Marcus Kane (Head of Security)
- Sofia Laurent (Club Manager)
- Darius Moreau (DJ)
- Isabella Ruiz (Rising Dancer)
- Victor Lang (Rival Champion)
- Regina Holt (Bartender)
- The Owner ("Veil")

### 2.2 Secondary Characters

- Background Dancers (6–8 unique looks): Similar fidelity but fewer outfit tiers (2–3) and fewer unique animations (5–8 dances + idles/reactions). Reusable with material/color variation.
- Patrons (12–20 unique): Lower tris (~40k), 1–2 outfits, basic reactions and idles. Some seated/standing loops.
- Staff Extras (bartenders, servers, security): 4–6 unique, reusable.

### 2.3 Player Avatar

- Full MetaHuman or equivalent rig with extensive customization sliders (face, body, skin, hair, tattoos, scars).
- 4–6 base clothing/outfit archetypes (street to club formal) with dye and accessory options.
- Same animation set requirements as primary NPCs for consistency in cutscenes and reactions.

---

## 3. Gameplay-Specific Assets

### 3.1 Paddles (Player and AI Controlled)

**Quantity:** 25–40 unique archetypes + variants.

**Requirements per Paddle:**
- High-detail model (15k–30k tris) with Nanite.
- Multiple material variants (standard, premium, signature/unlocked).
- Emissive accents, particle attachment points for effects.
- Custom collision and physics setup for accurate ball interaction.
- Animation: Subtle "impact" deformation or flex on strong hits; idle "breathing" or glow pulse.
- LODs and simplified collision meshes.

**Theming Examples:**
- The Enforcer (Marcus-inspired: matte black, reinforced, intimidating).
- The Muse (Elena-inspired: elegant curves, glowing accents, flowing elements).
- The Tycoon (gold, luxurious materials, subtle wealth indicators).
- The Shadow (stealth/tech aesthetic, neon circuit patterns).
- The Performer (fringe, sequins, movement-focused design).
- The Classic (clean retro-modern with club branding).
- Rival-specific and story-unlocked variants.

### 3.2 Balls

**Core Ball:** High-detail sphere or custom orb (5k tris) with PBR materials, emissive glow, and multiple texture variants.
- **Variants (8–12):** Standard glowing, "Spotlight" (bright core with rays), "Tip Jar" (contains stylized currency particles), "Neon Core", "Disco Influence", story-specific (e.g., "Voss Signature" with unique trail).
- **VFX:** Dynamic trail (color and intensity based on speed/spin), impact flashes, spin indicators (subtle arrow or streak), distortion effects at high velocity.

### 3.3 Power-Up and Event Props

- Visual representations for each power-up (floating holographic icons, physical objects that appear on table, or environmental activations).
- Particle systems for activation, duration, and expiration.
- 15–20 unique power-up VFX sets.

---

## 4. Animation and Rigging

**Rigging:** Full-body IK/FK hybrid rig with advanced foot placement, look-at, and cloth/physics integration. MetaHuman rig compatibility preferred for player and primary NPCs.

**Animation Deliverables:**
- Full locomotion and idle sets for all characters.
- Comprehensive dance libraries (primary dancers especially).
- Facial animation libraries (visemes, emotions, micro-expressions).
- Match-specific reaction banks (50–100 clips per primary character).
- Cutscene and dialogue animation (keyframed or mocap).
- Physics-driven secondary animation (hair, cloth, accessories, ball impact response).

**Quality Target:** AAA cinematic quality. 60+ FPS playback. Seamless blending. Context-aware state machines.

---

## 5. User Interface and 2D Assets

**HUD Elements:**
- Score counters, set indicators, power-up icons, energy meter, mini-map or environmental awareness cues (minimal).
- All in neon/glassmorphic style with subtle animations.

**Menus and Screens:**
- Main menu, pause, options, customization, career hub, relationship viewer, photo mode.
- Framed as in-world objects (tablets, signage, leather folios).
- High-resolution backgrounds, button states, hover/selection effects.

**Icons and Symbols:** 100+ custom icons for power-ups, stats, relationships, items. Consistent neon line-art or illustrative style.

**Typography:** Custom font family or premium license with neon/glow variants. Multiple weights.

**Concept Art / Marketing:** Key art, character portraits, environment beauty shots, in-game screenshot composites, logo variations, loading screens.

---

## 6. Audio Assets (See Document 05 for Full Details)

- Music: 20–30 original tracks + stems for dynamic mixing.
- SFX: 500+ unique sounds (ball impacts, paddle hits, power-up activations, crowd reactions, ambient club noise, UI).
- Voice Acting: Full dialogue for primary NPCs + player (multiple lines per scene/relationship state). 10,000+ lines estimated.
- Ambient beds and spot effects.

---

## 7. VFX and Niagara Systems

- Ball trails, impacts, power-up activations, environmental reactions, crowd particle bursts, lighting pulses, smoke/fog enhancements, currency/confetti rain, lens flares, god rays.
- 30–50 unique Niagara systems with scalability settings.

---

## 8. Technical and Optimization Requirements

- All assets authored to engine specs (Unreal Engine 5 target).
- Strict naming conventions, folder structure, and metadata tagging.
- LODs, culling volumes, and streaming setup from day one.
- Performance budgets per scene (tris, draw calls, memory).
- Texture streaming and virtual texturing where applicable.
- All characters and key props rigged and ready for animation pipeline.

**Delivery Format:** .uasset or source files (FBX/OBJ + textures) with full documentation and source control integration.

---

*This asset list is comprehensive but not exhaustive. Additional detail props, variations, and story-specific assets will be defined during production. All specifications are designed to support the highest visual fidelity while maintaining performance targets on console and high-end PC.*

*End of Document 06*