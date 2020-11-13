// import React from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBView,
//   MDBIcon,
// } from "mdbreact";

// const About = () => {
//   return (
//     <MDBRow className="mt-5 d-flex justify-content-center">
//       <MDBCol md="4">
//         <MDBCard wide cascade>
//           <MDBView cascade>
//             <MDBCardImage
//               hover
//               overlay="white-slight"
//               className="card-img-top"
//               src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
//               alt="Card cap"
//             />
//           </MDBView>

//           <MDBCardBody cascade className="text-center">
//             <MDBCardTitle className="card-title">
//               <strong>Alyssa De Metro</strong>
//             </MDBCardTitle>

//             <p className="font-weight-bold blue-text">
//               Fullstack Web Developer
//             </p>

//             <MDBCardText>
//               Sed ut perspiciatis unde omnis iste natus sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.{" "}
//             </MDBCardText>

//             <MDBCol md="12" className="d-flex justify-content-center">
//               <a href="!#" className="px-2 fa-lg li-ic">
//                 <MDBIcon fab icon="linkedin-in"></MDBIcon>
//               </a>
//               <a href="!#" className="px-2 fa-lg gi-ic">
//                 <MDBIcon fab icon="github"></MDBIcon>
//               </a>
//               <a href="#!" className="px-2 fa-lg email-ic">
//                 <MDBIcon icon="envelope"></MDBIcon>
//               </a>
//             </MDBCol>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol md="4">
//         <MDBCard wide cascade>
//           <MDBView cascade>
//             <MDBCardImage
//               hover
//               overlay="white-slight"
//               className="card-img-top"
//               src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
//               alt="Card cap"
//             />
//           </MDBView>

//           <MDBCardBody cascade className="text-center">
//             <MDBCardTitle className="card-title">
//               <strong>Bridget Shannon</strong>
//             </MDBCardTitle>

//             <p className="font-weight-bold blue-text">
//               Fullstack Web Developer
//             </p>

//             <MDBCardText>
//               Sed ut perspiciatis unde omnis iste natus sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.{" "}
//             </MDBCardText>

//             <MDBCol md="12" className="d-flex justify-content-center">
//               <a href="!#" className="px-2 fa-lg li-ic">
//                 <MDBIcon fab icon="linkedin-in"></MDBIcon>
//               </a>
//               <a href="!#" className="px-2 fa-lg gi-ic">
//                 <MDBIcon fab icon="github"></MDBIcon>
//               </a>
//               <a href="#!" className="px-2 fa-lg email-ic">
//                 <MDBIcon icon="envelope"></MDBIcon>
//               </a>
//             </MDBCol>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// };

// export default About;

import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const About = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Meet the Developers
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
              className="rounded-circle z-depth-1 img-fluid"
              alt="Sample avatar"
            ></img>
            <h5 className="font-weight-bold mt-4 mb-3">Alyssa DeMetro</h5>
            <p className="text-uppercase blue-text">Fullstack Web Developer</p>
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
            <p className="text-uppercase blue-text">Fullstack Web Developer</p>
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
  );
};

export default About;
