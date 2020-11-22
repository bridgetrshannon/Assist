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
import NoMatch from "./noMatch";
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
  // Add to profile to delete posts or saved opportunities
  // function deleteOpportunity(id) {
  //   API.deleteOpportunity(id)
  //     .then((res) => loadAll())
  //     .catch((err) => console.log(err));
  // }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  function handleFormSubmit(event) {
    console.log("data", formObject);
    event.preventDefault();
    if (formObject.name && formObject.organization) {
      API.saveOpportunity({
        name: formObject.name,
        organization: formObject.organization,
        email: formObject.email,
        phoneNumber: parseInt(formObject.phoneNumber),
        title: formObject.title,
        textarea: formObject.textarea,
      })
        .then((res) => loadAll())
        .catch((err) => console.log(err));
    }
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
                            src="https://i.imgur.com/m6LLxbr.jpg"
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
                            onClick={handleFormSubmit}
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
