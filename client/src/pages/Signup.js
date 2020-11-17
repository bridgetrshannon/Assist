import React from "react";
import SignupForm from "../components/SignupForm";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Signup = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <SignupForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
