// src/pages/History.js
import React, { useContext } from "react";
import { DogContext } from "../context/DogContext";

const History = () => {
  const { history } = useContext(DogContext);

  return (
    <div>
      <h1>History</h1>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {history.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Dog ${index}`}
              style={{ maxWidth: "150px", border: "1px solid #ccc" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
