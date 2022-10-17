import React from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import "./cart-icon.style.css";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
}
const mapDispatchToProps = (Dispatch) => ({
  toggleCartHidden: () => Dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
