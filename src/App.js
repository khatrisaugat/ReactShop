import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from "react";
import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/sign-in"
            element={currentUser ? <Navigate to="/" /> : <SignInSignUp />}
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
