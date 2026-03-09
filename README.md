# Vireo - Thrive Daily

![Vireo Banner](https://img.shields.io/badge/Vireo-Thrive_Daily-10b981?style=for-the-badge&logo=react&logoColor=white)

Welcome to **Vireo**, a modern, progressive web application designed to empower individuals in managing their daily wellness. Vireo provides a sleek, permanent dark-theme interface for tracking blood glucose levels, logging meals, and simulating connections to health monitoring devices. 

Designed for optimal viewing comfort and simplicity, Vireo acts as your personal health dashboard, providing insights directly to your device.

---

## Table of Contents

- [Overview & Problem Solved](#overview--problem-solved)
- [Key Features](#key-features)
- [Technologies Used (Tech Stack)](#technologies-used-tech-stack)
- [Installation & Requirements](#installation--requirements)
- [Usage Instructions & Examples](#usage-instructions--examples)
- [Testing Instructions](#testing-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [License Information](#license-information)

---

## Overview & Problem Solved

Managing daily wellness, particularly for individuals who need to track specific metrics like blood glucose and nutrition, can often involve clunky interfaces and fragmented tools. **Vireo solves this problem** by providing a centralized, elegantly designed (dark-theme-first) single-page application (SPA).

Whether you are monitoring your dietary intake, checking your blood sugar trends, or managing health devices, Vireo offers a seamless, mobile-optimized experience that feels like a native app. Currently powered by comprehensive mock data, Vireo demonstrates a complete and robust frontend architecture ready for backend integration.

## Key Features

- **Dashboard Insights:** At-a-glance summaries of key health metrics, including nutritional "Eaten" statistics, interactive blood glucose charts, and activity tracking.
- **Comprehensive Meal Logging:** Easily categorize and log meals (Breakfast, Lunch, Dinner, Snack) from a built-in food database, complete with macro-nutritional breakdowns (calories, carbs, fat, protein).
- **Health Device Management (Simulated):** A robust interface to simulate pairing, connecting, and managing smart health devices via Bluetooth, displaying connection status and battery levels.
- **Permanent Dark Theme:** An aesthetically pleasing, eye-strain-friendly interface styled beautifully with Tailwind CSS.
- **Timeline & Date Picker:** Intuitive navigation to view past logs and future goals.

## Technologies Used (Tech Stack)

Vireo is built using a modern, fast, and scalable frontend architecture:

*   **[React 19](https://react.dev/):** The core library for building our reactive user interface.
*   **[TypeScript](https://www.typescriptlang.org/):** Ensures type safety, fewer runtime errors, and an exemplary developer experience.
*   **[Vite](https://vitejs.dev/):** Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) and optimized builds.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** A utility-first CSS framework for rapid and consistent styling, strictly configured for our dark design system.
*   **[React Router v7](https://reactrouter.com/):** For seamless, client-side routing across different application views.
*   **[Recharts](https://recharts.org/):** A composable, reliable charting library used for the dynamic blood sugar visualizations.
*   **[Framer Motion](https://www.framer.com/motion/):** Powers the smooth, fluid animations and page transitions.
*   **[Lucide React](https://lucide.dev/):** Beautiful, consistent iconography throughout the application.

---

## Installation & Requirements

To run Vireo locally on your machine, you will need to have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and optionally `npm` or `yarn` installed.

### Step-by-Step Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DhaatuTheGamer/vireo-wellness
   cd vireo-wellness
   ```

2. **Install Dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   *Note: Ensure you run this in the root directory where the `package.json` file is located.*

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **View the Application:**
   Open your modern web browser and navigate to the local URL provided in your terminal (typically `http://localhost:3000` or `http://localhost:5173`).

---

## Usage Instructions & Examples

Vireo is designed to be highly intuitive. Here's how to navigate its core functionalities:

### 1. Logging a Meal
*   Navigate to the **Daily Meals** tab from the bottom navigation bar.
*   Tap the **"+" (Add)** button under the relevant meal category (e.g., Breakfast).
*   Use the search bar to find a food item (e.g., "Apple", "Oatmeal").
*   Select the item to view its nutritional profile.
*   Tap **Log this item** to add it to your daily summary.

### 2. Monitoring Blood Glucose
*   From the **Dashboard**, scroll to the **Blood Sugar** section.
*   Here you can interact with the dynamic chart (powered by Recharts) to see trends over time.
*   *Note: In the current offline/mock state, data is automatically populated to demonstrate the visualization.*

### 3. Connecting a simulated Device
*   Navigate to the **Devices** section using the bottom navigation menu.
*   Tap **Add New Device**. The app will simulate scanning for nearby Bluetooth-enabled health trackers.
*   Select an available device from the list and watch the pairing animation. The device will then appear in your connected list with an operational status and simulated battery life.

---

## Testing Instructions

While Vireo currently does not utilize an automated test runner (like Jest or Vitest) out of the box, you can ensure code quality and verify your changes by performing the following:

1.  **TypeScript Compilation Check:**
    Before committing changes, ensure there are no type errors by running the build script:
    ```bash
    npm run build
    ```
    If Vite successfully bundles the application without TypeScript errors, your types are sound.

2.  **Manual UI Verification:**
    *   Start the local dev server (`npm run dev`).
    *   Navigate through the app focusing on the areas you modified.
    *   Check for responsiveness by using your browser's Developer Tools to simulate mobile viewport sizes (e.g., iPhone 12/13 dimension presets).
    *   Verify there are no unexpected errors in the browser console.

---

## Contribution Guidelines

We welcome contributions! Whether you're fixing a bug, adding a new feature, or improving documentation, your help is appreciated.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

Please ensure your code strictly follows the existing TypeScript styles and Tailwind configurations. 

*As a standard of conduct, this project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.*

---

## License Information

This project is distributed under the **MIT License**.

Copyright (c) 2026 Dhaatrik Chowdhury.

See the `LICENSE` file in the root directory for more information and the full legal text. This open license permits free use, modification, and distribution.
