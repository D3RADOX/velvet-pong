/**
 * Game.js - Core game state manager and loop for Velvet Pong (Logic Only)
 * References: docs/02_Gameplay_Mechanics.md (Core Rules, Scoring, Win Conditions)
 * Turn 1: Basic Pong foundation
 */

import { Ball } from './Ball.js';
import { Paddle } from './Paddle.js';

export class Game {
  constructor() {
    this.ball = new Ball(400, 300);
    this.playerPaddle = new Paddle(50, 300);
    this.opponentPaddle = new Paddle(750, 300);
    this.score = { player: 0, opponent: 0 };
    this.gameState = 'playing'; // playing, paused, gameOver
    this.winCondition = { target: 11, mustWinBy: 2 };
    this.rallyCount = 0;
    this.maxRally = 0;
    this.tableBounds = { top: 50, bottom: 550, left: 0, right: 800 };
  }

  resetMatch() {
    this.ball.reset({ x: 400, y: 300 });
    this.playerPaddle.resetPosition(300);
    this.opponentPaddle.resetPosition(300);
    this.rallyCount = 0;
  }

  update(deltaTime = 1/60, playerInput = { up: false, down: false, leanLeft: false, leanRight: false }) {
    if (this.gameState !== 'playing') return;

    // Player paddle control
    let playerDir = 0;
    if (playerInput.up) playerDir = -1;
    if (playerInput.down) playerDir = 1;
    this.playerPaddle.move(playerDir, deltaTime);

    // Clamp paddles to table
    this.playerPaddle.y = Math.max(this.tableBounds.top + this.playerPaddle.height/2, 
      Math.min(this.tableBounds.bottom - this.playerPaddle.height/2, this.playerPaddle.y));
    this.opponentPaddle.y = Math.max(this.tableBounds.top + this.opponentPaddle.height/2,
      Math.min(this.tableBounds.bottom - this.opponentPaddle.height/2, this.opponentPaddle.y));

    // Simple AI for opponent (basic following)
    const aiDir = this.ball.y > this.opponentPaddle.y ? 1 : -1;
    this.opponentPaddle.move(aiDir, deltaTime);

    // Update ball
    this.ball.update(deltaTime);

    // Wall bounces
    this.ball.bounceWall(this.tableBounds.top, this.tableBounds.bottom);

    // Paddle collisions (simplified)
    this.checkPaddleCollision(this.playerPaddle, true);
    this.checkPaddleCollision(this.opponentPaddle, false);

    // Scoring
    if (this.ball.x < this.tableBounds.left) {
      this.score.opponent++;
      this.checkWin();
      this.resetMatch();
    }
    if (this.ball.x > this.tableBounds.right) {
      this.score.player++;
      this.checkWin();
      this.resetMatch();
    }

    // Track rally
    if (this.ball.vx !== 0) this.rallyCount++;
    this.maxRally = Math.max(this.maxRally, this.rallyCount);
  }

  checkPaddleCollision(paddle, isPlayer) {
    const ball = this.ball;
    // Simple AABB collision
    if (ball.x - ball.radius < paddle.x + paddle.width/2 &&
        ball.x + ball.radius > paddle.x - paddle.width/2 &&
        ball.y - ball.radius < paddle.y + paddle.height/2 &&
        ball.y + ball.radius > paddle.y - paddle.height/2) {

      // Reverse x velocity
      ball.vx = -ball.vx * 1.05; // slight speed up

      // Calculate impact angle from paddle
      const impactAngle = paddle.getImpactAngle(ball.y);
      ball.applySpin(impactAngle, 0.8); // timing approx

      // Adjust y velocity based on hit position
      const relativeY = (ball.y - paddle.y) / (paddle.height / 2);
      ball.vy = relativeY * 8;

      this.rallyCount++;
    }
  }

  checkWin() {
    const p = this.score.player;
    const o = this.score.opponent;
    const target = this.winCondition.target;
    const margin = this.winCondition.mustWinBy;

    if ((p >= target && p >= o + margin) || (o >= target && o >= p + margin)) {
      this.gameState = 'gameOver';
      console.log(`Game Over! Final Score: Player ${p} - Opponent ${o}`);
    }
  }

  getState() {
    return {
      score: { ...this.score },
      rally: this.rallyCount,
      maxRally: this.maxRally,
      gameState: this.gameState,
      ball: { x: this.ball.x, y: this.ball.y, vx: this.ball.vx, vy: this.ball.vy, spin: this.ball.spin }
    };
  }
}