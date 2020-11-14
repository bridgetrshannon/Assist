import React from "react";
import { MDBBtn } from "mdbreact";

const SignupBtn = () => {
  return (
    <div>
      <div className="text-center mb-4">
        <MDBBtn color="deep-purple" outline type="submit">
          Sign up
        </MDBBtn>
      </div>
    </div>
  );
};

export default SignupBtn;
