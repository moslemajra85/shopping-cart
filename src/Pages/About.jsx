import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-icon">
            <span className="main-icon">🛍️</span>
            <span className="orbit-icon">✨</span>
            <span className="orbit-icon">💎</span>
            <span className="orbit-icon">🌟</span>
          </div>
          <h1 className="about-title">About Our Store</h1>
          <p className="about-subtitle">
            Discover amazing products, exceptional quality, and unbeatable experiences! 🚀
          </p>
        </div>

        {/* Mission Cards */}
        <div className="mission-section">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide high-quality products that enhance your lifestyle while delivering exceptional customer service and creating memorable shopping experiences.</p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>To become the world's most trusted online marketplace, connecting people with products they love and building a sustainable future for commerce.</p>
            </div>
            <div className="mission-card">
              <div className="card-icon">💝</div>
              <h3>Our Values</h3>
              <p>Quality, integrity, innovation, and customer satisfaction are at the heart of everything we do. We believe in building lasting relationships.</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="categories-section">
          <h2 className="section-title">What We Offer</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Electronics</h3>
              <p>Latest smartphones, laptops, tablets, and cutting-edge tech gadgets</p>
              <div className="card-stats">
                <span className="stat">500+ Products</span>
                <span className="rating">⭐ 4.8/5</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">👕</div>
              <h3>Fashion & Apparel</h3>
              <p>Trendy clothing, accessories, and fashion items for every style</p>
              <div className="card-stats">
                <span className="stat">1000+ Items</span>
                <span className="rating">⭐ 4.7/5</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">🏠</div>
              <h3>Home & Living</h3>
              <p>Beautiful furniture, decor, and essentials to make your house a home</p>
              <div className="card-stats">
                <span className="stat">300+ Products</span>
                <span className="rating">⭐ 4.9/5</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">👟</div>
              <h3>Sports & Footwear</h3>
              <p>Athletic gear, comfortable shoes, and sports equipment for active lifestyles</p>
              <div className="card-stats">
                <span className="stat">400+ Items</span>
                <span className="rating">⭐ 4.6/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Free shipping on orders over $50. Express delivery available!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Shopping</h3>
              <p>Your data is protected with industry-leading security measures.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Our friendly team is always here to help you with any questions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy. Not satisfied? We'll make it right!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Flexible Payment</h3>
              <p>Multiple payment options including buy now, pay later services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Rewards Program</h3>
              <p>Earn points with every purchase and unlock exclusive benefits.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <h2 className="section-title">Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
              <div className="stat-icon">😊</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Products Sold</div>
              <div className="stat-icon">📦</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.5%</div>
              <div className="stat-label">Satisfaction Rate</div>
              <div className="stat-icon">⭐</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
              <div className="stat-icon">🎧</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p className="team-role">CEO & Founder</p>
              <p className="team-bio">Visionary leader with 15+ years in e-commerce</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p className="team-role">CTO</p>
              <p className="team-bio">Tech expert ensuring seamless user experiences</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🎨</div>
              <h3>Mike Chen</h3>
              <p className="team-role">Head of Design</p>
              <p className="team-bio">Creative mind behind our beautiful interfaces</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍📈</div>
              <h3>Emily Davis</h3>
              <p className="team-role">Marketing Director</p>
              <p className="team-bio">Connecting customers with products they love</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and discover amazing products today!</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => window.location.href = '/'}>
                🛍️ Start Shopping
              </button>
              <button className="cta-btn secondary" onClick={() => window.location.href = '/contact'}>
                💬 Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element">🎉</div>
          <div className="floating-element">💫</div>
          <div className="floating-element">🌈</div>
          <div className="floating-element">⚡</div>
          <div className="floating-element">🎊</div>
          <div className="floating-element">🔥</div>
          <div className="floating-element">💎</div>
          <div className="floating-element">🚀</div>
        </div>
      </div>
    </div>
  );
};

export default About;
