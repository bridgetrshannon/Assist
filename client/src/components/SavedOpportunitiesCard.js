import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBIcon,
} from "mdbreact";

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
          <MDBBtn className="rounded p-2" color="danger" size="sm">
            <MDBIcon far icon="trash-alt" size="2x" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SavedOpportunitiesCard;
