import React from "react";
import "./Banner.css";
import {NavLink} from 'react-router-dom'

function Banner() {
  return (
    <div className="Banner">
      <div className="banner-container">
        <div className="banner-contents">
          <div className="right-section">
            <h2>Be exclusive, Be Devine, Be yourself.</h2>
            <NavLink to='products'><button>Shop Now</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
