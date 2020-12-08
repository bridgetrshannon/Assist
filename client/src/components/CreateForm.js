import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBCard,
  MDBContainer,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
} from "mdbreact";
import { List, ListItem } from "../components/List/index";
import StateDropdown from "../components/StateDropdown";
import OpportunityBtn from "../components/OpportunityBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";

function CreateForm(props) {
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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

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
      <form onSubmit={handleFormSubmit}>
        <p className="h4 text-center mb-4">Create an Opportunity</p>
        <br />
        <MDBInput
          value={props.name}
          onChange={handleInputChange}
          label="name"
          name="name"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterNameEx"
          className="grey-text"
        />
        <MDBInput
          value={props.organization}
          onChange={handleInputChange}
          label="organization"
          group
          name="organization"
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterOrganizationEx"
          className="grey-text"
        />
        <MDBInput
          value={props.email}
          onChange={handleInputChange}
          label="email"
          name="email"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterEmailEx"
          className="grey-text"
        />
        <MDBInput
          value={props.phoneNumber}
          onChange={handleInputChange}
          label="phone number"
          name="phoneNumber"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterPhoneNumberEx"
          className="grey-text"
        />
        <MDBInput
          value={props.title}
          onChange={handleInputChange}
          label="opportunity title"
          name="title"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterTitleEx"
          className="grey-text"
        />
        <br />
        <StateDropdown name="state" />
        <br />
        <MDBInput
          value={props.textarea}
          onChange={handleInputChange}
          type="textarea"
          name="textarea"
          label="short description"
          rows="3"
        />
        <OpportunityBtn onClick={handleFormSubmit} />

        <br />
        <br />
      </form>
      {opportunity.length ? (
        <List>
          {opportunity.map((opportunity) => {
            return (
              <ListItem key={opportunity.ein}>
                <Link
                  to={
                    "https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=" +
                    opportunity.ein
                  }
                >
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
                            <MDBCardTitle>
                              {opportunity.charityName}
                            </MDBCardTitle>
                            <MDBCardText>
                              {opportunity.irsClassification.classification}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBContainer>
                </Link>
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

export default CreateForm;
