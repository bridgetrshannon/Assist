
import { MDBView, MDBMask } from "mdbreact";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import LandingPageBtn from "./LandingPageBtn";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <MDBView
          src="images/passion.jpg"
          id="landingPageImg"
          className="img-fluid"
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
              <p>To start exploring your opportunities</p>

             
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  };
}


export default LandingPage;
