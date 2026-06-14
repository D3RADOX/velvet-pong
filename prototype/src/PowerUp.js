/**
 * PowerUp.js - Rally-based power-up system for Velvet Pong
 * References: docs/02_Gameplay_Mechanics.md (Power-Ups, Rally triggers, Club Energy)
 * Turn 2 implementation
 */

export class PowerUp {
  constructor(type = 'spotlight') {
    this.type = type;
    this.active = false;
    this.duration = 0;
    this.effect = {};
  }

  trigger(rallyCount, clubEnergy = 50) {
    // Trigger based on rally length and club energy
    if (rallyCount >= 8 && !this.active) {
      this.active = true;
      this.duration = 180; // ~3 seconds at 60fps

      switch (this.type) {
        case 'spotlight':
          this.effect = { speedBoost: 1.3, trail: true };
          break;
        case 'crowd_wave':
          this.effect = { randomBounce: true, angleVariance: 15 };
          break;
        case 'distraction':
          this.effect = { opponentSlow: 0.7 };
          break;
        default:
          this.effect = { speedBoost: 1.2 };
      }
      return true; // triggered
    }
    return false;
  }

  update() {
    if (this.active) {
      this.duration--;
      if (this.duration <= 0) {
        this.active = false;
        this.effect = {};
      }
    }
  }

  applyToBall(ball) {
    if (!this.active) return;

    if (this.effect.speedBoost) {
      const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
      const newSpeed = speed * this.effect.speedBoost;
      const scale = newSpeed / (speed || 1);
      ball.vx *= scale;
      ball.vy *= scale;
    }

    if (this.effect.randomBounce && Math.random() < 0.3) {
      ball.vx += (Math.random() - 0.5) * this.effect.angleVariance;
      ball.vy += (Math.random() - 0.5) * this.effect.angleVariance;
    }
  }

  applyToPaddle(paddle, isOpponent = false) {
    if (!this.active || !this.effect.opponentSlow || !isOpponent) return;
    paddle.speed *= this.effect.opponentSlow;
  }

  reset() {
    this.active = false;
    this.duration = 0;
    this.effect = {};
  }
}