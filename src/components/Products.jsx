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

  return (
    <div className="product-card">
      <div className="product-emoji">{getCategoryEmoji(product.category)}</div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
