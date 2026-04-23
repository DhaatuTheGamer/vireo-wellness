<div align="center">
  <img src="./public/favicon.png" alt="Vireo Logo" width="120" />

  # Vireo Wellness
  **Thrive Daily with Intelligent Health Tracking**

  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![CI](https://img.shields.io/github/actions/workflow/status/dhaatrik/vireo-wellness/ci.yml?style=for-the-badge)](https://github.com/dhaatrik/vireo-wellness/actions)

  [Overview](#overview) • [Features](#key-features) • [Tech Stack](#technologies-used) • [Installation](#installation--requirements) • [Usage](#usage-instructions--examples) • [Testing](#testing-instructions) • [Contributing](#contribution-guidelines)
</div>

---

## 📖 Overview

Welcome to **Vireo Wellness**, a modern, progressive web application designed to empower individuals in managing their daily wellness. Managing daily health—particularly tracking specific metrics like blood glucose, nutrition, and daily habits—can often involve clunky interfaces and fragmented tools. 

**Vireo solves this problem** by providing a centralized, elegantly designed single-page application (SPA). Whether you are monitoring your dietary intake, checking your blood sugar trends, or managing smart health devices, Vireo offers a seamless, mobile-optimized experience that feels like a native app. Currently powered by comprehensive mock data, Vireo demonstrates a complete and robust frontend architecture ready for backend integration.

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [Installation & Requirements](#-installation--requirements)
- [Usage Instructions & Examples](#-usage-instructions--examples)
- [Testing Instructions](#-testing-instructions)
- [Contribution Guidelines](#-contribution-guidelines)
- [License Information](#-license-information)

## ✨ Key Features

- 📊 **Dashboard Insights:** At-a-glance summaries of key health metrics, including nutritional "Eaten" statistics, interactive blood glucose charts, and activity tracking.
- 🥗 **Comprehensive Meal Logging:** Easily categorize and log meals (Breakfast, Lunch, Dinner, Snack) from a built-in food database, complete with macro-nutritional breakdowns (calories, carbs, fat, protein).
- ⌚ **Health Device Management (Simulated):** A robust interface to simulate pairing, connecting, and managing smart health devices via Bluetooth, displaying connection status and battery levels.
- 🌙 **Permanent Dark Theme:** An aesthetically pleasing, eye-strain-friendly interface styled beautifully with Tailwind CSS v4.
- 📅 **Timeline & Date Picker:** Intuitive navigation to view past logs and future goals.

## 💻 Technologies Used

Vireo is built using a modern, fast, and scalable frontend architecture:

- **[React 19](https://react.dev/):** The core library for building our reactive user interface.
- **[TypeScript](https://www.typescriptlang.org/):** Ensures type safety, fewer runtime errors, and an exemplary developer experience.
- **[Vite](https://vitejs.dev/):** Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) and optimized builds.
- **[Tailwind CSS v4](https://tailwindcss.com/):** A utility-first CSS framework for rapid and consistent styling, strictly configured for our dark design system.
- **[React Router v7](https://reactrouter.com/):** For seamless, client-side routing across different application views.
- **[Recharts](https://recharts.org/):** A composable, reliable charting library used for dynamic blood sugar visualizations.
- **[Framer Motion](https://www.framer.com/motion/):** Powers the smooth, fluid animations and page transitions.
- **[Vitest](https://vitest.dev/):** A blazing fast unit test framework powered by Vite.

## 🚀 Installation & Requirements

To run Vireo locally on your machine, you will need to have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and npm installed.

### Step-by-Step Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/dhaatrik/vireo-wellness.git
   cd vireo-wellness
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **View the Application:**
   Open your modern web browser and navigate to the local URL provided in your terminal (typically `http://localhost:3000`).

## 💡 Usage Instructions & Examples

Vireo is designed to be highly intuitive. Here's how to navigate its core functionalities:

### Logging a Meal
1. Navigate to the **Daily Meals** tab from the bottom navigation bar.
2. Tap the **"+" (Add)** button under the relevant meal category (e.g., Breakfast).
3. Use the search bar to find a food item (e.g., "Apple", "Oatmeal").
4. Select the item to view its nutritional profile.
5. Tap **Log this item** to add it to your daily summary.

### Monitoring Blood Glucose
From the **Dashboard**, scroll to the **Blood Sugar** section. Here you can interact with the dynamic chart (powered by Recharts) to see trends over time. 
*Note: In the current offline/mock state, data is automatically populated to demonstrate the visualization.*

### Connecting a Device
Navigate to the **Devices** section using the bottom navigation menu and tap **Add New Device**. The app will simulate scanning for nearby Bluetooth-enabled health trackers. Select an available device to watch the pairing animation.

## 🧪 Testing Instructions

Vireo maintains high code quality standards through automated testing and linting.

**Run the Linter:**
To ensure code style consistency and catch potential issues early, run ESLint:
```bash
npm run lint
```

**Run Unit Tests:**
The project uses Vitest for its testing framework. You can execute the test suite via:
```bash
npm run test
```

**Production Build Check:**
To verify that the application compiles correctly with TypeScript:
```bash
npm run build
```

## 🤝 Contribution Guidelines

We welcome contributions! Whether you're fixing a bug, adding a new feature, or improving documentation, your help is highly appreciated.

Please read our [**Contributing Guide**](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. As a standard of conduct, this project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). 

### Basic Workflow
1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📄 License Information

This project is distributed under the **MIT License**.

Copyright (c) 2026 Dhaatrik Chowdhury.

See the `LICENSE` file in the root directory for more information and the full legal text. This open license permits free use, modification, and commercial distribution.
