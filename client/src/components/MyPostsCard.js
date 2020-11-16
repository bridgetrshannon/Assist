import React from "react";
import {
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

const MyPostsCard = () => {
  return (
    <div>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg"
        />
        <MDBCardBody>
          <MDBCardTitle>My Post</MDBCardTitle>
          <MDBBtn className="rounded p-2" color="success" size="sm">
            <MDBIcon far icon="edit" size="2x" />
          </MDBBtn>
          <MDBBtn className="rounded p-2" color="danger" size="sm">
            <MDBIcon far icon="trash-alt" size="2x" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default MyPostsCard;
