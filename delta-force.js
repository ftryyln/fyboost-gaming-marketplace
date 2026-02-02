/**
 * Delta Force Game Services
 * Refactored to use shared modules and centralized data
 */

import { renderServiceCards } from './src/scripts/services/game-service.js';

// Load Delta Force services data
fetch('assets/data/services.json')
  .then(response => response.json())
  .then(data => {
    renderServiceCards(data['delta-force'], 'card-container');
  })
  .catch(error => {
    console.error('Failed to load Delta Force services:', error);
  });