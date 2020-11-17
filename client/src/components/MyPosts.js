import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import MyPostsCard from "../components/MyPostsCard";

const MyPosts = () => {
  return (
    <div>
      <MDBContainer className="pt-5 pb-5">
        <h2>
          <strong>My Posts</strong>
        </h2>
        <br />
        <MDBRow>
          <MDBCol md="4">
            <MyPostsCard />
          </MDBCol>
          <MDBCol md="4">
            <MyPostsCard />
          </MDBCol>
          <MDBCol md="4">
            <MyPostsCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
    </div>
  );
};


export default MyPosts;

