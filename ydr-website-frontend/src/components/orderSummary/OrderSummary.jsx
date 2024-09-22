import React, { useContext } from "react";
import "./OrderSummary.css";
import { StoreContextApi } from "../../context/StoreContext";

const OrderSummary = ({ setCurrPage, placeOrder }) => {
  const { cartItems, moringaProducts } = useContext(StoreContextApi);
  console.log("cart items->", cartItems, moringaProducts);
  return (
    <div>
      OrderSummary
      <div className="orderSummaryMain">
        {moringaProducts.map((item) => {
          const { id, name, image, description, newPrice, oldPrice } = item;
          if (!cartItems[id]) {
            return;
          } else {
            return (
              <>
                <img src={image} alt="" />
                <p>{name}</p>
                <p>{newPrice}</p>
                <p>{oldPrice}</p>
                <p>Yay! You saved ₹ {oldPrice - newPrice}</p>
              </>
            );
          }
        })}
      </div>
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
  );
};

export default OrderSummary;
