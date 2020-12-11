import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
} from "mdbreact";
import { List, ListItem } from "../components/List/index";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

function SavedOpportunitiesCard(props) {
  const [opportunity, setOpportunity] = useState([]);
  return (
    <div>
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
                        <MDBCardText>
                          {opportunity.irsClassification.classification}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <DeleteBtn />
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default SavedOpportunitiesCard;
