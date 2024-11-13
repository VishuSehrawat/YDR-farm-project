import React, { useContext } from "react";
import "./OrderSummary.css";
import { StoreContextApi } from "../../context/StoreContext";

const OrderSummary = ({ setCurrPage, placeOrder }) => {
  const { cartItems, moringaProducts } = useContext(StoreContextApi);
  console.log("cart items->", cartItems, moringaProducts);
  return (
    <div className="orderSummaryContainer">
      <h1>Order Summary</h1>
      <div className="orderSummaryMain">
        {moringaProducts.map((item) => {
          const { id, name, image, description, newPrice, oldPrice } = item;
          if (!cartItems[id]) {
            return null; // Return null instead of undefined for clarity
          }
          return (
            <div className="productCard" key={id}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p className="price">₹ {newPrice}</p>
              <p className="oldPrice">Old Price: ₹ {oldPrice}</p>
              <p className="savings">You saved: ₹ {oldPrice - newPrice}</p>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setCurrPage("address")}>Back</button>
        <button
          type="submit"
          onClick={() => {
            placeOrder();
          }}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
