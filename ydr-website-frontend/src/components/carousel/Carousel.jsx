import React from "react";
import "./Carousel.css";
import banner from "../../assets/banner.jpg";

const Carousel = () => {
  return (
    <div className="carouselMain">
     
        <div className="carousel1">
          <img src={banner} alt="" />
        </div>
        <div className="carousel2">
          <img src={banner} alt="" />
        </div>
        <div className="carousel3">
          <img src={banner} alt="" />
        </div>
        <div className="carouselText">
          <p>
            Providing You the Finest <span>MORINGA</span>
          </p>
        </div>
       
    </div>
  );
};

export default Carousel;
