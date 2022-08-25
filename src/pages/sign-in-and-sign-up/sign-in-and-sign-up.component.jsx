import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignIn } from "./../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.style.css";

function SignInSignUp() {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
