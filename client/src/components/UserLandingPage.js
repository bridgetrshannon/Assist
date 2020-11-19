import { MDBView, MDBMask } from "mdbreact";
import React, { Component } from "react";
import UserLandingPageBtn from "./UserLandingPageBtn";

class UserLandingPage extends Component {
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
              <h2>Welcome to Assist, ( email@email.com )</h2>
              <br />
              <p>Start exploring your opportunities</p>
            </div>
            <UserLandingPageBtn />
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default UserLandingPage;
