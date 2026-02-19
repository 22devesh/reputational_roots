# 🚀 Quick Start Guide

This guide will help you get the Micro Marketplace app running quickly.

## Prerequisites

Install these before starting:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) for mobile: `npm install -g expo-cli`

## Step-by-Step Setup

### 1️⃣ Clone or Download the Repository

```bash
cd reputational_roots
```

### 2️⃣ Setup Backend (5 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Make sure MongoDB is running (if local)
# For Windows: Start MongoDB service
# For Mac: brew services start mongodb-community

# Seed the database with sample data
npm run seed

# Start the backend server
npm start
```

✅ Backend should be running on `http://localhost:5000`

### 3️⃣ Setup Web App (3 minutes)

Open a new terminal window:

```bash
# Navigate to web
cd web

# Install dependencies
npm install

# Start the web app
npm start
```

✅ Web app should open automatically at `http://localhost:3000`

### 4️⃣ Setup Mobile App (5 minutes)

Open another terminal window:

```bash
# Navigate to mobile
cd mobile

# Install dependencies
npm install

# IMPORTANT: Update API URL in mobile/services/api.js
# Change 'localhost' to your computer's IP address
# Example: const API_URL = 'http://192.168.1.100:5000/api';

# Start Expo
npm start
```

✅ Scan QR code with Expo Go app on your phone

## 🔐 Test Credentials

Use these to login:

**Email:** john@example.com  
**Password:** password123

**Email:** jane@example.com  
**Password:** password123

## 📱 Testing the App

1. **Web:** Open `http://localhost:3000` in your browser
2. **Mobile:** Scan QR code with Expo Go app
3. Login with test credentials above
4. Browse products, search, add favorites!

## 🐛 Common Issues

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Windows: Check Services
# Mac: brew services list
```

### Can't connect from mobile app
- Update API URL in `mobile/services/api.js` to use your computer's IP
- Ensure phone and computer are on same WiFi network
- Check firewall isn't blocking port 5000

### Port already in use
```bash
# Backend (port 5000)
lsof -ti:5000 | xargs kill -9

# Web (port 3000)
lsof -ti:3000 | xargs kill -9
```

## 🎉 You're Ready!

All three components should now be running:
- ✅ Backend API: http://localhost:5000
- ✅ Web App: http://localhost:3000
- ✅ Mobile App: On your phone via Expo Go

Enjoy exploring the Micro Marketplace! 🛍️
