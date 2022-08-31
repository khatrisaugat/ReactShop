import React from "react";
import "./checkout.style.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selectors";
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
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  itemsTotalPrice: selectCartItemTotal,
});
export default connect(mapStateToProps)(Checkout);
