import axios from "axios";
import capturedState from "../components/SearchCard/SearchCard";

export default {
  // Gets all opportunites from API if no state is selected
  getAllOpportunity: function () {
    return axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=`
    );
  },
  // Gets all opportunites from API by user's chosen state
  getStateOpportunity: function (capturedState) {
    return axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&state=` +
        capturedState
    );
  },

  // Gets all opportunites from API by user's chosen keyword
  getKeywordOpportunity: function (capturedKeyword) {
    return axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=` +
        capturedKeyword
    );
  },

  // Gets all opportunites from API by user's chosen keyword
  getBothOpportunity: function (capturedKeyword, capturedState) {
    return axios.get(
      "https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=" +
        capturedKeyword +
        "&state=" +
        capturedState
    );
  },

  //   // Creates an opportunity and saves an opportunity to the database
  createOpportunity: function (createdOpportunity) {
    console.log(createdOpportunity);
    return axios.post("/api/opportunity", createdOpportunity);
  },

  //   // Saves an opportunity to the database
  saveOpportunity: function (OpportunityData) {
    console.log(OpportunityData);
    return axios.post("/api/opportunity", OpportunityData);
  },
  // grabs the opportunities that are saved into the opportunity state
  getOpportunity: function (opportunites) {
    return axios.get("/api/opportunity", opportunites);
  },
  // deletes an opportunity matching it's specific ID for the profile page
  deleteOpportunity: function (id) {
    return axios.delete("/api/opportunity" + id, id);
  },
};
