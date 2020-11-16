import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage } from "mdbreact";
import DeleteBtn from "./DeleteBtn";

const SavedOpportunitiesCard = () => {
  return (
    <div>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/45.jpg"
        />
        <MDBCardBody>
          <MDBCardTitle>Saved Opportunity</MDBCardTitle>
          <DeleteBtn />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SavedOpportunitiesCard;
