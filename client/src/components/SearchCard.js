import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdbreact";

const SearchCard = () => {
  return (
    <div>
      <MDBContainer>
        <MDBCard className="w-100 mb-4 m">
          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                <img
                  src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
                  width="215px"
                />
              </MDBCol>
              <MDBCol>
                <MDBCardTitle>Wash My Dog</MDBCardTitle>
                <MDBCardText>
                  I need someone to wash my dog, he is very smelly and I don't
                  wish to deal with it.
                </MDBCardText>
              </MDBCol>
              <MDBCol>
                <MDBCardTitle>Contact</MDBCardTitle>
                <MDBCardText>
                  John Smith <br></br>
                  (407) 555-5555 <br></br>
                  447 Gumdrop Pl. <br></br> Candyland, FL
                </MDBCardText>
              </MDBCol>
            </MDBRow>
            <MDBBtn
              color="deep-purple"
              outline
              type="submit"
              className="text-center mt-4 mb-1 pl-5 pr-5"
            >
              Save this opportunity
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default SearchCard;
