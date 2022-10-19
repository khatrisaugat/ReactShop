//imports
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
  convertedCollectionsData,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { updateCollections } from "./redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "./redux/shop/shop.selectors";
import CategoryPreview from "./components/category-preview/category-preview.component";
import { WithSpinner } from "./components/with-spinner/with-spinner.component";
//spinner for category preview
const CategoryPreviewWithSpinner = WithSpinner(CategoryPreview);
class App extends React.Component {
  //state
  state = {
    isLoading: true,
  };
  //unsubcribe declaration
  unSubscribeFromAuth = null;
  unSubcribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser, updateCollection } = this.props;
    //authentication listener
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        createUserProfileDocument(user).then((snapShot) =>
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        );
      } else {
        setCurrentUser(user);
      }
    });

    //collection listener
    this.unSubcribeFromSnapshot = convertedCollectionsData().then(
      (collections) => {
        updateCollection(collections);
        this.setState({ isLoading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser, collections } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop">
            <Route
              path=""
              element={<Shop collections={collections} isLoading={isLoading} />}
            />
            <Route
              path=":collectionId"
              element={<CategoryPreviewWithSpinner isLoading={isLoading} />}
            />
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
//mapStateToProps
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectShopCollections,
});
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateCollection: (collections) => dispatch(updateCollections(collections)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
