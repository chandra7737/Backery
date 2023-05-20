import { createContext } from "react";

export const cartContext = createContext({});

export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD": {
      const cartCopy = { ...cart };
      if (!cartCopy[action.product.id]) {
        cartCopy[action.product.id] = { product: action.product, count: 0 };
      }
      cartCopy[action.product.id].count += 1;
      return { ...cartCopy };
    }
    case "REMOVE": {
      const cartCopy = { ...cart };
      cartCopy[action.product.id].count -= 1;
      if (!cartCopy[action.product.id].count) {
        delete cartCopy[action.product.id];
      }
      return { ...cartCopy };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
