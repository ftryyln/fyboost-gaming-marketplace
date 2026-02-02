/**
 * Night Crows Game Services
 * Refactored to use shared modules and centralized data
 */

import { renderServiceCards } from './src/scripts/services/game-service.js';

// Load Night Crows services data
fetch('assets/data/services.json')
  .then(response => response.json())
  .then(data => {
    renderServiceCards(data['night-crows'], 'card-container');
  })
  .catch(error => {
    console.error('Failed to load Night Crows services:', error);
  });