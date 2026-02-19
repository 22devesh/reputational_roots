# 🛍️ Micro Marketplace App

A full-stack marketplace application with Web, Backend, and Mobile support.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Test Credentials](#test-credentials)
- [Screenshots](#screenshots)

## ✨ Features

### Backend (Node.js + Express)
- ✅ JWT-based authentication (register/login)
- ✅ Full CRUD operations for products
- ✅ Search functionality with pagination
- ✅ Add/Remove favorites
- ✅ Input validation with express-validator
- ✅ Password hashing with bcrypt
- ✅ MongoDB database with Mongoose
- ✅ Proper HTTP status codes
- ✅ Error handling middleware

### Web App (React)
- ✅ User authentication (login/register)
- ✅ Product listing with search and pagination
- ✅ Product detail page
- ✅ Favorite/unfavorite functionality
- ✅ Responsive design
- ✅ Smooth animations and transitions
- ✅ Creative UI elements (gradient backgrounds, hover effects, micro-interactions)

### Mobile App (React Native + Expo)
- ✅ User authentication (login/register)
- ✅ Browse products
- ✅ View product details
- ✅ Favorite/unfavorite functionality
- ✅ Pull-to-refresh
- ✅ Native navigation

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Express Validator
- CORS

### Web
- React 18
- React Router DOM
- Axios
- CSS3 with animations

### Mobile
- React Native
- Expo
- React Navigation
- Axios
- AsyncStorage

## 📁 Project Structure

```
reputational_roots/
├── backend/              # Node.js + Express API
│   ├── config/          # Database configuration
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── server.js        # Main server file
│   └── seed.js          # Seed script
├── web/                 # React web application
│   ├── public/
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── context/     # Auth context
│       └── services/    # API services
└── mobile/              # React Native mobile app
    ├── screens/         # App screens
    ├── context/         # Auth context
    ├── services/        # API services
    └── App.js           # Main app file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn
- Expo CLI (for mobile app)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (already created with defaults):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/marketplace
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development
```

4. Make sure MongoDB is running, then seed the database:
```bash
npm run seed
```

5. Start the server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The API will be available at `http://localhost:5000`

### Web App Setup

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The web app will open at `http://localhost:3000`

### Mobile App Setup

1. Navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Update the API URL in `services/api.js`:
   - For physical device testing, replace `localhost` with your computer's IP address
   - Example: `http://192.168.1.100:5000/api`

4. Start the Expo development server:
```bash
npm start
```

5. Use the Expo Go app on your phone to scan the QR code, or run on an emulator

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

### Product Endpoints

#### Get All Products (with search & pagination)
```http
GET /products?search=laptop&page=1&limit=10
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "products": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 50,
      "itemsPerPage": 10
    }
  }
}
```

#### Get Single Product
```http
GET /products/:id
```

#### Create Product (Protected)
```http
POST /products
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Laptop",
  "price": 999.99,
  "description": "High-performance laptop",
  "image": "https://example.com/image.jpg"
}
```

#### Update Product (Protected)
```http
PUT /products/:id
Authorization: Bearer <token>
```

#### Delete Product (Protected)
```http
DELETE /products/:id
Authorization: Bearer <token>
```

### Favorites Endpoints

#### Get User's Favorites (Protected)
```http
GET /favorites
Authorization: Bearer <token>
```

#### Add to Favorites (Protected)
```http
POST /favorites/:productId
Authorization: Bearer <token>
```

#### Remove from Favorites (Protected)
```http
DELETE /favorites/:productId
Authorization: Bearer <token>
```

### Response Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `404` - Not Found
- `409` - Conflict (duplicate email)
- `500` - Server Error

## 🔑 Test Credentials

Use these credentials to test the application:

**User 1:**
- Email: `john@example.com`
- Password: `password123`

**User 2:**
- Email: `jane@example.com`
- Password: `password123`

## 🎨 Creative UI Elements

### Web App
1. **Gradient Backgrounds** - Beautiful gradient color scheme throughout
2. **Smooth Animations** - fadeIn and slideIn animations on page load
3. **Hover Effects** - Cards lift and scale on hover with shadow effects
4. **Pulse Animation** - Favorite button pulses when clicked
5. **Glass Morphism** - Navbar with backdrop blur effect
6. **Rounded Corners** - Modern rounded design elements
7. **Micro-interactions** - Button transforms and color transitions

### Mobile App
1. **Native Animations** - Smooth transitions between screens
2. **Pull-to-Refresh** - Native pull-to-refresh on products list
3. **Shadow Effects** - Elevated cards with proper shadows
4. **Gradient Headers** - Eye-catching gradient header design
5. **Responsive Touch** - Native touch feedback on all interactive elements

## 🏗️ Database Schema

### User Model
```javascript
{
  name: String (required, min 2 chars),
  email: String (required, unique, validated),
  password: String (required, hashed, min 6 chars),
  favorites: [ObjectId] (references Product),
  createdAt: Date
}
```

### Product Model
```javascript
{
  title: String (required, min 3 chars),
  price: Number (required, min 0),
  description: String (required, min 10 chars),
  image: String (required, URL),
  createdAt: Date
}
```

## 🧪 Testing the Application

1. **Start all services:**
   - MongoDB server
   - Backend API (`cd backend && npm start`)
   - Web app (`cd web && npm start`)
   - Mobile app (`cd mobile && npm start`)

2. **Test authentication:**
   - Register a new user
   - Login with test credentials
   - Verify JWT token storage

3. **Test product features:**
   - View product list
   - Search for products
   - Navigate through pages
   - View product details

4. **Test favorites:**
   - Add products to favorites
   - View favorites page
   - Remove from favorites

## 📝 Validation Rules

- **Name**: Min 2 characters
- **Email**: Valid email format
- **Password**: Min 6 characters
- **Product Title**: Min 3 characters
- **Product Price**: Positive number
- **Product Description**: Min 10 characters
- **Product Image**: Required URL

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected routes requiring authentication
- Input validation and sanitization
- CORS enabled for cross-origin requests
- Environment variables for sensitive data

## 🚧 Future Enhancements

- Image upload functionality
- User profile management
- Product categories
- Advanced filtering
- Shopping cart
- Order management
- Payment integration
- Product reviews and ratings
- Real-time notifications

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 👨‍💻 Author

Created as a Full Stack Developer Intern Assignment

---

**Note:** This is a demonstration project showcasing full-stack development skills including:
- Backend API development
- Frontend web development
- Mobile app development
- Database design and management
- Authentication and authorization
- RESTful API design
- Responsive UI/UX design
