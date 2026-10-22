import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import { CartContext } from "../context/CartContext";

import "./Header.css";
import SearchBox from "../searchBox/SearchBox";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Categories", link: "/categoriesList" },
  { title: "Accessories", link: "/accessories" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];


function TopHeader() {
  const { cart, favorites } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // لو نزل أكتر من 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link className="logo" to="/">
          <h1 className="logoHeader">Nexora</h1>
        </Link>
        {/* **Links** */}
        <div className="nav-links">
          {navLinks.map((navLink) => (
            <li
              key={navLink.title}
              className={location.pathname === navLink.link ? "active" : ""}
            >
              <div style={{display: "flex", flexDirection: "column"}}>

              <Link to={navLink.link}>{navLink.title}</Link>
              <span className="borderA"></span>
              </div>
            </li>
          ))}
        </div>
        {/* menu */}
        <div className={`menuNav ${isOpen ? "open" : ''}`}>
          <>
            <IoCloseSharp
              className="menu-icon"
              onClick={() =>
                setIsOpen(prev => !prev)
              }
            />
            {navLinks.map((navLink) => (
              <li
                key={navLink.title}
                className={location.pathname === navLink.link ? "active" : ""}
                onClick={() => {
                setIsOpen(prev => !prev)
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
            </div>
          </>
        </div>
        {/* search */}
        <div>
          <SearchBox />
        </div>
        
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
            <IoIosMenu
              className="menu-icon"
              onClick={() =>
                document.querySelector(".menuNav").classList.toggle("open")
              }
            />
          </div>
        </div> 

      </div>
    </div>
  );
}

export default TopHeader;
