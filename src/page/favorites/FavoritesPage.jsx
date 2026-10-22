import { useContext } from "react";
import PageTransition from "../../components/PageTransition";
import { CartContext } from "../../components/context/CartContext";

// import "../../components/slideProducts/slideProducts.css";
import { HiTrash } from "react-icons/hi2";

function FavoritesPage() {
  const { favorites, clearFavorites, removeFavItem } =
    useContext(CartContext);

  return (
    <PageTransition>
      <div className="cart">
        <div className="cart-container container">
          <h2>Favourit Items</h2>
          <div className="removeAll">
            <button onClick={clearFavorites}>Remove All</button>
          </div>
          <div className="cart-items">
            {favorites.length === 0 ? (
              <p className="emptyCart">No Items Added Yet!</p>
            ) : (
              favorites.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="img">
                    <img src={item.images[0]} key={index} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeFavItem(item.id);
                    }}
                  >
                    <HiTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default FavoritesPage;
