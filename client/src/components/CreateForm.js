import React from "react";
import { MDBInput } from "mdbreact";
import StateDropdown from "../components/StateDropdown";

const CreateForm = () => {
  return (
    <div>
      <form>
        <p className="h4 text-center mb-4">Create an Opportunity</p>
        <MDBInput
          label="name"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterNameEx"
          className="grey-text"
        />
        <MDBInput
          label="organization"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterOrganizationEx"
          className="grey-text"
        />
        <MDBInput
          label="email"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterEmailEx"
          className="grey-text"
        />
        <MDBInput
          label="phone number"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterPhoneNumberEx"
          className="grey-text"
        />
        <MDBInput
          label="opportunity title"
          group
          type="text"
          validate
          error="wrong"
          success="right"
          htmlFor="defaultFormRegisterTitleEx"
          className="grey-text"
        />
        <StateDropdown />
        <MDBInput type="textarea" label="short description" rows="3" />

        <br />
        <br />
      </form>
    </div>
  );
};

export default CreateForm;
