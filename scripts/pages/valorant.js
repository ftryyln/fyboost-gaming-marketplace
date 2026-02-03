/**
 * Valorant Game Services
 * Refactored to use shared modules and centralized data
 */

import { renderServiceCards } from '../services/game-service.js';

// Load Valorant services data
fetch('assets/data/services.json')
  .then(response => response.json())
  .then(data => {
    renderServiceCards(data.valorant, 'card-container');
  })
  .catch(error => {
    console.error('Failed to load Valorant services:', error);
  });
