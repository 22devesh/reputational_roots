require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');

const seedData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123'
      }
    ];

    const createdUsers = await User.create(users);
    console.log('Created 2 users');

    // Create products
    const products = [
      {
        title: 'Wireless Headphones',
        price: 79.99,
        description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and travelers.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
      },
      {
        title: 'Smart Watch',
        price: 249.99,
        description: 'Feature-packed smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
      },
      {
        title: 'Laptop Stand',
        price: 39.99,
        description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture and airflow for better cooling.',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'
      },
      {
        title: 'Mechanical Keyboard',
        price: 129.99,
        description: 'RGB mechanical gaming keyboard with customizable keys and tactile switches. Perfect for gaming and typing.',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
      },
      {
        title: 'USB-C Hub',
        price: 49.99,
        description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery. Essential for modern laptops.',
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500'
      },
      {
        title: 'Wireless Mouse',
        price: 29.99,
        description: 'Ergonomic wireless mouse with precision tracking and long battery life. Compatible with all operating systems.',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'
      },
      {
        title: 'Phone Case',
        price: 19.99,
        description: 'Durable protective phone case with shock absorption and raised edges. Stylish design with multiple color options.',
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500'
      },
      {
        title: 'Portable Charger',
        price: 34.99,
        description: 'High-capacity 20000mAh power bank with fast charging. Charge multiple devices simultaneously on the go.',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500'
      },
      {
        title: 'Bluetooth Speaker',
        price: 59.99,
        description: 'Waterproof portable Bluetooth speaker with 360° sound and 12-hour playtime. Perfect for outdoor adventures.',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
      },
      {
        title: 'Webcam HD',
        price: 89.99,
        description: 'Full HD 1080p webcam with autofocus and built-in microphone. Ideal for video calls and streaming.',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
      }
    ];

    const createdProducts = await Product.create(products);
    console.log('Created 10 products');

    // Add some favorites to the first user
    createdUsers[0].favorites = [createdProducts[0]._id, createdProducts[2]._id, createdProducts[4]._id];
    await createdUsers[0].save();
    console.log('Added favorites for first user');

    console.log('\n✅ Seed data created successfully!\n');
    console.log('Test Credentials:');
    console.log('User 1:');
    console.log('  Email: john@example.com');
    console.log('  Password: password123');
    console.log('\nUser 2:');
    console.log('  Email: jane@example.com');
    console.log('  Password: password123');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedData();
