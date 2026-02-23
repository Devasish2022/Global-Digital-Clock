# ⏰ Global Digital Clock

🔗 **Live Demo:**  
https://global-digital-clock-three.vercel.app/

A modern, responsive **Digital Clock Web Application** built with **React.js** and styled using **Tailwind CSS**.  
Designed with a clean neon-glow aesthetic and real-time time updates using React Hooks.

---

## 📸 Preview

<p align="center"><img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/57201594-0288-4b3b-8acf-66481628310e" />
</p>

---

## 🚀 Overview

This project demonstrates:

- React functional component architecture
- Real-time state updates using `useState` & `useEffect`
- Time formatting using JavaScript `Date()`
- Tailwind-based modern UI styling
- Clean, minimal, responsive layout

The application updates every second and renders the current system time in a visually polished interface.

---

## 🛠 Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Vercel (Deployment)**

---

## 🧠 Core Implementation Logic

- `useState()` stores the current time.
- `useEffect()` runs a `setInterval()` every 1000ms.
- On each tick:
  - A new `Date()` object is created.
  - State updates.
  - Component re-renders with formatted time (`HH : MM : SS`).
- Interval is cleaned up on component unmount for performance safety.

---

## 🎨 UI Highlights

- Dark themed modern design
- Gradient typography
- Soft neon glow background
- Rounded glass-style container
- Fully responsive layout

---

## ⚡ What This Project Demonstrates

- Understanding of React lifecycle
- Proper interval cleanup (memory-safe)
- Clean component structure
- Separation of logic and styling
- Production-ready deployment workflow

---
