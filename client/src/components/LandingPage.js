import React from "react";
import { MDBView, MDBMask } from "mdbreact";
import LandingPageBtn from "./LandingPageBtn";

const LandingPage = () => {
  return (
    <div>
      <MDBView src="images/passion.jpg" id="landingPageImg">
        <MDBMask
          overlay="black-strong"
          className="align-content-center flex-column text-white text-center"
        >
          <div id="landingPagePad">
            <h2>Welcome to Assist</h2>
            <br />
            <h5>
              Connecting you with volunteer and community engagement
              opportunities
            </h5>
            <br />
            <LandingPageBtn />
          </div>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default LandingPage;
