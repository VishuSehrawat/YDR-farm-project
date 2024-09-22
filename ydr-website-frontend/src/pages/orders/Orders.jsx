import React, { useContext, useState } from "react";
import "./Orders.css";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import Address from "../../components/address/Address";
import { StoreContextApi } from "../../context/StoreContext";
import axios from "axios";

const Orders = () => {
  const {moringaProducts,cartItems,getTotalCartAmount,backendUrl,token}=useContext(StoreContextApi)
  const [currPage, setCurrPage] = useState("address");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    street: "",
    state: "",
    country: "",
    zipCode: "",
    otherInfo: "",
  });

  const placeOrder = async (e) => {
    let orderItems = []

    moringaProducts.map((item) => {
      if (cartItems[item.id] > 0) {
        let itemInfo = item
        itemInfo['quantity'] = cartItems[item.id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount:getTotalCartAmount()
    }

    let response = await axios.post(backendUrl + '/api/order/placeOrder', orderData, { headers: { token } })
    console.log(response.data.sessionUrl)

    if (response.data.success) {
      const { sessionUrl } = response.data
      
      window.location.replace(sessionUrl)
    }
    else {
      alert('Error')
    }

  };
  return (
    <>
      <div>Orders</div>
      {currPage === "address" ? (
        <div className="address">
          <Address data={data} setData={setData} setCurrPage={setCurrPage} />
        </div>
      ) : (
        <div className="orderSummary">
          <OrderSummary placeOrder={placeOrder} setCurrPage={setCurrPage} />
        </div>
      )}
    </>
  );
};

export default Orders;