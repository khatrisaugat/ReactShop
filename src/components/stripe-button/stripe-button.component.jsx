import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LhANgDJHtMMwsyEBAfkYp65PpgQVc5qpmv2CB8akoPPIDhI9YOIAhC0Sm0vtY0qVv7BYmzhYPQZEqQYXdIrb6PN00XX85m9Iz";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Elegant Shop"
      billingAddress
      shippingAddress
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
