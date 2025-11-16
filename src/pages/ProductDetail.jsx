import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/products/${id}`);
      setProduct(response.data.data);
    } catch (error) {
      setError('Product not found');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
        <div className="detail-content">
          <div className="image-section">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info-section">
            <h1>{product.name}</h1>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            <p className="stock">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
            <button 
              className="add-cart-btn"
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;