import React, { useState, useEffect } from "react";
import "./Address.css";

const Address = ({ setCurrPage, data, setData }) => {
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="address">
      <h1>Enter Delivery Information</h1>

      <div className="addressMain">
        <form>
          <div className="addressFormElement">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              value={data.contact}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              value={data.street}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
            />
          </div>

          <div className="addressFormElement">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={data.zipCode}
              onChange={onChangeHandler}
            />
          </div>

    
        </form>
          <button onClick={() => setCurrPage("orderSummary")}>
            Go to Checkout
          </button>
      </div>
    </div>
  );
};

export default Address;
