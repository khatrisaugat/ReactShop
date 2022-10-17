import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";
function Checkout({ items, itemsTotalPrice }) {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalContainer>TOTAL: ${itemsTotalPrice}</TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/34 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton price={itemsTotalPrice} />
    </CheckoutPageContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  itemsTotalPrice: selectCartItemTotal,
});
export default connect(mapStateToProps)(Checkout);
