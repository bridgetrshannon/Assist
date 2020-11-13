import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";

const SignupForm = () => {
  return (
    <div className="mx-auto mt-5">
      <form>
        <p className="h4 text-center mb-4">Sign up!</p>
        <MDBInput
          label="email"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterEmailEx"
          className="grey-text"
        />

        <MDBInput
          label="password"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterPasswordEx"
          className="grey-text"
        />
        <br />
        <div className="text-center mt-4">
          <MDBBtn className="btn btn-elegant" type="submit">
            Sign Up
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
