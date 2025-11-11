import React from "react";
import "./Pizza.css";

function Pizza({ name, description, image, price }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-image" />
      <div className="pizza-content">
        <div className="pizza-header">
          <h2 className="pizza-name">{name}</h2>
          <span className="pizza-price">{price}</span>
        </div>
        <p className="pizza-description">{description}</p>
      </div>
    </div>
  );
}

export default Pizza;
