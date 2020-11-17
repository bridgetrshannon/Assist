import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

const EditBtn = () => {
  return (
    <div>
      <MDBBtn className="rounded p-2" color="success" size="sm">
        <MDBIcon far icon="edit" size="2x" />
      </MDBBtn>
    </div>
  );
};

export default EditBtn;
