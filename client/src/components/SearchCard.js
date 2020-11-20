import React, { useEffect, useState } from "react";
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
import API from "../utils/API";
import noMatch from "./noMatch/index";
import { List, ListItem } from "../components/List/index";

function Opportunity() {
  // Setting our component's initial state
  const [opportunity, setOpportunity] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all opportunities and store them with loadBooks
  useEffect(() => {
    loadAll();
  }, []);

  // Loads all opportunities and sets them to
  function loadAll() {
    API.getAllOpportunity()
      .then((res) => {
        setOpportunity(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {opportunity.length ? (
        <List>
          {opportunity.map((opportunity) => {
            return (
              <ListItem key={opportunity.ein}>
                <MDBContainer>
                  <MDBCard className="w-100 mb-4 m">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol>
                          <img
                            alt="searchImg"
                            src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
                            width="160px"
                          />
                        </MDBCol>
                        <MDBCol>
                          <MDBCardTitle>{opportunity.charityName}</MDBCardTitle>
                          <MDBCardText>
                            {opportunity.irsClassification.classification}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol>
                          <MDBCardTitle>Located at:</MDBCardTitle>
                          <MDBCardText>
                            {opportunity.mailingAddress.streetAddress1}{" "}
                            <br></br>
                            {opportunity.mailingAddress.city + ", "}
                            {opportunity.mailingAddress.stateOrProvince}
                            <br></br>
                            {opportunity.mailingAddress.postalCode}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol></MDBCol>
                        <MDBCol>
                          <MDBBtn
                            color="deep-purple"
                            outline
                            type="submit"
                            className="text-center mt-4 mb-1 pl-5 pr-5"
                          >
                            Save this opportunity
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <noMatch />
      )}
    </div>
  );
}

export default Opportunity;
