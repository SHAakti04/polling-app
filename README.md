# 🗳️ Real-Time Poll Rooms

A modern, real-time polling platform built with **React, TypeScript, Socket.IO, Nodejs Expressjs and MongoDB**.  
Create polls instantly, share them, and watch results update live.

---

## 🚀 Highlights

- Real-time voting with Socket.IO
- Multiple or single choice polls
- Vote update & change support
- Live percentage bars & leading option
- Premium glassmorphism UI
- Dark / Light theme toggle
- Mobile-friendly & responsive
- Confetti & haptic feedback
- Secure fingerprint-based voting

---
# 📌 Introduction

**Real-Time Poll Rooms** is a full-stack web application that allows users to:

- Create live polls
- Share poll links
- Vote in real time
- See results update instantly

The system is designed for:
- Simplicity
- Performance
- Scalability
- Premium user experience

No login is required — voting is secured using browser fingerprinting.

# ✨ Features

## Poll Creation
- Unlimited options
- Minimum 2 options enforced
- Optional multiple selection
- Instant poll sharing

## Voting
- Real-time vote updates
- Change vote anytime
- Animated percentage bars
- Leading option highlight

## UX Enhancements
- Confetti on submit
- Mobile haptic feedback
- Count-up animations
- Glassmorphism UI

## Theme
- Light / Dark mode
- Animated gradient background
- Persistent theme toggle

# 🛠️ Tech Stack

## Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Canvas Confetti

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO

## Realtime
- WebSockets via Socket.IO
- Poll update broadcasts

## Tooling
- ESLint
- Prettier
- dotenv

# 🗂️ Project Structure

```txt
frontend/
├── components/
│   ├── PollRoom.tsx
│   ├── CreatePoll.tsx
│   ├── VoteOption.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── pages/
│   ├── Home.tsx
│   └── PollPage.tsx
├── services/
│   └── socket.ts
└── styles/
    └── index.css

backend/
├── controllers/
│   └── pollController.ts
├── models/
│   └── Poll.ts
├── routes/
│   └── pollRoutes.ts
├── sockets/
│   └── socketHandler.ts
└── server.ts
```

# ⚙️ Setup & Installation

## Prerequisites
- Node.js 18+
- MongoDB
- npm 

## Clone Repository
```bash
git clone https://github.com/SHAakti04/polling-app.git
cd polling
```

## Frontend Setup
``` bash
cd client
npm install
npm run dev
```
## Backend Setup
``` bash
cd server
npm install
npm run dev
```


