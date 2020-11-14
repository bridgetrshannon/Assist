import React from "react";
import { MDBInput } from "mdbreact";

const LoginForm = () => {
  return (
    <div className="mx-auto mt-5">
      <form>
        <p className="h4 text-center mb-4">Log in!</p>
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
      </form>
    </div>
  );
};

export default LoginForm;
