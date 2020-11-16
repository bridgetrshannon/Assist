import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SavedOpportunitiesCard from "./SavedOpportunitiesCard";

const SavedOpportunities = () => {
  return (
    <div>
      <MDBContainer className="pt-5">
        <h2>
          <strong>Saved Opportunities</strong>
        </h2>
        <br />
        <MDBRow>
          <MDBCol md="4">
            <SavedOpportunitiesCard />
          </MDBCol>
          <MDBCol md="4">
            <SavedOpportunitiesCard />
          </MDBCol>
          <MDBCol md="4">
            <SavedOpportunitiesCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SavedOpportunities;
