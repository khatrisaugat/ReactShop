import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./product-preview.style.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

function ProductPreview({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="product-preview">
      <div
        className="product-preview__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <CustomButton inverted onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      </div>
      <div className="product-preview__info">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPreview);
