import axios from "axios";
import capturedState from "../components/searchCard/SearchCard"

export default {
  // Gets all opportunites from API if no state is selected
  getAllOpportunity: function () {
    return axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=`
    );
  },
    // Gets all opportunites from API by user's chosen state
    getStateOpportunity: function(capturedState) {
      return axios.get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&state=` + capturedState );
    
      },
  //   // Deletes the book with the given id
  //   deleteOpportunity: function(ein) {
  //     return axios.delete("/api/opportunity/" + id);
  //   },
  //   // Saves a book to the database
  saveOpportunity: function (OpportunityData) {
    return axios.post("/api/opportunity", OpportunityData);
  },
};
