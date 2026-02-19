import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { favoritesAPI } from '../services/api';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchFavorites();
  }, [user, navigate]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const response = await favoritesAPI.getAll();
      setFavorites(response.data.data);
    } catch (err) {
      console.error('Failed to load favorites');
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (productId, e) => {
    e.stopPropagation();
    try {
      await favoritesAPI.remove(productId);
      setFavorites(favorites.filter(fav => fav._id !== productId));
    } catch (err) {
      console.error('Failed to remove favorite');
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (loading) {
    return <div className="loading-favorites">Loading favorites...</div>;
  }

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <div className="favorites-empty">
          <h2>No favorites yet!</h2>
          <p>Start adding products to your favorites to see them here.</p>
          <button className="browse-button" onClick={() => navigate('/')}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h1>❤️ My Favorites</h1>
      </div>
      <div className="favorites-grid">
        {favorites.map((product) => (
          <div
            key={product._id}
            className="favorite-card"
            onClick={() => handleProductClick(product._id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="favorite-image"
            />
            <div className="favorite-info">
              <div className="favorite-header">
                <h3 className="favorite-title">{product.title}</h3>
                <button
                  className="remove-favorite-button"
                  onClick={(e) => removeFavorite(product._id, e)}
                >
                  ❌
                </button>
              </div>
              <p className="favorite-price">${product.price.toFixed(2)}</p>
              <p className="favorite-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
