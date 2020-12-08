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
  MDBInput,
} from "mdbreact";
import API from "../../utils/API";
import { List, ListItem } from "../List/index";
import "./style.css";

function Opportunity() {
  // Setting our component's initial state
  const [opportunity, setOpportunity] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [category, setCategory] = React.useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

   // function that will show the anime / manga that you searched and set the state
   function getInfo(search, category) {
    API.getBothOpportunity(search, category)
      .then((res) => setOpportunity(res.data))
      .catch((err) => console.log(err));
  }
  // changes search from id="search" on change and sets the state of it to the current search
  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  // handles the submit to use the API call dependant on search term and type of anime/manga in category.
  //passing type through Search component from state
  function handleFormSubmit(event, category) {
    event.preventDefault();
    getInfo(search, category);
  }

//get keyword value and pass it into a function 
//that takes in keyword and selected state values
//and passes them into an API call then updates the state
//so that the results are rendered onto the page

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
  }

  //create the element within the return
  //create an onChange event that captures the chosen value, and passes it into/triggers a function

  //takes in user's selected state and updates the opportunity state using the setOpportunity method
  // function handleStateChange(event) {
  //   let capturedState = event.target.value;
  //   API.getStateOpportunity(capturedState)
  //     .then((res) => {
  //       setOpportunity(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleKeyword(event) {
  //   let capturedKeyword = event.target.value;
  //   API.getKeywordOpportunity(capturedKeyword)
  //     .then((res) => {
  //       setOpportunity(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleBoth(event) {
  //   let capturedBoth = event.target.value;
  //   API.getBothOpportunity(capturedBoth)
  //     .then((res) => {
  //       setOpportunity(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }
  //create a function similar to loadAll() that does an API call and updates the state using setOpportunity

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
      <form>
      <MDBRow center className="mt-5">
        <MDBCol md="3" className="pr-2">
          <select value={category} className="form-control grey-text" onChange={handleChange}>
            <option value="" selected>
              Select Your State
            </option>
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
        <MDBCol md="3">
          <MDBInput
            label="search by keyword"
            group
            type="text"
            name="search"
            validate
            error="wrong"
            success="right"
            htmlFor="defaultFormRegisterSearchEx"
            className="grey-text"
            containerClass="mt-0"
            onChange={handleInputChange}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="5"></MDBCol>
        <MDBCol md="1">
          <MDBBtn
            disableElevation
            color="deep-purple"
            outline
            type="submit"
            className="text-center mt-4 mb-1 pl-5 pr-5"
            onClick={(e) => {handleFormSubmit(e, category)}}
          >
            <i class="fas fa-search"></i>
          </MDBBtn>
        </MDBCol>
        <MDBCol md="5"></MDBCol>
      </MDBRow>
      </form>
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
                            src="https://i.imgur.com/dB5BbyF.jpg"
                            width="160px"
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
                        <MDBCol></MDBCol>
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
        <div class="searchSpinner spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Opportunity;
