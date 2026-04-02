import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import { CartContext } from "../context/CartContext";

import "./Header.css";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Categories", link: "/categoriesList" },
  { title: "Accessories", link: "/accessories" },
  { title: "About", link: "/about" },
  { title: "Content", link: "/content" },
];


function TopHeader() {
  const { cart, favorites } = useContext(CartContext);
  
  useEffect(() => {
    const menuNav = document.querySelector(".menuNav");
    menuNav.classList.remove("open");
  }, [location.pathname]);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // لو نزل أكتر من 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link className="logo" to="/">
          <h1 className="logoHeader">E-Shop</h1>
        </Link>
        {/* **Links** */}
        <div className="nav-links">
          {navLinks.map((navLink) => (
            <li
              key={navLink.title}
              className={location.pathname === navLink.link ? "active" : ""}
            >
              <Link to={navLink.link}>{navLink.title}</Link>
            </li>
          ))}
        </div>
        {/* ///Links/// */}
        {/* menu */}
        <div className="menuNav">
          <>
            <IoCloseSharp
              className="menu-icon"
              onClick={() =>
                document.querySelector(".menuNav").classList.toggle("open")
              }
            />
            {navLinks.map((navLink) => (
              <li
                key={navLink.title}
                className={location.pathname === navLink.link ? "active" : ""}
                onClick={() => {
                  document.querySelector(".menuNav").classList.toggle("open");
                }}
              >
                <Link to={navLink.link}>{navLink.title}</Link>
              </li>
            ))}
            <div className="menuNav-icons">
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

              <div className="sign-rigs-icon">
                <PiSignInBold />
                <FaUserPlus />
              </div>
            </div>
          </>
        </div>
        {/* ///menu/// */}
        {/* **Icons** */}
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

          <div className="sign-rigs-icon">
            <PiSignInBold />
            <FaUserPlus />
            <IoIosMenu
              className="menu-icon"
              onClick={() =>
                document.querySelector(".menuNav").classList.toggle("open")
              }
            />
          </div>
        </div>
        {/* ///Icons/// */}
      </div>
    </div>
  );
}

export default TopHeader;
