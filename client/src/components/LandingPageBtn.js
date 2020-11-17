import React from "react";
import { MDBBtn } from "mdbreact";

const LandingPageBtn = () => {
  return (
    <div>
      <MDBBtn className="rounded p-2" color="white" outline type="submit">
        Log In
      </MDBBtn>
      <span className="align-middle p-1">or</span>
      <MDBBtn className="rounded p-2" color="white" outline type="submit">
        Sign Up
      </MDBBtn>
    </div>
  );
};

export default LandingPageBtn;
