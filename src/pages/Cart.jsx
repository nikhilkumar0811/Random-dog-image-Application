// src/pages/Cart.js
import React, { useContext } from "react";
import { DogContext } from "../context/DogContext";

const Cart = () => {
  const { cart } = useContext(DogContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #eee",
                paddingBottom: "10px",
              }}
            >
              <img
                src={item.dogUrl}
                alt={`Dog ${index}`}
                style={{
                  maxWidth: "150px",
                  display: "block",
                  marginBottom: "5px",
                }}
              />
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
