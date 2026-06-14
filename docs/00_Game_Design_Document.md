**Velvet Pong - Game Design Document (GDD)**

**Version**: 1.0  
**Date**: June 2026  
**Status**: Pre-Production Complete | Prototyping Started  
**Project**: High-concept narrative-driven Pong reimagining set in a luxurious neon strip club. Blends fast-paced arcade gameplay with RPG progression, reactive environment, and mature artistic themes.

---

## 1. Executive Summary

Velvet Pong transforms the classic game of Pong into an immersive, role-playable experience. Players control a customizable performer rising through the ranks of an exclusive neon strip club via competitive, high-stakes Pong matches. The club itself is a living character — matches influence lighting, music, dancers, and crowd energy, which in turn affect gameplay.

**Core Pillars**:
- Precision arcade gameplay with advanced physics (spin, curve, environmental interactions)
- Narrative depth & RPG progression (relationships, customization, reputation)
- Reactive spectacle (club energy, power-ups, dynamic events)
- Artistic & mature tone handled with sophistication

**Target Platforms**: PC, PS5, Xbox Series X|S (Unreal Engine 5 recommended for full production)

**Scope**: Vertical slice first, then full campaign + multiplayer.

---

## 2. Gameplay Overview

### Core Loop
A match is a fast-paced Pong game (3–8 minutes) between two players (or player vs AI). The ball is served from the center. Players return it using paddles. Missing returns a point to the opponent.

**Win Condition**: First to 11 points, must win by 2 (or best-of-three sets).

### Advanced Mechanics (from Design Docs)
- **Spin & English**: Apply topspin, backspin, sidespin via paddle angle and timing.
- **Curve Shots**: Modifier button imparts persistent curve.
- **Paddle Lean/Reach**: Limited horizontal movement for angled returns and feints.
- **Power-Ups & Events**: Triggered by rally length, score differential, or club energy. Examples: Spotlight Surge, Crowd Wave, Private Dance Distraction.
- **Environmental Interaction**: Stage vibration, crowd interference, neon props create dynamic bounces and temporary modifiers.
- **Club Energy Meter** (0–100%): Influences frequency/strength of power-ups and environmental chaos. Long rallies, comebacks, and stylish play increase energy.

### Match Duration & Pacing
Short, intense rallies with high visual and systemic feedback. Matches feel like performances.

---

## 3. Narrative & Role-Playing

Players create a customizable avatar (performer) and rise through club hierarchy via matches and relationships.

**Key Systems**:
- Branching narrative arcs (4–6 main storylines)
- 20+ voiced NPCs with affinity/relationship meters
- Relationship unlocks: Signature moves, passive bonuses, special power-ups
- Club management & reputation system
- Career progression tied directly to match performance and choices

**Tone**: Glamour, performance art, empowerment, mature themes handled artistically.

---

## 4. Customization & Progression

- **Paddles**: 30+ archetypes with stats (speed, reach, spin influence, stability). Visual upgrades provide gameplay bonuses.
- **Outfits & Venues**: Aesthetic + mechanical modifiers.
- **Relationship Bonuses**: Passive effects unlocked through story choices.
- **Venue Upgrades**: Permanent environmental features and expanded power-up pools.

Customization directly impacts strategy and feel.

---

## 5. Technical Architecture (Summary)

- **Engine**: Unreal Engine 5 (full production) or custom HTML5/JS prototype for early validation.
- **Core Systems**: Physics (custom Pong-tuned), Game State Manager, RPG/Progression, Reactive Environment, AI (tiered opponents).
- **Prototype Approach**: Modular JavaScript classes (Ball, Paddle, Game, RPGSystem) — logic only, no visuals.

---

## 6. Development Roadmap (High-Level)

**Phase 0**: Pre-Production (Complete) — Full design bible, art bible, asset specs.
**Phase 1**: Vertical Slice (Current) — Core Pong + spin/curve + basic power-ups + reactive club + 2–3 NPCs.
**Phase 2**: Full Production — Expanded content, narrative, customization, multiplayer.
**Phase 3**: Polish & Launch.

See `docs/08_Development_Plan_and_Milestones.md` for detailed milestones.

---

## 7. Implementation Checklist (Turn-by-Turn Build Guide)

This checklist is designed for the current logic-only prototype build on GitHub. Use it to track progress turn by turn.

### Turn 1: Core Pong Foundation (✅ Completed)
- [x] Ball class with position, velocity, basic spin & curve stubs
- [x] Paddle class with movement, lean, impact angle calculation
- [x] Game manager with scoring, basic AI, collisions, win conditions (first to 11 win by 2)
- [x] Update loop (`update(deltaTime, input)`)
- [x] Rally tracking and state export
- [x] Pushed to `/prototype/src/` on GitHub

### Turn 2: Advanced Mechanics
- [ ] Full spin application and bounce effects
- [ ] Persistent curve shot system
- [ ] Rally-length power-up triggers
- [ ] Basic environmental modifier zones (friction, vibration)
- [ ] Update prototype files and test

### Turn 3: Club Energy & Reactive Environment
- [ ] Club Energy meter (0–100%) with dynamic changes
- [ ] Energy influences power-up frequency and event strength
- [ ] Simple dynamic events (stage vibration, crowd interference)
- [ ] Integrate with existing Game class

### Turn 4: RPG & Progression Layer
- [ ] Player stats system (paddle customization impact)
- [ ] Basic relationship / affinity prototype
- [ ] Passive bonuses from relationships
- [ ] Simple career progression tracking

### Turn 5: Integration & Polish
- [ ] Complete game state machine
- [ ] Tiered AI opponents (basic → advanced)
- [ ] Full test harness / console runner
- [ ] Documentation & comments linking back to design docs
- [ ] Prepare for future visual layer or engine port

### General / Ongoing Checklist
- [ ] All code references relevant design docs (e.g., `docs/02_Gameplay_Mechanics.md`)
- [ ] Keep prototype logic-only (no visuals or assets)
- [ ] Maintain modularity for easy expansion
- [ ] Regular commits to GitHub with clear messages
- [ ] Playtest logic via console simulation after each turn
- [ ] Update this checklist after every completed turn

---

## 8. Next Steps

1. Review and approve Turn 1 code (already live).
2. Proceed to Turn 2 implementation.
3. Expand this GDD or individual docs as needed.
4. When ready, add minimal visual layer or port core logic to desired engine.

---

**Document Owner**: D3RADOX  
**Last Updated**: June 2026 (by Grok)

*This GDD consolidates key information from the existing 12 design documents and serves as a living checklist for implementation.*