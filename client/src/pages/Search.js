import React from "react";
import SearchCard from "../components/SearchCard/SearchCard";
import { MDBRow, MDBCol } from "mdbreact";

const Search = () => {
  return (
    <div>
      <MDBRow center className="mt-1">
        <MDBCol md="9">
          <SearchCard />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Search;
