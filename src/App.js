import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from "react";
import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        createUserProfileDocument(user).then((snapShot) =>
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          })
        );
      } else {
        this.setState({ currentUser: user });
      }
      // this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignInSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
