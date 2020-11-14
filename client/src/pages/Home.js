import React from "react";
import { MDBView, MDBMask } from "mdbreact";

const Home = () => {
  return (
    <div>
      <MDBView
        src="images/colorHands.jpg"
        //   src="images/loveYourNeighbor.jpg"
        // src="images/passion.jpg"
        id="landingPageImg"
      >
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
            <p>
              Full page intro with background image will be always displayed in
              full screen mode, regardless of device
            </p>
          </div>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default Home;
