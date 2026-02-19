const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// @route   GET /favorites
// @desc    Get user's favorite products
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('favorites');
    
    res.status(200).json({
      success: true,
      data: user.favorites
    });
  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching favorites' 
    });
  }
});

// @route   POST /favorites/:productId
// @desc    Add product to favorites
// @access  Private
router.post('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }

    const user = await User.findById(req.userId);
    
    // Check if already in favorites
    if (user.favorites.includes(productId)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Product already in favorites' 
      });
    }

    user.favorites.push(productId);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Product added to favorites',
      data: user.favorites
    });
  } catch (error) {
    console.error('Add favorite error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    res.status(500).json({ 
      success: false, 
      message: 'Error adding to favorites' 
    });
  }
});

// @route   DELETE /favorites/:productId
// @desc    Remove product from favorites
// @access  Private
router.delete('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.userId);
    
    // Check if in favorites
    if (!user.favorites.includes(productId)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Product not in favorites' 
      });
    }

    user.favorites = user.favorites.filter(id => id.toString() !== productId);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Product removed from favorites',
      data: user.favorites
    });
  } catch (error) {
    console.error('Remove favorite error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error removing from favorites' 
    });
  }
});

module.exports = router;
