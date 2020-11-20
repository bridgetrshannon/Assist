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
      <MDBCard
        className="my-5 mx-5 px-5 pb-5 text-center"
        // style={{ backgroundColor: "transparent" }}
      >
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Developers
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              ></img>
              <h5 className="font-weight-bold mt-4 mb-3">Alyssa DeMetro</h5>
              <p className="text-uppercase blue-text">
                Fullstack Web Developer
              </p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
                <a href="!#" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              ></img>
              <h5 className="font-weight-bold mt-4 mb-3">Bridget Shannon</h5>
              <p className="text-uppercase blue-text">
                Fullstack Web Developer
              </p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
                <a href="!#" className="p-2 fa-lg li-ic">
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
