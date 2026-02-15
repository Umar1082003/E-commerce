import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../img/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css"
import { CartContext } from "../context/CartContext";
import SearchBox from "../SearchBox";

function TopHeader() {
  const { cart, favorites } = useContext(CartContext);

  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          {/* <img src={Logo} alt="logo" /> */}
          <h1 className="logoHeader">E-Shop</h1>
        </Link>

        <SearchBox />

        <div className="header-icons">
          <div className="icon">
            <Link to="/favorites">
              <CiHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/cart">
              <FaCartShopping />
              <span className="count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
