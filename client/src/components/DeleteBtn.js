import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

const DeleteBtn = () => {
  return (
    <div>
      <MDBBtn className="rounded p-2" color="danger" size="sm">
        <MDBIcon far icon="trash-alt" size="2x" />
      </MDBBtn>
    </div>
  );
};

export default DeleteBtn;