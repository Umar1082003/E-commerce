import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


import TopSlide from "../slideProducts/TopSlide";
import LoadingCategoryList from "../loadingPage/Category";
import { categoryIcons } from "./CategoryIcons"; 

import { FaBox, FaPlus } from "react-icons/fa";

import "./category.css";

function CategoryList() {
  const location = useLocation();

  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => {
      if(!res.ok){
        throw new Error("Failed to fetch categories")
      }
      return res.json()
    })
      .then((data) => setCategories(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);


  useEffect(() => {
    if (location.pathname === "/categoriesList") {
      setShowAll(true);
    }
  }, [location.pathname]);

  return (
    <div className="categories">
      <div className="container">
        <TopSlide title="Categories" />

        <div className="categorys-section">

          {loading ? <LoadingCategoryList /> : visibleCategories.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.name}>
              <div className="category">
                {categoryIcons[category.slug] || <FaBox />}
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
          {visibleCategories.length === 6 && (
              <button
                className="show-more-btn"
                onClick={() => setShowAll(true)}
              >
                <FaPlus />
                Show More
              </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
