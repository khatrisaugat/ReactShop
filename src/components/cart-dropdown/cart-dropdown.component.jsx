import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

function CartDropdown({ items, dispatch }) {
  const navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}

        {items.length === 0 && (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      {items.length != 0 && (
        <CustomButton
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      )}
    </CartDropdownContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
