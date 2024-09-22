import React, { useContext } from "react";
import "./Products.css";
import { StoreContextApi } from "../../context/StoreContext";
import addIcon from "../../assets/addIcon.png";
import removeIcon from "../../assets/removeIcon.png";
import add_icon_white from "../../assets/add_icon_white.png";


const Products = () => {
  const { moringaProducts, cartItems, addToCart, removeFromCart } =
    useContext(StoreContextApi);

  return (
    <section className="productsWrapper" id="products">
      <h1>OUR PRODUCTS</h1>
      <hr />
      <div className="mainProducts">
        {moringaProducts.map((product) => {
          // console.log(product.name)
          const { id, name, description, image, newPrice, oldPrice } = product;
          return (
            <div key={id} className="individualProduct">
              <img src={image} alt="" />

          
              {/* {console.log(cartItems)} */}
              {cartItems[id] ? (
                <div className="addRemoveButton">
                  <img onClick={()=>removeFromCart(id)} src={removeIcon} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={addIcon} alt="" />
                </div>
              ) : (
                <div className="addButton">
                  <img onClick={()=>addToCart(id)} src={add_icon_white} alt="" />
                </div>
              )}

              <div className="nameAndDescription">
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
              <div className="cartAndPrice">
                <div className="individualProductPrice">
                  <p className="newPrice">₹ {newPrice}</p>
                  <p className="oldPrice">₹ {oldPrice}</p>
                </div>
                <div className="individualProductCart">
                  <button className="addToCartButton">Add To Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
