import React from "react";
import CreateForm from "../components/CreateForm";
// import OpportunityBtn from "../components/OpportunityBtn";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Create = () => {
  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBRow center>
          <MDBCol md="6">
            <CreateForm />
            {/* <OpportunityBtn /> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Create;
