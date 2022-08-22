import React from "react";
import "./product-preview.style.css";

function ProductPreview({ name, imageUrl, price }) {
  return (
    <div className="product-preview">
      <div
        className="product-preview__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <button>Add to cart</button>
      </div>
      <div className="product-preview__info">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ProductPreview;
