import React from "react";
import { MDBInput } from "mdbreact";

const SearchForm = () => {

  return (
    <div>
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
    </div>
  );
};

export default SearchForm;
