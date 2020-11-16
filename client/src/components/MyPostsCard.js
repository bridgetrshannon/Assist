import React from "react";
import {
  MDBCardImage,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const MyPostsCard = () => {
  return (
    <div className="align-content-center">
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg"
        />
        <MDBCardBody>
          <MDBCardTitle>My Post</MDBCardTitle>
          <div className="d-flex justify-content-center">
          <EditBtn />
          <DeleteBtn />
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default MyPostsCard;
