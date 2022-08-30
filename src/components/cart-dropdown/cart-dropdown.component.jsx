import React from "react";
import "./cart-dropdown.style.css";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

function CartDropdown({ toggleCartHidden }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <span className="empty-message">Your cart is empty</span>
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapDispatchToProps = (Dispatch) => ({
  toggleCartHidden: () => Dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
