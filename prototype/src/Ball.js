/**
 * Ball.js - Core ball physics and state for Velvet Pong
 * References: docs/02_Gameplay_Mechanics.md (Ball Behavior, Spin, Curve)
 * Logic-only. No visuals.
 */

export class Ball {
  constructor(x = 0, y = 0, radius = 5) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 0; // velocity x
    this.vy = 0; // velocity y
    this.spin = 0; // spin value (affects bounce angle and speed)
    this.curveActive = false;
    this.curveVector = { x: 0, y: 0 };
    this.curveDuration = 0;
  }

  reset(position = { x: 0, y: 0 }) {
    this.x = position.x;
    this.y = position.y;
    this.vx = 0;
    this.vy = 0;
    this.spin = 0;
    this.curveActive = false;
    this.curveDuration = 0;
  }

  applySpin(paddleAngle, timingDelta, intensity = 1) {
    // Simplified spin application from paddle contact
    // paddleAngle: angle of paddle at impact (-1 to 1 or degrees)
    // timingDelta: how perfectly timed the hit was
    this.spin = (paddleAngle * intensity) + (timingDelta * 0.5);
    // Cap spin
    this.spin = Math.max(-5, Math.min(5, this.spin));
  }

  applyCurve(modifierPressed, direction = 1) {
    if (modifierPressed) {
      this.curveActive = true;
      this.curveVector.x = direction * 0.3; // persistent curve force
      this.curveDuration = 120; // frames ~2 seconds at 60fps
    }
  }

  update(deltaTime = 1/60) {
    // Apply curve if active
    if (this.curveActive && this.curveDuration > 0) {
      this.vx += this.curveVector.x * deltaTime * 60;
      this.vy += this.curveVector.y * deltaTime * 60;
      this.curveDuration--;
      if (this.curveDuration <= 0) this.curveActive = false;
    }

    // Apply spin effect on velocity (simplified)
    if (this.spin !== 0) {
      // Spin influences perpendicular velocity slightly
      const spinEffect = this.spin * 0.02;
      this.vy += spinEffect * deltaTime * 60;
    }

    // Move
    this.x += this.vx * deltaTime * 60;
    this.y += this.vy * deltaTime * 60;

    // Simple friction / speed decay over time (optional for rallies)
    this.vx *= 0.999;
    this.vy *= 0.999;
  }

  // Basic wall bounce (top/bottom)
  bounceWall(topBound, bottomBound) {
    if (this.y - this.radius < topBound) {
      this.y = topBound + this.radius;
      this.vy = -this.vy * 0.95; // slight energy loss
      this.spin *= 0.8; // spin reduces on wall
    }
    if (this.y + this.radius > bottomBound) {
      this.y = bottomBound - this.radius;
      this.vy = -this.vy * 0.95;
      this.spin *= 0.8;
    }
  }
}