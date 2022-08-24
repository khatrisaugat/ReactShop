import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import "./sign-in.style.css";
import CustomButton from "./../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSignIn(this.state);
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          {/* <input type="submit" value="Submit Form" />
           */}
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn={true}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
