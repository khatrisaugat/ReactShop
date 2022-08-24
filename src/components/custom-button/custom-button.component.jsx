import React from "react";
import "./custom-button.style.css";

function CustomButton({ children, googleSignIn, ...otherProps }) {
  return (
    <button className={googleSignIn ? `google-sign-in` : null} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
