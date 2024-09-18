import React, { createContext, useState } from "react";
import { moringaProducts, moringaBlogs } from "../../assets/data.js";

export const StoreContextApi = createContext(null);

const StoreContext = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= moringaProducts.length; i++) {
      cart[i] = 0;
    }
    // console.log(cart);
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    console.log("inside add");
    // console.log(id);
    if (cartItems[id]) {
      setCartItems((prev) => {
        return { ...prev, [id]: prev[id] + 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [id]: 1 };
      });
    }
  };

  const removeFromCart = (id) => {
    if (cartItems[id]) {
      setCartItems((prev) => {
        return { ...prev, [id]: prev[id] - 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [id]: 0 };
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemFound = moringaProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemFound.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalDelivery = () => {
    let totalDelivery = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemFound = moringaProducts.find(
          (product) => product.id === Number(item)
        );
        totalDelivery += itemFound.delivery;
      }
    }
    return totalDelivery;
  };

  const contextValue = {
    moringaProducts,
    moringaBlogs,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalDelivery
  };

  return (
    <StoreContextApi.Provider value={contextValue}>
      {props.children}
    </StoreContextApi.Provider>
  );
};

export default StoreContext;
