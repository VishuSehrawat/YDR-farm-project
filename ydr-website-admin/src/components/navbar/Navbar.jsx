import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import ydrLogo from "../../assets/ydrLogo.jpg";
import profileIcon from "../../assets/profileIcon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img className="logo" src={ydrLogo} alt="" />
        </Link>
      </div>
      <div className="navbarProfile">
        <img src={profileIcon} alt="" />
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
