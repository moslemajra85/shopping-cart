import React from "react";

const Product = ({ product }) => {
  // Function to get emoji based on category
  const getCategoryEmoji = (category) => {
    const emojiMap = {
      Electronics: "📱",
      Apparel: "👕",
      Footwear: "👟",
      Accessories: "⌚",
      "Home Goods": "🏠",
      Furniture: "🪑",
    };
    return emojiMap[category] || "📦";
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Adding ${product.name} to cart`);
  };

  return (
    <div className="product-card">
      <div className="product-emoji">{getCategoryEmoji(product.category)}</div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">${product.price}</div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
