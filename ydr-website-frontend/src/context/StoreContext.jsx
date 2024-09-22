import React, { createContext, useState, useEffect } from "react";
import { moringaProducts, moringaBlogs } from "../assets/data.js";
import axios from "axios";

export const StoreContextApi = createContext(null);

const StoreContext = (props) => {

  const [token,setToken]=useState('')
  const backendUrl='http://localhost:4000'

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= moringaProducts.length; i++) {
      cart[i] = 0;
    }
    // console.log(cart);
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [MoringaProducts,setMoringaProducts]=useState([])

  const loadCartData = async (token) => {
    console.log('token here-> ', token)
    if (!token) {
      return null
    }

    try {
       const response = await axios.post(
         backendUrl + "/api/cart/getCart",
         {},
         { headers: { token } }
       );
       console.log("response in load cart data", response.data.cartData);
       setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
   
  }

  // const fetchMoringaProducts = async () => {
  //   const response = await axios.get(backendUrl+'/api/cart/getCart',{},{headers:{token}})
  //   setMoringaProducts(response.data.data)
  // }

  useEffect(() => {
    // fetchMoringaProducts()

    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      loadCartData(localStorage.getItem('token'))
    }
    
    if (token) {
      loadCartData(token)
    } else {
      setCartItems(getDefaultCart())
    }
  }, [token])
  

  const addToCart = async (itemId) => {
    console.log("inside add");
    // console.log(itemId);
    if (cartItems[itemId]) {
      setCartItems((prev) => {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemId]: 1 };
      });
    }

    if (token) {
      await axios.post(backendUrl+'/api/cart/add',{itemId},{headers:{token}})
    }
  };
 
  const removeFromCart = async(itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemId]: 0 };
      });
    }

    if (token) {
      await axios.post(backendUrl+'/api/cart/remove',{itemId},{headers:{token}})
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

  const getUserProfile = async (token) => {
    const response = await axios.post(backendUrl + '/api/user/getProfile',{},{headers:{token}})
    const username = await response.data.userName
    console.log(username)
    return username
  }

  const contextValue = {
    moringaProducts,
    MoringaProducts,
    moringaBlogs,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalDelivery, backendUrl,token,setToken,getUserProfile,loadCartData
  };

  return (
    <StoreContextApi.Provider value={contextValue}>
      {props.children}
    </StoreContextApi.Provider>
  );
};

export default StoreContext;
