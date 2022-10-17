import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameContainer,
  QuantityContainer,
  ArrowContainer,
  ValueContainer,
  PriceContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

function CheckoutItem({
  item,
  clearItemFromCart,
  addItem,
  removeItemFromCart,
}) {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer
          className="arrow"
          onClick={() => removeItemFromCart(item)}
        >
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(item)}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}
const mapDispatchtoProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchtoProps)(CheckoutItem);
