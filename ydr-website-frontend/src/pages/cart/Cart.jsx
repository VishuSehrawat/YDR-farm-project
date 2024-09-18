import React, { useContext } from "react";
import "./Cart.css";
import { StoreContextApi } from "../../components/context/StoreContext";
import crossIcon from "../../assets/crossIcon.png";
import removeIcon from "../../assets/removeIcon.png";
import add_icon_white from "../../assets/add_icon_white.png";

const Cart = () => {
  const {
    moringaProducts,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    getTotalDelivery,
  } = useContext(StoreContextApi);

  return (
    <div className="outerCart">
      <div className="cart">
        <div className="leftCart">
          <h2>Your Cart</h2>
          <div className="cartTitles">
            <p>Image</p>
            <p>Details</p>
            <p>Quantity</p>

            <p>Total</p>
            <p>Actions</p>
          </div>
          <hr />
          <div className="cartContent">
            {moringaProducts.map((product, index) => {
              const { id, name, description, image, newPrice, oldPrice } =
                product;

              if (cartItems[id] > 0) {
                return (
                  <>
                    <div className="individualContent">
                      <img src={image} alt="" />
                      <div className="description">
                        <p>{name}</p>
                        <p>₹ {newPrice}</p>
                      </div>
                      <p>{cartItems[id]}</p>

                      <p>₹ {cartItems[id] * newPrice}</p>
                      <div className="actionDiv">
                        <img
                          onClick={() => removeFromCart(id)}
                          src={removeIcon}
                          alt=""
                          className="removeIcon"
                        />
                        <img
                          onClick={() => addToCart(id)}
                          src={add_icon_white}
                          alt=""
                          className="addIcon"
                        />
                        <img className="crossIcon" src={crossIcon} alt="" />
                      </div>
                    </div>
                    <hr />
                  </>
                );
              }
            })}
          </div>
        </div>
        <hr />
        <div className="rightCart">
          <h2>Cart Totals</h2>
          <div className="cartTotals">
            <div className="subtotalRow">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="deliveryRow">
              <p>Shipping</p>
              <p>₹ {getTotalDelivery()}</p>
            </div>
              <hr />
            <div className="totalRow">
              <p>Total</p>
              <p>₹ {getTotalCartAmount() + getTotalDelivery()}</p>
            </div>
          </div>
          <button className="checkoutButton">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
