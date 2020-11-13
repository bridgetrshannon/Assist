import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Search = () => {
  return (
    <div>
      <MDBRow center className="mt-5">
        <MDBCol md="3">
          <MDBInput
            hint="Search by Keyword"
            type="text"
            containerClass="mt-0"
          />
        </MDBCol>
        <MDBCol md="1">
          <select className="form-control pr-1">
            <option>State</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </MDBCol>
      </MDBRow>
      <MDBRow center className="mt-1">
        <MDBCol md="4">
          <div className="text-center mb-4">
            <MDBBtn color="deep-purple" outline type="submit">
              Create a new opportunity
            </MDBBtn>
          </div>
          <MDBCard>
            <MDBCardImage src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Click</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Search;
