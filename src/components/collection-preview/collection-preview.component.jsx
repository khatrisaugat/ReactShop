import React from "react";
import ProductPreview from "../product-preview/product-preview.component";
import "./collection-preview.css";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ProductPreview key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
