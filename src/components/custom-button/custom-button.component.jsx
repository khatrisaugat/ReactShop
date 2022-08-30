import React from "react";
import "./custom-button.style.css";

function CustomButton({ children, googleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={googleSignIn ? `google-sign-in` : inverted ? `inverted` : null}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
