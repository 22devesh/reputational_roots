import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { productsAPI, favoritesAPI } from '../services/api';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    if (user) {
      fetchFavorites();
    }
  }, [page, user]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getAll({ page, limit: 9, search });
      setProducts(response.data.data.products);
      setPagination(response.data.data.pagination);
      setError('');
    } catch (err) {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await favoritesAPI.getAll();
      setFavorites(response.data.data.map(fav => fav._id));
    } catch (err) {
      console.error('Failed to load favorites');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
  };

  const toggleFavorite = async (productId, e) => {
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      if (favorites.includes(productId)) {
        await favoritesAPI.remove(productId);
        setFavorites(favorites.filter(id => id !== productId));
      } else {
        await favoritesAPI.add(productId);
        setFavorites([...favorites, productId]);
      }
    } catch (err) {
      console.error('Failed to update favorites');
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (loading && products.length === 0) {
    return <div className="loading">Loading products...</div>;
  }

  if (error && products.length === 0) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Discover Amazing Products</h1>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try adjusting your search or check back later!</p>
        </div>
      ) : (
        <>
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product._id}
                className="product-card"
                onClick={() => handleProductClick(product._id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <div className="product-header">
                    <h3 className="product-title">{product.title}</h3>
                    <button
                      className={`favorite-button ${favorites.includes(product._id) ? 'active' : ''}`}
                      onClick={(e) => toggleFavorite(product._id, e)}
                    >
                      {favorites.includes(product._id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {pagination.totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span>
                Page {page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
