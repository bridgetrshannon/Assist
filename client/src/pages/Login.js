import React from "react";
import LoginForm from "../components/LoginForm";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


const Login = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <LoginForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
