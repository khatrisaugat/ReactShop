import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";
function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          ${price} x {quantity}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
