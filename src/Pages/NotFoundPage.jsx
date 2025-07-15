import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>
        
        <div className="error-emoji">
          <span className="emoji-main">🔍</span>
          <span className="emoji-secondary">❌</span>
        </div>
        
        <h1 className="error-title">Oops! Page Not Found</h1>
        
        <p className="error-message">
          The page you're looking for seems to have wandered off into the digital void.
          Don't worry, even the best explorers sometimes take a wrong turn! 🗺️
        </p>
        
        <div className="error-suggestions">
          <div className="suggestion-item">
            <span className="suggestion-emoji">🏠</span>
            <span>Go back to the homepage</span>
          </div>
          <div className="suggestion-item">
            <span className="suggestion-emoji">🛍️</span>
            <span>Browse our amazing products</span>
          </div>
          <div className="suggestion-item">
            <span className="suggestion-emoji">📞</span>
            <span>Contact our support team</span>
          </div>
        </div>
        
        <div className="error-actions">
          <button className="back-home-btn" onClick={() => window.location.href = '/'}>
            🏠 Back to Home
          </button>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            🔄 Try Again
          </button>
        </div>
        
        <div className="floating-elements">
          <div className="floating-icon">📦</div>
          <div className="floating-icon">🛒</div>
          <div className="floating-icon">💫</div>
          <div className="floating-icon">🎯</div>
          <div className="floating-icon">⭐</div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage