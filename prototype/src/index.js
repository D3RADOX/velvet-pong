/**
 * index.js - Simple test runner / entry point for Velvet Pong logic prototype
 * No visuals - console simulation only
 * Run in browser console or Node.js
 */

import { Game } from './Game.js';
import { Environment } from './Environment.js';

console.log('=== Velvet Pong Logic Prototype ===');
console.log('Turn 3 Complete: Core + Advanced Mechanics + Reactive Environment');

const game = new Game();
const env = new Environment();

let frame = 0;
const maxFrames = 800;

const simulationInterval = setInterval(() => {
  frame++;

  // Random player input for demo
  const input = {
    up: Math.random() > 0.6,
    down: Math.random() > 0.6,
    leanLeft: Math.random() > 0.85,
    leanRight: Math.random() > 0.85,
    curve: Math.random() > 0.75
  };

  game.update(1/60, input);
  env.update(game.rallyCount, true);

  // Apply environment to ball
  env.applyToBall(game.ball);

  // Log interesting states
  if (frame % 100 === 0 || game.gameState === 'gameOver') {
    const state = game.getState();
    const envState = env.getState();
    console.log(`Frame ${frame} | Score: ${state.score.player}-${state.score.opponent} | Rally: ${state.rally} | Energy: ${envState.clubEnergy} | PowerUp: ${state.powerUpActive} | Spin: ${state.ball.spin.toFixed(1)}`);
    console.log('Env:', envState);
  }

  if (game.gameState === 'gameOver' || frame >= maxFrames) {
    clearInterval(simulationInterval);
    console.log('\n=== Simulation Complete ===');
    console.log('Final State:', game.getState());
    console.log('Environment Final:', env.getState());
  }
}, 50); // ~20 updates per second for demo