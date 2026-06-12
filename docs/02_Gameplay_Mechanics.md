# 02. Gameplay Mechanics

**Velvet Pong**

**Version:** 1.0 | **Date:** June 2026

---

## 1. Core Pong Rules (Foundation)

Velvet Pong retains the elegant purity of classic Pong while layering sophisticated systems on top.

**Standard Rules:**
- Two players (or AI) control vertical paddles on opposite sides of a rectangular table.
- A single ball is served from the center.
- Players move paddles up/down (or with limited left/right for advanced play) to intercept the ball.
- Ball bounces off paddles, top/bottom walls, and (in advanced modes) dynamic environmental elements.
- Scoring: Opponent fails to return the ball → 1 point. First to 11 points (must win by 2) or best-of-three sets wins the match.

**Match Length Target:** 3–8 minutes for a standard game. Shorter "blitz" variants (first to 7) available in quick play.

---

## 2. Advanced Physics and Control

**Engine:** Chaos Physics (Unreal Engine 5) with custom Pong-specific tuning.

**Ball Properties:**
- Variable velocity (base 8–12 m/s, up to 25+ m/s on long rallies).
- Spin / English: Players can impart topspin, backspin, or sidespin via timing and paddle angle at contact. Spin affects bounce angle and speed decay.
- Dynamic friction and restitution tuned per surface (standard table felt vs. stage edge vs. "crowd wall").
- Optional "curve" shots: Holding a modifier button while striking imparts persistent curve (useful for skilled players).

**Paddle Controls:**
- Primary: Up/Down movement (smooth, responsive, with momentum).
- Secondary: Limited horizontal "lean" or "reach" (small forward/back adjustment for intercepting tricky angles).
- Advanced Technique: "Feint" or "Drop Shot" — brief paddle slowdown or angle change to alter return trajectory unexpectedly.
- Accessibility: Multiple control presets (simple 1D, full 2D, gyro, mouse, etc.). Dead zones, sensitivity, and assist options fully configurable.

**Feel Target:** Responsive and satisfying like high-end table tennis or air hockey sims, but with the iconic Pong clarity and predictability at base level. Mastery comes from reading spin, predicting bounces, and exploiting environmental modifiers.

---

## 3. Environmental Interaction and Dynamic Table

The table exists inside the club. The environment is not passive.

**Reactive Elements:**
- **Stage Proximity**: One long side of the table faces the main stage. Long rallies or powerful shots can cause "vibration" that slightly alters table geometry or adds micro-bounces.
- **Crowd Walls**: On intense points, patrons may lean in or throw stylized "tips" (glowing particles) that act as temporary moving obstacles or bonus deflectors.
- **Neon Props**: Overhead signs or hanging elements can be "activated" by high-velocity balls for special bounces or power-up spawns.
- **Dynamic Friction Zones**: Certain table areas (near spilled drink or "lucky" spot) have temporary friction changes based on narrative state or random events.

These interactions are deterministic and readable after a few matches, rewarding observation and adaptation.

---

## 4. Power-Ups, Events, and Spectacle Systems

Power-ups and events are triggered by:
- Rally length (every 8–12 successful exchanges).
- Score differential (trailing player receives sympathy power-up).
- Club Energy meter (high energy = more frequent/stronger events).
- Specific narrative or relationship states (e.g., allied dancer on stage unlocks her signature effect).

**Example Power-Ups (Themed):**
- **Spotlight Surge**: Ball temporarily leaves a glowing trail; next hit on paddle grants speed boost.
- **Private Dance Distraction**: Opponent's paddle temporarily shrinks or slows (themed as a dancer drawing attention).
- **Crowd Wave**: Ball bounces off an invisible "crowd" barrier for an unpredictable angle.
- **Neon Overload**: Table edges light up; ball gains speed and slight homing on next bounce.
- **Tip Jar Magnet**: Ball curves gently toward the scoring player's paddle for a short time.
- **Encore**: On a long rally, a dancer performs an escalated routine that grants both players a temporary "second chance" (extra life on miss).

All power-ups are visually spectacular and clearly telegraphed. Duration and strength balanced for competitive integrity.

**Spectacle Events:**
- **Standing Ovation**: Exceptional rally (15+ exchanges) triggers full club reaction — dancers escalate to signature moves, crowd stands, lighting shifts to dramatic sweeps, music swells.
- **Heartbreaker Miss**: Dramatic slow-motion on a close miss with reactive disappointment from nearby NPCs.

---

## 5. Club Energy and Systemic Feedback

**Club Energy Meter** (0–100%): Represents the overall excitement and quality of the current "show."

- Low Energy (<30%): Subdued lighting, minimal dancer movement, fewer power-ups, more predictable bounces. Matches feel "flat."
- Medium (30–70%): Standard vibrant club atmosphere.
- High (>70%): Intensified lighting, faster dancer routines, more frequent power-ups, slight environmental chaos (fun but readable), bigger post-match rewards.

Energy changes based on:
- Quality of play (long rallies, comebacks, stylish shots increase it).
- Player choices (tipping, dialogue that hypes the crowd).
- Narrative events (arguments or celebrations in the club).

This creates a virtuous cycle: Skilled, engaging play makes the club (and future matches) better.

---

## 6. AI and Opponent Design

**AI Tiers:**
- **Background Patrons**: Simple, predictable movement for warm-up or story scenes.
- **Club Regulars**: Competent, use basic spin and positioning.
- **Featured Performers / Rivals**: High skill, exploit spin, feints, and environmental opportunities. Have distinct "personalities" expressed through play style and taunt voice lines.
- **Story Bosses**: Unique move sets or temporary rule changes tied to narrative (e.g., "House Rules" match where certain power-ups are banned or mandatory).

AI uses a combination of scripted patterns, utility-based decision making, and machine learning-inspired difficulty scaling that adapts to player skill without feeling unfair.

---

## 7. Progression and Customization Synergies

Paddle and table choices are not purely cosmetic:

- Each paddle archetype has baseline stats (speed, reach, spin influence, stability) with visual variants that can be upgraded.
- Relationship unlocks grant "Signature Moves" or passive bonuses (e.g., "Muse's Grace": slight auto-correction on near-misses when a specific dancer is performing).
- Venue upgrades (from club management) can add permanent environmental features or new power-up pools.

This ensures that role-play decisions and match performance feed back into gameplay feel and options.

---

## 8. Accessibility, Options, and Fair Play

- Full remappable controls, multiple input methods (controller, keyboard, mouse, touch where applicable).
- Extensive visual and audio accessibility options (colorblind modes, high-contrast HUD, reduced screen shake, mono audio, subtitles, visual-only cues for audio events).
- Practice mode with slow-motion, trajectory prediction, and customizable drills.
- Online: Robust anti-cheat, skill-based matchmaking, and optional "classic rules" lobbies that disable power-ups and environmental effects.

---

*End of Document 02*