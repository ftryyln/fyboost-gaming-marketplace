# FYBoost: Premium Gaming Pilot & Boosting Marketplace 🎮⚡

<p align="center">
  <img src="assets/images/logo2.png" alt="FYBoost Logo" width="320"/>
</p>

## 📝 Overview
**FYBoost (For Your Boosting Service)** is a high-performance, professional marketplace platform designed for competitive gamers. Developed as a Phase 0 Final Project, it serves as a comprehensive "One-Stop Shop" where players can securely purchase piloting services, in-game currency, and skill-boosting boosters for top-tier competitive titles.

The platform emphasizes security, speed, and trust, featuring a modular architectural design that ensures a smooth and reliable user experience for over 570,000+ potential users.

---

## 📱 Platform Ecosystem & Features

### 🎮 Targeted Game Modules
Specialized landing pages and services customized for industry-leading titles:
- **Valorant**: Rank boosting and competitive piloting.
- **Odin: Valhalla Rising**: Currency farming and skill progression.
- **Night Crows**: Equipment acquiring and character leveling.
- **Delta Force**: Professional mission assistance.

### 🍱 Core Modules
- **⚡ Interactive Landing Page**: Featuring a dynamic hero section and a direct game-selection gateway.
- **🛒 Dynamic Checkout System**: A multi-mode checkout flow that handles user configurations and secure payment confirmations.
- **🔐 User Portal (Login/Signup)**: Dedicated authentication screens for persistent user sessions.
- **🖼️ Interactive Service Gallery**: A visual showcase of available boosting results and platform quality.
- **🤝 Trust & Guarantee System**: Integrated "FYBoost Protection" highlighting moneyback guarantees and price monitoring.

---

## 🛠️ Technical Implementation & Architecture

### Modular Component Architecture
To ensure maintainability and performance, the platform utilizes a **Modular Header/Footer Injection** system via Vanilla JavaScript:
- **Dynamic Fetching**: `navbar.html` and `footer.html` are injected in real-time using the `Fetch API`, allowing for site-wide updates by editing a single file.
- **Asynchronous Loading**: Optimized `layout.js` ensures components are loaded without blocking the page's primary content.

### Tech Stack
- **Framework**: [Bootstrap 5.3](https://getbootstrap.com/) (Responsive Grid & Utility Classes)
- **Engine**: Pure Vanilla JavaScript (Non-framework approach for high performance)
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Custom gradient-text and hero-section styling)
- **Icons & Assets**: Custom-designed iconography (Shield, Diamond, Earth) for improved visual cues.

---

## 📁 Repository Structure
```text
p0-finalproject/
├── assets/           # Global styles and high-definition game assets
├── layout.js         # Core modular component loading logic
├── navbar.html       # Shared navigation component
├── footer.html       # Shared footer component
├── checkout.html     # Secure transaction interface
├── home.html         # Portal entrance and game gateway
└── [game].html       # Specialized game service pages (Valorant, Odin, etc.)
```

---

## 🔄 Recent Refactoring (Feb 2026)

The project has been **refactored for scalability and maintainability**, achieving:

### Key Improvements
- **84% Code Reduction** in game files (350 lines → 56 lines)
- **Modular Architecture** with shared utility modules
- **Centralized Data** in JSON format
- **ES6 Module Support** for modern JavaScript standards

### New Structure
```text
src/
├── scripts/
│   ├── utils/
│   │   ├── price.js          # Price calculations & formatting
│   │   └── storage.js        # localStorage wrapper
│   └── services/
│       └── game-service.js   # Universal card renderer
assets/
└── data/
    └── services.json         # Centralized game data
```

### Benefits
- ✅ **Easy to Scale**: Add new games by updating JSON only
- ✅ **DRY Principle**: No code duplication across game files
- ✅ **Maintainable**: Single source of truth for shared logic
- ✅ **Modern Standards**: ES6 import/export syntax

---

## 🚀 How to Launch locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ftryyln/p0-finalproject.git
   ```
2. **Environment**
   - As the platform uses `fetch()` to load the navbar and footer, it must be run on a local server (like VS Code Live Server) to avoid CORS policy restrictions.
3. **Execution**
   - Simply start your local server and open `home.html`.

---
<p align="center">
  Saving Your Time, Leveling Your Game. 🚀❤️
</p>