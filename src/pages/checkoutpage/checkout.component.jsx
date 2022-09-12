import React from "react";
import "./checkout.style.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
function Checkout({ items, itemsTotalPrice }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL: ${itemsTotalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/34 - CVV: 123
      </div>
      <StripeCheckoutButton price={itemsTotalPrice} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  itemsTotalPrice: selectCartItemTotal,
});
export default connect(mapStateToProps)(Checkout);
