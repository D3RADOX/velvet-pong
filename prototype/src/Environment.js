/**
 * Environment.js - Reactive club environment system for Velvet Pong
 * Turn 3: Club Energy & Dynamic Environment
 * References: docs/02_Gameplay_Mechanics.md (Club Energy, Environmental Interactions)
 */

export class Environment {
  constructor() {
    this.clubEnergy = 50; // 0-100
    this.vibrationActive = false;
    this.crowdInterference = false;
    this.neonActivation = false;
    this.frictionZones = {
      top: 1.0,
      middle: 1.0,
      bottom: 0.95 // example lower friction near 'spills'
    };
    this.eventCooldown = 0;
  }

  update(rallyCount, lastHitSuccess) {
    // Dynamic energy changes
    if (lastHitSuccess) {
      this.clubEnergy = Math.min(100, this.clubEnergy + 1.2 + (rallyCount * 0.05));
    } else {
      this.clubEnergy = Math.max(15, this.clubEnergy - 4);
    }

    // Activate environmental effects based on energy
    this.vibrationActive = this.clubEnergy > 65;
    this.crowdInterference = this.clubEnergy > 80 && Math.random() < 0.15;
    this.neonActivation = this.clubEnergy > 75;

    // Random events on high energy
    if (this.clubEnergy > 70 && this.eventCooldown <= 0 && Math.random() < 0.08) {
      this.triggerEvent();
      this.eventCooldown = 120;
    }

    if (this.eventCooldown > 0) this.eventCooldown--;
  }

  triggerEvent() {
    // Simple event types
    const events = ['stage_vibration', 'crowd_wave', 'neon_surge'];
    return events[Math.floor(Math.random() * events.length)];
  }

  applyToBall(ball) {
    // Friction zones
    if (ball.y < 200) {
      ball.vx *= this.frictionZones.top;
      ball.vy *= this.frictionZones.top;
    } else if (ball.y > 400) {
      ball.vx *= this.frictionZones.bottom;
      ball.vy *= this.frictionZones.bottom;
    }

    // Vibration effect
    if (this.vibrationActive && Math.random() < 0.1) {
      ball.vy += (Math.random() - 0.5) * 1.2;
      ball.vx += (Math.random() - 0.5) * 0.6;
    }

    // Crowd interference
    if (this.crowdInterference) {
      ball.vx += (Math.random() - 0.5) * 2.5;
      ball.vy += (Math.random() - 0.5) * 1.5;
    }

    // Neon surge (slight homing or speed)
    if (this.neonActivation && Math.abs(ball.vx) > 10) {
      ball.vx *= 1.015;
    }
  }

  getState() {
    return {
      clubEnergy: Math.round(this.clubEnergy),
      vibration: this.vibrationActive,
      crowd: this.crowdInterference,
      neon: this.neonActivation
    };
  }

  reset() {
    this.clubEnergy = 50;
    this.vibrationActive = false;
    this.crowdInterference = false;
    this.neonActivation = false;
    this.eventCooldown = 0;
  }
}