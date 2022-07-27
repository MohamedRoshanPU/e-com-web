import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext/ContextApi";
import "./Header.css";
import Menu from "./Menu.svg";
import { Link } from "react-router-dom";

function Header() {
  const { cart, toggleCart } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(false);
  const {filterProducts,data,setFilterData} = useContext(GlobalContext)

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Header">
      <div className="header-container">
        <div className="header-contents">
          <Link to="/" className="navlink">
            <div className="logo">
              <img
                src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png"
                alt="logo"
              />
            </div>
          </Link>

          <div className={isActive ? "active" : "links"}>
            <Link to="products" className="navlink">
              <li className="link" onClick={()=>{setFilterData(data)}}>Products</li>
            </Link>
            <Link to="products" className="navlink">
              <li className="link" onClick={() => {
                  filterProducts("women's clothing");
                }}>Shop for women</li>
            </Link>

            <Link to="products" className="navlink">
              <li className="link" onClick={() => {
                  filterProducts("men's clothing");
                }}>Shop for men</li>
            </Link>

            <button className="btn" onClick={toggleCart}>
              My Cart ({cart.length})
            </button>
          </div>

          <div className="menu" onClick={toggleNav}>
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
