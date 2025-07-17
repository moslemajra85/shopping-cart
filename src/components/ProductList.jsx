import Product from "./Products";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";

const ProductList = () => {

  const { products } = useContext(ProductContext)


  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
