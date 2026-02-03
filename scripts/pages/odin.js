/**
 * Odin: Valhalla Rising Game Services
 * Refactored to use shared modules and centralized data
 */

import { renderServiceCards } from '../services/game-service.js';

// Load Odin services data
fetch('assets/data/services.json')
  .then(response => response.json())
  .then(data => {
    renderServiceCards(data.odin, 'card-container');
  })
  .catch(error => {
    console.error('Failed to load Odin services:', error);
  });
