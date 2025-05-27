import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PageTransition from "../../components/pageTransition";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus, FaHeart, FaShare } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import "./category.css";
import { Link } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();
  const Navigate = useNavigate();

  const [categoryProducts, setCategoryProducts] = useState([]);

  const { cart, addToCart } = useContext(CartContext);


  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(
      () => (
        <div className="toast">
          <img src={product.thumbnail} alt={product.title} />
          <div className="toast-content">
            <strong>{product.title}</strong>
            <p>price: ${product.price}</p>
            <button onClick={() => Navigate("../cart")}>View Cart</button>
          </div>
        </div>
      ),
      { duration: 5500 }
    );
  };
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryProducts(data.products);
      });
  }, [category]);
  return (
    <PageTransition key={category}>
      <div className="category-products">
        <div className="topSlide">
          <h2>{category}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            error suscipit aut dolorem laborum qui.
          </p>
        </div>
        <div className="productsCategoryPage">
          {categoryProducts.map((product) => {
            const isCartIn = cart.some((i) => i.id === product.id);

            return <Link to={`/products/${product.id}`} className="productsCP">
              <div
                className={`productCategoryPage ${isCartIn ? "in-cart" : ""}`}
              >
                <span className="done-in-cart">
                  <MdDone /> in Cart
                </span>
                <div className="img">
                  {/* <img src={data.images[2] || data.images[0]} alt={data.title} /> */}
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <p className="price">${product.price}</p>
                <div className="btns">
                  <button
                    className="btn"
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={isCartIn}
                  >
                    <FaCartPlus />
                  </button>
                  <button className="btn">
                    <FaHeart />
                  </button>
                  <button className="btn">
                    <FaShare />
                  </button>
                </div>
              </div>
            </Link>
          })}
        </div>
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
