import React, { useContext } from "react";
import "./Header.css";
import { cartContext } from "../../reducer";

const Header = ({}) => {
  const { state: cart } = useContext(cartContext);
  const { amount, totalItems } = Object.values(cart).reduce(
    (prev, cur) => {
      return {
        amount: prev.amount + cur.product.price * cur.count,
        totalItems: prev.totalItems + cur.count,
      };
    },
    { amount: 0, totalItems: 0 }
  );

  const handleCheckout = () => {
    console.log("Cart", cart);
  };

  return (
    <div className="header-wraper">
      <div className="company-name">
        <img width="40px" height="40px" src="logo1.png" alt="backery" />
        <span className="heading">Backery</span>
      </div>
      <div className="cart-info">
        <div className="amount">$ {amount}</div>
        {totalItems ? (
          <>
            <div className="items">({totalItems} Items)</div>{" "}
            <div className="button" onClick={handleCheckout}>
              Checkout
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
