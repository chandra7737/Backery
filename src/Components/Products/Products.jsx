import React from "react";
import "./Products.css";
import { PRODUCTS_DATA } from "../../Data/data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container">
      {PRODUCTS_DATA.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
