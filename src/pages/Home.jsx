import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to E-Store</h1>
          <p>Your one-stop shop for amazing products</p>
          <Link to="/products" className="cta-btn">Shop Now</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🚚 Fast Delivery</h3>
              <p>Get your products delivered quickly</p>
            </div>
            <div className="feature-card">
              <h3>💯 Quality Products</h3>
              <p>We ensure the best quality</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure Payment</h3>
              <p>Your transactions are safe with us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;