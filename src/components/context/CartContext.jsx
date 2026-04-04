import { createContext, useState } from "react";

const CartContext = createContext();

export { CartContext };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };


  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};