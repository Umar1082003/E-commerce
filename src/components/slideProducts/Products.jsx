import React, { useContext } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";


function Products({ data }) {
  const { cart, addToCart, favorites, addToFavorites, removeFromFavorites } = useContext(CartContext);

  const isCartIn = cart.some((i) => i.id === data.id);
  const isFavIn = favorites.some((i) => i.id === data.id);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(data);
    toast.success(
      <div className="toast">
        <img src={data.thumbnail} />
        <div className="toast-content">
          <strong>{data.title}</strong>
          <p>price: ${data.price}</p>
          <button onClick={() => navigate("../cart")}>View Cart</button>
        </div>
      </div>,
      { duration: 5500 }
    );
  };

  const handleAddToFavorites = (e) => {
    if (isFavIn) {
      e.preventDefault();
      removeFromFavorites(data.id);
      toast.error(<p>removed from Favorites</p>, { duration: 3500 });
    }else{
      e.preventDefault();
      addToFavorites(data);
      toast.success(<p>Added To Favorites</p>, { duration: 3500 });
    }
  };

  return (
    <div className="product-container">
      <Link to={`/products/${data.id}`} className="products">
        <div className={`product ${isCartIn ? "in-cart" : ""}`}>
          <span className="done-in-cart">
            <MdDone /> in Cart
          </span>
          <div className="img">
            {/* <img src={data.images[2] || data.images[0]} alt={data.title} /> */}
            <img src={data.thumbnail} alt={data.title} />
          </div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <p className="price">${data.price}</p>
          <div className="btns">
            <button
              className="btn"
              onClick={(e) => handleAddToCart(e)}
              disabled={isCartIn}
            >
              <FaCartPlus />
            </button>
            <button
              className={`btn ${isFavIn ? "in-fav" : ""}`}
              onClick={(e) => handleAddToFavorites(e)}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Products;
