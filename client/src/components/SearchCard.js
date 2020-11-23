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
  MDBInput
} from "mdbreact";
import API from "../utils/API";
import NoMatch from "./noMatch";
import { List, ListItem } from "../components/List/index";



function Opportunity() {
  // Setting our component's initial state
  const [opportunity, setOpportunity] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all opportunities and store them with loadAll
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
  };

  //create the element within the return
  //create an onChange event that captures the chosen value, and passes it into/triggers a function
 
  
    function handleChange(event) {
     let capturedState = event.target.value
      API.getStateOpportunity(capturedState)
      .then((res) => {
        setOpportunity(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
    }
  //create a function similar to loadAll() that does an API call and updates the state using setOppourtunity 

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
      <MDBRow center className="mt-5">
        <MDBCol md="3">
        <MDBInput
        label="search by keyword"
        group
        type="text"
        validate
        error="wrong"
        success="right"
        htmlFor="defaultFormRegisterSearchEx"
        className="grey-text"
        containerClass="mt-0"
      />
        </MDBCol>
        <MDBCol md="2" className="pr-2">
        <select className="form-control grey-text" onChange={handleChange}>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="DC">District Of Columbia</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
          </select>
        </MDBCol>
      </MDBRow>
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
                            src="https://i.imgur.com/46ftrUw.jpg"
                            width="180px"
                          />
                        </MDBCol>
                        <MDBCol>
                          <MDBCardTitle>{opportunity.charityName}</MDBCardTitle>
                          {/* <MDBCardText>
                            {opportunity.irsClassification.classification}
                          </MDBCardText> */}
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
                          <MDBBtn
                            color="deep-purple"
                            outline
                            type="submit"
                            className="text-center mt-4 mb-1 pl-5 pr-5"
                            onClick={handleFormSubmit}
                          >
                            SAVE
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol></MDBCol>
                        <MDBCol>
                        </MDBCol>
                        <MDBCol></MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <NoMatch />
      )}
    </div>
  );
}

export default Opportunity;
