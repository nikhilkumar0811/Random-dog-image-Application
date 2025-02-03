// src/pages/Home.js
import React, { useState, useEffect, useContext } from "react";
import { DogContext } from "../context/DogContext";

const Home = () => {
  const [dogImage, setDogImage] = useState("");
  const [price, setPrice] = useState("");
  const { addToHistory, addToCart } = useContext(DogContext);

  // Fetch a random dog image and add it to history
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
      addToHistory(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  const handleAddToCart = () => {
    if (dogImage && price) {
      addToCart(dogImage, price);
      setPrice(""); // Clear input after adding
    }
  };

  return (
    <div height="100vh" width="100vh">
      <h1>Random Dog Image</h1>
      {dogImage && (
        <img
          src={dogImage}
          alt="Random Dog"
          style={{ maxWidth: "300px", display: "block", marginBottom: "10px" }}
        />
      )}
      <button onClick={fetchDogImage}>Fetch New Dog</button>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Home;
