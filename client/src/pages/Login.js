import React from "react";
import LoginForm from "../components/LoginForm";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import LoginBtn from "../components/LoginBtn";

const Login = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <LoginForm />
          <LoginBtn />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
