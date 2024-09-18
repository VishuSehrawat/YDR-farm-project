import React, { useState } from "react";
import "./Navbar.css";
import ydrLogo from "../../assets/ydrLogo.jpg";
import profileIcon from "../../assets/profileIcon.png";
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import { Link } from "react-router-dom";
import LoginSignup from "../../pages/loginSignup/LoginSignup";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");

  return (
    <div className="navbar">
      <div className="navLogo">
        <Link to="/">
          <img className="logo" src={ydrLogo} alt="" />
        </Link>
      </div>
      <div className="navCenter">
        <ul className="navLinks">
          <Link to="/">
            <li
              onClick={() => setActiveNavLink("home")}
              className={activeNavLink === "home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => setActiveNavLink("ourJourney")}
            className={activeNavLink === "ourJourney" ? "active" : ""}
          >
            Our Journey
          </li>

          <Link to="/products">
            <a href="#products">
              <li
                onClick={() => setActiveNavLink("products")}
                className={activeNavLink === "products" ? "active" : ""}
              >
                Products
              </li>
            </a>
          </Link>
          
            <a href="#blogs">
              <li
                onClick={() => setActiveNavLink("team")}
                className={activeNavLink === "team" ? "active" : ""}
              >
                Blogs
              </li>
            </a>
          
        </ul>
      </div>
      <div className="navRight">
        <div className="loginSignup">
          <Link to="/loginSignup">
            <img
              onClick={() => {
                <LoginSignup />;
              }}
              src={loginIcon}
              alt=""
            />
          </Link>
        </div>
        <div className="profileIcon">
          <img src={profileIcon} alt="" />
        </div>
        <div className="cartIcon">
          <Link to="/cart">
            <img src={cartIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
