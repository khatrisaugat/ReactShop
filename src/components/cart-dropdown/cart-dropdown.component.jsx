import React from "react";
import "./cart-dropdown.style.css";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

function CartDropdown({ items, dispatch }) {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}

        {items.length === 0 && (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
