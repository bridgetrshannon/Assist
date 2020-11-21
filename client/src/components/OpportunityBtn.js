import React from "react";
import { MDBBtn } from "mdbreact";

const OpportunityBtn = (props) => {
  return (
    <div className="text-center mb-4">
      <MDBBtn color="deep-purple" outline type="submit">
        Create a new opportunity
      </MDBBtn>
    </div>
  );
};

export default OpportunityBtn;
