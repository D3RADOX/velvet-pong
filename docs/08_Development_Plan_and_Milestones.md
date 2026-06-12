# 08. Development Plan and Milestones

**Velvet Pong**

**Version:** 1.0 | **Date:** June 2026

---

## 1. Overall Development Philosophy

Velvet Pong will be developed with a **vertical-slice-first, iterative, data-driven** approach. Core gameplay feel and the reactive club spectacle are the highest priorities and must be proven early. Narrative and meta-systems are layered on a solid mechanical foundation.

**Key Principles:**
- Prototype and validate core Pong + environmental reactivity in the first 8–12 weeks.
- Maintain high visual and animation quality from the beginning (no "grey box" visual debt).
- Integrate narrative and relationship systems early enough to influence level and character design.
- Rigorous performance profiling and optimization from pre-production onward.
- Regular playtests with target audience (including competitive players and narrative enthusiasts).

**Team Size Estimate (Core):** 25–40 people at peak (including contractors for art, animation, QA, voice).
**Duration:** 18–24 months to gold master for premium release.

---

## 2. Phase Breakdown

### Phase 0: Pre-Production (Months 0–3) — Complete

**Objectives:**
- Finalize all design documentation (this repository).
- Create detailed art bible, style guide, and asset production plan.
- Build vertical slice prototype scope and technical architecture.
- Secure funding/publisher or internal greenlight.
- Assemble core team and key contractors (art director, lead gameplay programmer, narrative lead, animation director).

**Deliverables:**
- Complete GDD, art direction, asset list, technical spec.
- Concept art and keyframe animations for 3–5 hero assets/characters.
- Technical prototype of core Pong physics + basic environmental interaction.
- Risk assessment and mitigation plan.
- Budget and schedule with contingency.

**Success Criteria:** All design documents approved; vertical slice scope locked; team onboarded.

### Phase 1: Vertical Slice (Months 3–7)

**Objectives:**
- Deliver a polished, playable vertical slice demonstrating the core fantasy: one fully detailed club area + reactive Pong table + 2–3 primary NPCs with affinity and basic dialogue + 1 complete story beat.
- Prove visual fidelity, performance, and "wow" factor of reactive spectacle.
- Validate core gameplay feel and basic power-up/environmental systems.
- Establish animation and VFX pipelines.

**Key Deliverables:**
- One fully lit, detailed club zone (main floor + stage + Pong table).
- 3–4 fully rigged and animated primary characters with 5+ dance/idle/reaction animations each.
- Core Pong mechanics with spin, basic power-ups, and 2–3 environmental interactions.
- Simple affinity/relationship prototype with 1–2 dialogue scenes.
- Basic dynamic music and lighting reactivity.
- Internal playtest build with metrics.

**Milestone:** "First Playable" at end of Month 5; "Vertical Slice" polish and presentation at end of Month 7.

**Success Criteria:** Vertical slice receives strong internal approval and playtest feedback; performance targets met on target hardware; core "fun" loop validated.

### Phase 2: Production – Core Systems and Content (Months 7–15)

**Objectives:**
- Expand to full club with all variant environments.
- Complete all primary and secondary characters with full animation libraries.
- Implement full narrative campaign (all chapters, branching, multiple endings).
- Build out customization, progression, club management, and meta-systems.
- Implement full multiplayer (local + online).
- Achieve content-complete alpha.

**Key Deliverables by Sub-Phase:**

**Months 7–10 (Alpha 1 – Core Expansion):**
- Full environment set (all variants).
- All primary NPCs rigged, with base animation sets and 50% of dance/reaction libraries.
- Core narrative chapters 1–3 playable end-to-end.
- Full paddle customization system and 15+ paddle archetypes.
- Basic club energy and spectacle systems.
- Local multiplayer and simple online lobby.

**Months 10–13 (Alpha 2 – Feature Complete):**
- Remaining animation, VFX, and audio integration.
- Full branching narrative and relationship web.
- Club management and progression systems.
- Advanced power-ups, environmental interactions, and AI opponents.
- Online ranked/casual multiplayer with matchmaking.
- Performance optimization pass 1.

**Months 13–15 (Alpha 3 / Beta Prep):**
- Content complete (all story, assets, features).
- Comprehensive balancing and tuning.
- Accessibility features complete.
- Large-scale internal and external playtests.
- Performance and memory optimization to ship-ready targets.

**Milestone:** Content-complete Alpha at Month 15.

### Phase 3: Beta, Polish, and Certification (Months 15–21)

**Objectives:**
- Bug fixing, balancing, and polish across all systems.
- Certification (platform QA) and submission preparation.
- Marketing asset creation and localization.
- Final performance and stability passes.

**Key Activities:**
- 3–4 full Beta phases with increasing scope of testers.
- Dedicated polish sprint on visuals, audio, animation, and "juice."
- Accessibility and localization QA.
- Marketing trailer, key art, and store page assets.
- Platform certification (TRC, XR, etc.).

**Milestone:** Release Candidate at Month 20–21.

### Phase 4: Launch and Post-Launch (Month 21+)

- Day-one patch preparation.
- Launch marketing and community engagement.
- Post-launch support plan (DLC, seasons, balance updates).
- Live operations infrastructure.

---

## 3. Risk Management and Contingency

**High Risks and Mitigations:**
- **Visual/Performance Ambition**: Early and continuous profiling; asset budgets enforced; fallback to hybrid Nanite + traditional LODs.
- **Narrative Scope**: Strict gating and prioritization of core story; side content clearly marked optional.
- **Animation Volume**: Heavy use of mocap + smart procedural blending; prioritize primary characters and key reactions first.
- **Multiplayer Netcode**: Dedicated networking programmer from Phase 1; extensive testing with simulated latency.
- **Mature Content Tone**: Dedicated style guide enforcement and review gates at every milestone; sensitivity readers/consultants engaged early.

**Contingency:** Vertical slice acts as proof point. If core fantasy or performance targets are missed, scope can be reduced (fewer environments, simplified narrative branching) without losing the central value proposition.

---

## 4. Tools, Pipeline, and Infrastructure

- **Engine:** Unreal Engine 5.4+ (or latest stable at start of production).
- **Version Control:** Perforce or Git LFS with strong binary handling.
- **Art Pipeline:** Maya/Blender + Substance 3D + ZBrush + Marvelous Designer for cloth.
- **Animation:** Maya + MotionBuilder or specialized mocap pipeline; Control Rig / IK in-engine.
- **Audio:** Wwise or FMOD with dynamic mixing.
- **QA:** TestRail or equivalent; automated testing where applicable.
- **Project Management:** Jira + Confluence or equivalent.

---

*End of Document 08*