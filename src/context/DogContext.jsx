// src/context/DogContext.js
import React, { createContext, useState } from "react";

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [cart, setCart] = useState([]);

  const addToHistory = (dogUrl) => {
    setHistory((prevHistory) => [...prevHistory, dogUrl]);
  };

  const addToCart = (dogUrl, price) => {
    setCart((prevCart) => [...prevCart, { dogUrl, price: parseFloat(price) }]);
  };

  return (
    <DogContext.Provider value={{ history, cart, addToHistory, addToCart }}>
      {children}
    </DogContext.Provider>
  );
};
