import React from "react";
import "./Footer.css";
import ydrLogo from "../../assets/ydrlogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footer">
        <div className="footerLeft">
          <img src={ydrLogo} alt="" />
        </div>
        <div className="footerCenter">
          <h3>Links</h3>
          <Link to='/'>
          <p>Home</p>
          </Link>
          <p>Our Journey</p>
          <a href="#products">

          <p>Products</p>
          </a>
          <a href="#blogs">

          <p>Blogs</p>
          </a>
        </div>
        <div className="footerRight">
          <h3>Contact Us</h3>

          <div className="footerMobile">
            <p>9393939393, 8989898989</p>
          </div>
          <div className="footerInfo">
            <p className="footerFarmName">YDR Farms</p>
            <div className="footerAddress">
              <p>By: Someone Private Limited</p>
              <p>Sonipat, Haryana, 132101</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyRight">Copyright @ Satyawan</p>
    </div>
  );
};

export default Footer;
