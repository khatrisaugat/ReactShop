import React from "react";
import "./cart-item.style.css";
function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${price} x {quantity}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
