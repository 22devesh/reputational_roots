# Web App - Micro Marketplace

React web application for the marketplace

## Features

- User Authentication (Login/Register)
- Product Browsing with Search
- Pagination
- Product Details
- Favorites Management
- Responsive Design
- Animations & Micro-interactions

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the App

Development mode:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Technologies Used

- React 18
- React Router DOM
- Axios
- Context API for state management
- CSS3 with Animations

## Project Structure

```
src/
├── components/      # Reusable components
│   └── Navbar.js
├── pages/          # Page components
│   ├── Login.js
│   ├── Register.js
│   ├── Products.js
│   ├── ProductDetail.js
│   └── Favorites.js
├── context/        # React Context
│   └── AuthContext.js
├── services/       # API services
│   └── api.js
└── App.js         # Main app component
```

## Features Implemented

1. **Authentication**
   - JWT token-based auth
   - Persistent login with localStorage
   - Protected routes

2. **Product Features**
   - Grid layout with responsive design
   - Search functionality
   - Pagination
   - Detail view

3. **UI/UX**
   - Gradient backgrounds
   - Smooth animations (fadeIn, slideIn, pulse)
   - Hover effects
   - Glass morphism effects
   - Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
