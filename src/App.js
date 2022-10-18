import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from "react";
import Checkout from "./pages/checkoutpage/checkout.component";
import {
  createUserProfileDocument,
  auth,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CategoryPreview from "./components/category-preview/category-preview.component";
// import { selectShopCollections } from "./redux/shop/shop.selectors";
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unSubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;

    // console.log(Object.values(collectionsArray));
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        createUserProfileDocument(user).then((snapShot) =>
          // this.setState({
          //   currentUser: { id: snapShot.id, ...snapShot.data() },
          // })
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        );
      } else {
        // this.setState({ currentUser: user });
        setCurrentUser(user);
        // addCollectionAndDocuments(
        //   "collections",
        //   Object.values(collectionsArray).map(({ title, items }) => ({
        //     title,
        //     items,
        //   }))
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop">
            <Route path="" element={<Shop />} />
            <Route path=":collectionId" element={<CategoryPreview />} />
          </Route>
          <Route
            path="/sign-in"
            element={currentUser ? <Navigate to="/" /> : <SignInSignUp />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopCollections,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
