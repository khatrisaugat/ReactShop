import React from "react";
import "./cart-dropdown.style.css";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item.component";

function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem item={item} />
        ))}

        {items.length === 0 && (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = ({ cart: { items } }) => ({
  items,
});
export default connect(mapStateToProps)(CartDropdown);
