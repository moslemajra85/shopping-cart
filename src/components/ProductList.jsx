import React, { useEffect, useState } from "react";
import HttpClient from "../http/httpClient";
import Product from "./Products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    HttpClient.get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
