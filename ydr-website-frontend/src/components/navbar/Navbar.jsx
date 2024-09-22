import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import ydrLogo from "../../assets/ydrLogo.jpg";
import profileIcon from "../../assets/profileIcon.png";
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import { Link, useNavigate } from "react-router-dom";
import LoginSignup from "../../pages/loginSignup/LoginSignup";
import { StoreContextApi } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [profile, setProfile] = useState(null);

  const { token, setToken, backendUrl, getUserProfile, getTotalCartAmount,loadCartData} =
    useContext(StoreContextApi);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setShowLogin(true);
    loadCartData(token)
  };

  useEffect(() => {
    //handling login state on page refresh

    const tokenInLocalStorage = localStorage.getItem('token')
    if (tokenInLocalStorage) {
      setToken(tokenInLocalStorage)
    }

    const getProfile = async () => {
      if (token) {
        const result = await getUserProfile(token);
        await setProfile(result);
      }  
     

    };

    getProfile();
  }, [token, getUserProfile]);

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
        {token != "" ? (
          <div className="profileAndLogout">
            <div className="profile">{profile ? `Welcome ${profile}` : "Loading..."}</div>
            <button className="logoutButton" onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <>
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
          </>
        )}

        <div className="cartIcon">
          <Link to="/cart">
            <img src={cartIcon} alt="" />
          </Link>
          <div className={getTotalCartAmount()> 0 ? "dot" : ""}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
