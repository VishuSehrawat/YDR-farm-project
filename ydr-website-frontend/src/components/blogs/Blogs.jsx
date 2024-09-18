import React, { useContext, useState } from "react";
import "./Blogs.css";
import { StoreContextApi } from "../context/StoreContext";
import rightArrow from "../../assets/rightArrow.png";

const Blogs = () => {
  const [blogNumber, setBlogNumber] = useState(1);
  const { moringaBlogs } = useContext(StoreContextApi);

  const handlePrev = () => {
    console.log("inside handle prev");

    if (blogNumber <= 1) {
      setBlogNumber(moringaBlogs.length);
    } else {
      setBlogNumber((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    console.log("inside handle next");

    blogNumber === moringaBlogs.length
      ? setBlogNumber(1)
      : setBlogNumber((prev) => prev + 1);
  };

  return (
    <div id="blogs" className="moringaBlogs">
      <h1>Blogs</h1>
      <div className="allBlogs">
        <img
          className="leftArrow"
          onClick={() => {
            handlePrev();
          }}
          src={rightArrow}
          alt=""
        />

        {moringaBlogs.map((blog) => {
          const { id, title, description } = blog;

          if (id === blogNumber) {
            return (
              <div key={id} className="blogContent">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            );
          }
        })}

        <img
          className="rightArrow"
          onClick={() => {
            handleNext();
          }}
          src={rightArrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default Blogs;
