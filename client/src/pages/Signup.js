import React from "react";
import SignupForm from "../components/SignupForm";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SignupBtn from "../components/SignupBtn";

const Signup = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <SignupForm />
          <SignupBtn />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
