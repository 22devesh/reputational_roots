# Backend API - Micro Marketplace

Node.js + Express REST API with MongoDB

## Features

- JWT Authentication
- User Registration & Login
- Product CRUD Operations
- Search & Pagination
- Favorites Management
- Input Validation
- Error Handling
- Password Hashing

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/marketplace
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Seeding the Database

```bash
npm run seed
```

This will create:
- 2 test users
- 10 sample products
- Some pre-populated favorites

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (with search & pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Favorites
- `GET /api/favorites` - Get user favorites (protected)
- `POST /api/favorites/:productId` - Add to favorites (protected)
- `DELETE /api/favorites/:productId` - Remove from favorites (protected)

## Technologies Used

- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js
- Express Validator
- CORS
- Dotenv
