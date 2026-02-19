import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { productsAPI, favoritesAPI } from '../services/api';
import './ProductDetail.css';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
    if (user) {
      checkFavorite();
    }
  }, [id, user]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(id);
      setProduct(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to load product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    try {
      const response = await favoritesAPI.getAll();
      const favoriteIds = response.data.data.map(fav => fav._id);
      setIsFavorite(favoriteIds.includes(id));
    } catch (err) {
      console.error('Failed to check favorites');
    }
  };

  const toggleFavorite = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      if (isFavorite) {
        await favoritesAPI.remove(id);
        setIsFavorite(false);
      } else {
        await favoritesAPI.add(id);
        setIsFavorite(true);
      }
    } catch (err) {
      console.error('Failed to update favorites');
    }
  };

  if (loading) {
    return <div className="loading-detail">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="product-detail-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Products
        </button>
        <div className="error-detail">{error || 'Product not found'}</div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Products
      </button>
      <div className="product-detail-card">
        <div className="product-detail-content">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
          <div className="product-detail-info">
            <div className="product-detail-header">
              <h1 className="product-detail-title">{product.title}</h1>
              <button
                className={`product-detail-favorite ${isFavorite ? 'active' : ''}`}
                onClick={toggleFavorite}
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="product-detail-price">
              ${product.price.toFixed(2)}
            </div>
            <p className="product-detail-description">
              {product.description}
            </p>
            <div className="product-detail-meta">
              Added on {new Date(product.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
