import axios from "axios";
import capturedState from "../components/searchCard/SearchCard";

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

  // API call to get the information for the anime from the API call and adds those properties to the model
  saveOpportunity: function (OpportunityData) {
    console.log(OpportunityData);
    return axios.post("/api/opportunity", OpportunityData);
  },
  // grabs the anime's that are saved into the animes state
  getOpportunity: function (opportunites) {
    return axios.get("/api/opportunity", opportunites);
  },
  // deletes an anime matching it's specific ID for the profile page
  deleteOpportunity: function (id) {
    return axios.delete("/api/opportunity" + id, id);
  },
};
