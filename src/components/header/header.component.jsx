import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

function Header() {
  return (
    <div className="header">
      <div className="nav-brand">
        <Link to="/">
          <h1 className="logo-text">Elegant Shop</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </div>
  );
}

export default Header;
