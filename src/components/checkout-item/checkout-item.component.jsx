import React from "react";
import "./checkout-item.style.css";

function CheckoutItem({ item: { imageUrl, name, quantity, price } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => {}}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => {}}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => {}}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
