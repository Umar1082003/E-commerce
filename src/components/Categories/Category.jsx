import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import TopSlide from "../slideProducts/TopSlide";
import { categoryIcons } from "./CategoryIcons";

import { FaBox, FaPlus } from "react-icons/fa";

import "./category.css";

function CategoryList() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  useEffect(() => {
    if (location.pathname === "/categoriesList") {
      setShowAll(true);
    }
  }, [location.pathname]);

  return (
    <div className="categories">
      <div className="container">
        <TopSlide title={"Categories"} />
        <div className="categorys-section">
          {visibleCategories.map((category) => (
            <Link to={`category/${category.slug}`} key={category.name}>
              <div className="category">
                {categoryIcons[category.slug] || <FaBox />}
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
          {/* {location.pathname === "categoriesList" && (
            <Link to={`category/${category.slug}`} key={category.name}>
              <div className="category">
                {categoryIcons[category.slug] || <FaBox />}
                <h3>{category.name}</h3>
              </div>
            </Link>
          )} */}
          {categories.length > 6 && (
            <div>
              <button
                className="show-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                <FaPlus />
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
