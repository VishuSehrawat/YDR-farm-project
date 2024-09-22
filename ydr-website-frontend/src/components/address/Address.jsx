import React, { useState,useEffect } from "react";
import "./Address.css";

const Address = ({ setCurrPage,data,setData }) => {

    

    const onChangeHandler = (e) => {
        const name=e.target.name
        const value = e.target.value
        
        setData((prev)=>({...prev,[name]:value}))
    }

    useEffect(() => {
        console.log(data)
    },[data])
 

  return (
    <div>
      Address
      <h1>Enter Delivery Information</h1>
      <div className="addressMain">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            value={data.contact}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="street">Street</label>
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            value={data.country}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={data.zipCode}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          <label htmlFor="otherInfo">Additional Info</label>
          <input
            type="text"
            name="otherInfo"
            value={data.otherInfo}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </form>
      </div>
      <button onClick={() => setCurrPage("orderSummary")}>
        Go to Checkout
      </button>
    </div>
  );
};

export default Address;
