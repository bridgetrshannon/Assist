
import { MDBView, MDBMask, MDBBtn } from "mdbreact";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
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
              <div className="text-center mb-4">
              <Link to="/signup"><MDBBtn color="white" outline type="submit">
                  Explore your opportunities
                </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  };
}

export default LandingPage;
