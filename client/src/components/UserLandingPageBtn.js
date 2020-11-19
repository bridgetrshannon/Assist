import React from "react";
import { MDBBtn } from "mdbreact";

const LandingPageBtn = () => {
  return (
    <div>
      <MDBBtn
        className="rounded p-2"
        color="white"
        outline
        type="submit"
        href="/search"
      >
        Begin Search
      </MDBBtn>
    </div>
  );
};

export default LandingPageBtn;
