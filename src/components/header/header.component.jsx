import React from "react";
import { Link } from "react-router-dom";
// import "./header.style.css";
import { auth } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoText,
  NavLinksContainer,
  NavLink,
  DivLink,
} from "./header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <LogoText>Elegant Shop</LogoText>
        </Link>
      </div>
      <NavLinksContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        {currentUser == null ? (
          <NavLink to="/sign-in">Sign In</NavLink>
        ) : (
          <DivLink onClick={() => auth.signOut()}>Sign Out</DivLink>
        )}
        <CartIcon />
      </NavLinksContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
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
