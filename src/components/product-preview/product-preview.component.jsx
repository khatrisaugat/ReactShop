import React from "react";
import CustomButton from "../custom-button/custom-button.component";
// import "./product-preview.style.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  ProductPreviewContainer,
  ProductImageContainer,
  ProductInfoContainer,
} from "./product-preview.styles";

function ProductPreview({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <ProductPreviewContainer>
      <ProductImageContainer imageUrl={imageUrl}>
        <CustomButton inverted onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      </ProductImageContainer>
      <ProductInfoContainer>
        <p>{name}</p>
        <p>${price}</p>
      </ProductInfoContainer>
    </ProductPreviewContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPreview);
