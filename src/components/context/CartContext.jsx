import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const favData = localStorage.getItem("favorites");
    return favData ? JSON.parse(favData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((i) => i.id !== id))
  }
  // Initialize cart state from localStorage or set to an empty array
  // This state will hold the cart items
  const [cart, setCarts] = useState(() => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  });

  // decreaseQuantity
  const decreaseQuantity = (id) => {
    setCarts((prev) => prev.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
  };
  // increaseQuantity
  const increaseQuantity = (id) => {
    setCarts((prev) => prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
  };
  // removeItem
  // This function removes an item from the cart
  const removeItem = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  }
  // addToCart
  // This function adds a product to the cart
  const addToCart = (product) => {
    setCarts((prev) => [...prev, { ...product, quantity: 1 }]);
  };
  // useEffect to save cart to localStorage
  // This effect runs whenever the cart changes and saves it to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeItem,
        addToFavorites,
        favorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
