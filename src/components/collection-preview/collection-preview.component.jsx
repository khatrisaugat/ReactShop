import React from "react";
import ProductPreview from "../product-preview/product-preview.component";
import "./collection-preview.css";
import { Link } from "react-router-dom";

function CollectionPreview({ title, items, noOfProducts, linkExists }) {
  return (
    <div className="collection">
      <div className="heading">
        <h1 className="title">{title.toUpperCase()}</h1>
        {linkExists && <Link to={`${title.toLowerCase()}`}>View More</Link>}
      </div>
      <div className="preview">
        {noOfProducts
          ? items
              .filter((item, index) => index < noOfProducts)
              .map((item) => <ProductPreview key={item.id} item={item} />)
          : items.map((item) => <ProductPreview key={item.id} item={item} />)}
      </div>
    </div>
  );
}
export default CollectionPreview;
