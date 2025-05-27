import React, { useContext } from "react";
import { HiTrash } from "react-icons/hi2";
import "./cart.css";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/pageTransition";


function Cart() {
  const { cart, decreaseQuantity, increaseQuantity, removeItem } = useContext(CartContext);
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity , 0).toFixed(2);

  return (
    <PageTransition>
      <div className="cart">
        <div className="cart-container container">
          <h2>Order Summury</h2>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="emptyCart">Your Shopping Cart Is Empty!</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item">
                  <div className="img">
                    <img src={item.images[0]} key={index} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="quantity-controls">
                      <button
                        className="decrease"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="increase"
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    <HiTrash />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="total-summary">
            <h3>
              Total: <span>${total}</span>
            </h3>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
