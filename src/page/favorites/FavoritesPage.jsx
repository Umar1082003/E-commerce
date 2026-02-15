import React, { useContext } from "react";
import PageTransition from "../../components/pageTransition";
import {
  FaCartPlus,
  FaHeart,
  FaStar,
  FaStarHalfStroke,
} from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";

function FavoritesPage() {
  const { favorites, cart, addToCart, removeFromFavorites, addToFavorites } =
    useContext(CartContext);

  const Navigate = useNavigate();

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

  return (
    <PageTransition>
      <div className="category-products">
        <div className="topSlide">
          <h2>your favorites</h2>
        </div>
        <div className="productsCategoryPage">
          {favorites.map((product) => {
            const isCartIn = cart.some((i) => i.id === product.id);
            const isFavIn = favorites.some((i) => i.id === product.id);

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
              <Link to={`/products/${product.id}`} className="productsCP">
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
                    <button
                      className={`btn ${isFavIn ? "in-fav" : ""}`}
                      onClick={(e) => handleAddToFavorites(e)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

export default FavoritesPage;
