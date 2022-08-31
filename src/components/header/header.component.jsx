import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
import { auth } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <div className="nav-brand">
        <Link to="/">
          <h1 className="logo-text">Elegant Shop</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/shop">
          Shop
        </Link>
        {currentUser == null ? (
          <Link className="links" to="/sign-in">
            Sign In
          </Link>
        ) : (
          <div className="links" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}
//method without createStructuredSelector
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });
//method with createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
