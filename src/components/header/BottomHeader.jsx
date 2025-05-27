import React, { useEffect, useState } from "react";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Content", link: "/content" },
];

function BottomHeader() {
  const location = useLocation();
  
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location.pathname])

  return (
    <div className="bottom-header">
      <div className="container">
        <div className="nav">
          {/* ****************************** */}
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoIosMenu />
              <p>get gategory</p>
              <IoIosArrowDown />
            </div>

            <div
              className={`category-nav-list ${
                isCategoryOpen === true ? "active" : ""
              }`}
            >
              {categories.map((category) => (
                <Link to={`category/${category.slug}`} key={category.id}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          {/* ****************************** */}

          {/* ****************************** */}
          <div className="nav-links">
            {navLinks.map((navLink) => (
              <li
                className={location.pathname === navLink.link ? "active" : ""}
              >
                <Link to={navLink.link}>{navLink.title}</Link>
              </li>
            ))}
          </div>
          {/* ****************************** */}
        </div>

        <div className="sign-rigs-icon">
          <PiSignInBold />
          <FaUserPlus />
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
