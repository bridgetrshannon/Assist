import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBView,
} from "mdbreact";

const ImageCard = () => {
  return (
    <MDBView>
      <MDBCard className="my-5 mx-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Developers
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Bridget and Alyssa are both students at the UCF full-stack coding
            bootcamp, this is an application built in React for the Project 3
            assignment.
          </p>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://i.imgur.com/DjvIMLN.jpg"
                className="rounded-circle z-depth-1 img-fluid aboutUsPic"
                alt="Sample avatar"
              ></img>
              <h5 className="font-weight-bold mt-4 mb-3">Alyssa DeMetro</h5>
              <p className="text-uppercase blue-text">
                Fullstack Web Developer
              </p>
              <p className="grey-text">
                Alyssa De Metro is an Orlando native passionate about web
                development and continuing her education. In her free time she
                loves reading, writing, and playing with her black fur child
                named Kitty.
              </p>
              <ul className="list-unstyled mb-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/leanndemetro"
                  className="p-2 fa-lg"
                >
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="!#"
                  className="p-2 fa-lg li-ic"
                >
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 center">
              <img
                src="images/bridgetshannon.jpg"
                className="rounded-circle z-depth-1 img-fluid aboutUsPic "
                alt="bridget shannon"
              ></img>
              <h5 className="font-weight-bold mt-4 mb-3">Bridget Shannon</h5>
              <p className="text-uppercase blue-text">
                Fullstack Web Developer
              </p>
              <p className="grey-text">
                Bridget Shannon is leveraging a music education background to
                build a more inviting and accessible user experience. They enjoy
                playing and performing music and adventuring with their dog,
                cat, and fiance.
              </p>
              <ul className="list-unstyled mb-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/bridgetrshannon"
                  className="p-2 fa-lg"
                >
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/bridget-shannon/"
                  className="p-2 fa-lg li-ic"
                >
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBView>
  );
};

export default ImageCard;
