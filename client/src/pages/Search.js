import React from "react";
import SearchForm from "../components/SearchForm";
import StateDropdown from "../components/StateDropdown";
import SearchCard from "../components/SearchCard";
import SearchBtn from "../components/SearchBtn";
import { MDBRow, MDBCol } from "mdbreact";


const Search = () => {
  return (
    <div>
      <MDBRow center className="mt-5">
        <MDBCol md="3">
          <SearchForm />
        </MDBCol>
        <MDBCol md="1" className="pr-2">
          <StateDropdown />
        </MDBCol>
      </MDBRow>
      <MDBRow center className="mt-1">
        <MDBCol md="9">
          <SearchBtn />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Search;
