import React, { useContext } from "react";
import { cartContext } from "../../reducer";

const Product = ({ product }) => {
  const { state: cart, dispatch } = useContext(cartContext);

  const addToCartButton = cart[product.id]?.count ? (
    <div className="add-to-cart">
      <div
        className="button"
        onClick={() => dispatch({ type: "REMOVE", product })}
      >
        -
      </div>
      <div>{cart[product.id]?.count}</div>
      <div
        className="button"
        onClick={() => dispatch({ type: "ADD", product })}
      >
        +
      </div>
    </div>
  ) : (
    <div
      className="add-to-cart button"
      onClick={() => dispatch({ type: "ADD", product })}
    >
      Add to Cart
    </div>
  );
  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <div className="heading">{product.name}</div>
        <div className="description">{product.description}</div>
        <div className="price">$ {product.price}</div>
        {addToCartButton}
      </div>
    </div>
  );
};

export default Product;
