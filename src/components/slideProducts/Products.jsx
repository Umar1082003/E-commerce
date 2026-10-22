import { useContext, useRef, useState } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

function Products({ data }) {
  const { cart, addToCart, favorites, addToFavorites, removeFromFavorites } =
    useContext(CartContext);

  const [indexOfImg, setIndexOfImg] = useState(0);
  const intervalRef = useRef(null);

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
      { duration: 5500 },
    );
  };

  const handleAddToFavorites = (e) => {
    if (isFavIn) {
      e.preventDefault();
      removeFromFavorites(data.id);
      toast.error(<p>removed from Favorites</p>, { duration: 3500 });
    } else {
      e.preventDefault();
      addToFavorites(data);
      toast.success(<p>Added To Favorites</p>, { duration: 3500 });
    }
  };
  // console.log(data);

  const images = data.images || [];
  const image = images[indexOfImg] || data.thumbnail;

  function handleMouseEnter() {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndexOfImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
  }

  function handleMouseLeave() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIndexOfImg(0);
  }

  // const image = isHovered && images.length > 1 ? images[1] : isHovered && images.length > 2 ? images[2] : images[0];

  return (
    <div className="product-container">
      <div className="products">
        <div className={`product ${isCartIn ? "in-cart" : ""}`}>
          {/* ********* */}
          <Link to={`/products/${data.id}`}>
            <span className="done-in-cart">
              <MdDone /> in Cart
            </span>
            <div
              className="img"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image} alt={data.title} loading="lazy" />
            </div>
          </Link>
          <div className="content">
            <h3>{data.title}</h3>
            <p className="price">${data.price}</p>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <div className="btns">
              <button
                className="btn cartBtn"
                onClick={(e) => handleAddToCart(e)}
                disabled={isCartIn}
              >
                <FaCartPlus />
              </button>
              <button
                className={`btn favBtn ${isFavIn ? "in-fav" : ""}`}
                onClick={(e) => handleAddToFavorites(e)}
              >
                {isFavIn ? <FaHeart /> : <CiHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
