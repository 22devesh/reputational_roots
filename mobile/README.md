# Mobile App - Micro Marketplace

React Native mobile application built with Expo

## Features

- User Authentication (Login/Register)
- Browse Products
- Product Details
- Favorites Management
- Pull-to-Refresh
- Native Navigation

## Installation

```bash
npm install
```

## Running the App

Start Expo development server:
```bash
npm start
```

Run on Android:
```bash
npm run android
```

Run on iOS:
```bash
npm run ios
```

Run on Web:
```bash
npm run web
```

## Important: API Configuration

Before running on a physical device, update the API URL in `services/api.js`:

```javascript
// Change localhost to your computer's IP address
const API_URL = 'http://YOUR_IP_ADDRESS:5000/api';
// Example: 'http://192.168.1.100:5000/api'
```

To find your IP address:
- **Windows**: Run `ipconfig` in terminal
- **Mac/Linux**: Run `ifconfig` in terminal

## Technologies Used

- React Native
- Expo
- React Navigation
- Axios
- AsyncStorage

## Project Structure

```
mobile/
├── screens/           # App screens
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── ProductsScreen.js
│   └── ProductDetailScreen.js
├── context/          # React Context
│   └── AuthContext.js
├── services/         # API services
│   └── api.js
└── App.js           # Main app component
```

## Features Implemented

1. **Authentication**
   - JWT token-based auth
   - Persistent login with AsyncStorage
   - Automatic navigation based on auth state

2. **Product Features**
   - Grid layout
   - Search functionality
   - Pull-to-refresh
   - Detail view

3. **Native Features**
   - Native navigation
   - Native animations
   - Responsive design
   - Platform-specific styling

## Testing

1. Install Expo Go app on your phone:
   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS](https://apps.apple.com/app/expo-go/id982107779)

2. Scan QR code from `npm start`

3. Make sure your phone and computer are on the same network

## Building for Production

Build APK (Android):
```bash
expo build:android
```

Build IPA (iOS):
```bash
expo build:ios
```

## Troubleshooting

**Can't connect to API:**
- Ensure backend is running
- Check API URL uses your IP, not localhost
- Verify both devices are on same network
- Check firewall settings

**App won't load:**
- Clear cache: `expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
