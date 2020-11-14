import React from "react";
import { MDBBtn } from "mdbreact";

const LoginBtn = () => {
  return (
    <div>
      <div className="text-center mb-4">
        <MDBBtn color="deep-purple" outline type="submit">
          Log in
        </MDBBtn>
      </div>
    </div>
  );
};

export default LoginBtn;
