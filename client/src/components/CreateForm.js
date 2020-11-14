import React from "react";

const CreateForm = () => {
  return (
    <div>
      <form>
        <p className="h4 text-center mb-4">Create an Opportunity</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Name
        </label>
        <input
          type="text"
          id="defaultFormContactNameEx"
          className="form-control"
        />
        <br />

        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Email
        </label>
        <input
          type="email"
          id="defaultFormContactEmailEx"
          className="form-control"
        />
        <br />

        <label htmlFor="defaultFormContactPhoneNumberEx" className="grey-text">
          Phone Number
        </label>
        <input
          type="number"
          id="defaultFormContactPhoneNumberEx"
          className="form-control"
        />
        <br />

        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Opportunity Title
        </label>
        <input
          type="text"
          id="defaultFormContactSubjectEx"
          className="form-control"
        />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          State
        </label>
        <select
          className="browser-default custom-select"
          className="form-control"
        >
          <option></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Short Description
        </label>
        <textarea
          type="text"
          id="defaultFormContactMessageEx"
          className="form-control"
          rows="3"
        />
        <br />
        <br />
      </form>
    </div>
  );
};

export default CreateForm;
