import React from "react";
import { MDBBtn } from "mdbreact";

const SearchBtn = () => {
  return (
    <div className="text-center mb-4">
      <MDBBtn color="deep-purple" outline type="submit">
        Find an opportunity
      </MDBBtn>
    </div>
  );
};

export default SearchBtn;
