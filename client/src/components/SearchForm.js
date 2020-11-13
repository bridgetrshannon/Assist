import React from "react";
import { MDBInput } from "mdbreact";

const SearchForm = () => {
  return (
    <div>
      <MDBInput hint="Search by Keyword" type="text" containerClass="mt-0" />
    </div>
  );
};

export default SearchForm;
