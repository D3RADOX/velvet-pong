/**
 * Paddle.js - Player/AI paddle class for Velvet Pong
 * References: docs/02_Gameplay_Mechanics.md (Paddle Controls, Lean/Reach)
 * Logic-only implementation.
 */

export class Paddle {
  constructor(x = 0, y = 0, width = 10, height = 80) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 8; // base vertical speed
    this.reach = 15; // horizontal lean/reach distance
    this.angle = 0; // current paddle angle for spin calculation (-15 to 15 degrees approx)
    this.vy = 0; // current vertical velocity
  }

  move(direction, deltaTime = 1/60) {
    // direction: -1 (up), 1 (down), 0 (stop)
    const targetSpeed = direction * this.speed;
    this.vy = targetSpeed;
    this.y += this.vy * deltaTime * 60;
  }

  lean(direction) {
    // Limited horizontal lean for angle shots
    // direction: -1 left, 1 right
    this.x += direction * 2; // small movement
    this.angle = direction * 8; // tilt angle
  }

  resetPosition(y) {
    this.y = y;
    this.vy = 0;
    this.angle = 0;
  }

  // Get current hit zone / effective angle at contact point
  getImpactAngle(ballY) {
    const relativeY = ballY - this.y;
    // Normalize to -1 to 1 based on paddle height
    return (relativeY / (this.height / 2)) * 15; // degrees-ish
  }
}