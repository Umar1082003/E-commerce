import React, { useContext } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CartContext } from "../../components/context/CartContext";

function ProductInfo({ product }) {
  const { cart, addToCart, favorites, removeFromFavorites, addToFavorites } = useContext(CartContext);

  const isCartIn = cart.some((i) => i.id === product.id);
  const isFavIn = favorites.some((i) => i.id === product.id);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(
      <div className="toast">
        <img src={product.thumbnail} />
        <div className="toast-content">
          <strong>{product.title}</strong>
          <p>price: ${product.price}</p>
          <button onClick={() => navigate("../cart")}>View Cart</button>
        </div>
      </div>,
      { duration: 5500 }
    );
  };

  const handleAddToFavorites = (e) => {
    if (isFavIn) {
      e.preventDefault();
      removeFromFavorites(product.id);
      toast.error(<p>removed from Favorites</p>, { duration: 3500 });
    } else {
      e.preventDefault();
      addToFavorites(product);
      toast.success(<p>Added To Favorites</p>, { duration: 3500 });
    }
  };
  return (
    <div className="product-info">
      <h2>{product.title}</h2>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>
      <p className="price">${product.price}</p>
      <p className="availability">
        availability: <span>{product.availabilityStatus}</span>
      </p>
      <p className="brand">
        brand: <span>{product.brand}</span>
      </p>
      <p className="description">{product.description}</p>
      <h3>
        {product.stock === 0 ? (
          <span className="out-of-stock">{`${product.stock} products we have`}</span>
        ) : (
          `harry up! only ${product.stock} products
        left in stock`
        )}
      </h3>
      <button
        className={`btn ${isCartIn ? "in-cart" : ""} ${
          product.stock === 0 ? "outOfStock" : ""
        }`}
        onClick={handleAddToCart}
      >
        {isCartIn ? "Item Already In Cart" : "Add To Card"}
        <FaCartPlus />
      </button>
      <FaHeart
        className={`heartIcon ${isFavIn ? "in-fav" : ""}`}
        onClick={(e) => handleAddToFavorites(e)}
      />
    </div>
  );
}

export default ProductInfo;
