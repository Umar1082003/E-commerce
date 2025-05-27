import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css"
import { CartContext } from "../context/CartContext";

function TopHeader() {
  const { cart } = useContext(CartContext)

  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <form action="" className="search-box">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="header-icons">
          <div className="icon">
            <CiHeart />
            <span className="count">0</span>
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
