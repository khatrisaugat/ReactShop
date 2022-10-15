import React from "react";
// import "./custom-button.style.css";
import { Button } from "./custom-button.styles";

function CustomButton({ children, ...otherProps }) {
  return <Button {...otherProps}>{children}</Button>;
}

export default CustomButton;
