import React, { useState,useContext} from "react";
import "./LoginSignUp.css";
import {StoreContextApi} from '../../context/StoreContext.jsx'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const LoginSignup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { backendUrl, setToken } = useContext(StoreContextApi);

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (e) => {
    e.preventDefault()

    let newUrl = backendUrl

    if (currState === 'Sign Up') {
      newUrl += '/api/user/register'
      console.log(newUrl)

    }
    else {
      newUrl += '/api/user/login'
      console.log(newUrl)
    }

    const response = await axios.post(newUrl,formData)

    console.log(response)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      setShowLogin(false)
      navigate('/')
    }
    
  }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mainLoginSignup">
      <h1>{currState}</h1>
      <form onSubmit={onLogin} className="loginSignUpForm">
        {currState === "Sign Up" ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => onChange(e)}
            placeholder="Name"
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => onChange(e)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => onChange(e)}
          placeholder="Password"
        />
        <button className="formSubmitButton">
          {currState === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        {currState === "Sign Up" ? (
          <div className="switchForm">
            <p>Already a user?</p>
            <p
              onClick={() => {
                setCurrState("Login");
              }}
              style={{ color: "red" }}
            >
              Login here
            </p>
          </div>
        ) : (
          <div className="switchForm">
            <p>New to YDR?</p>
            <p
              onClick={() => {
                setCurrState("Sign Up");
              }}
              style={{ color: "red" }}
            >
              Sign Up here
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;
