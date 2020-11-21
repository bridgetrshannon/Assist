import axios from "axios";

export default {
  // Gets all opportunites from API if no state is selected
  getAllOpportunity: function() {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&search=` );
  }
//   // Gets all opportunites from API by user's chosen state
//   getStateOpportunity: function(userState) {
//     return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=1cd02618&app_key=d031dafe2f636e0d080019ce0eb8be5a&state=" + userState );
//   },
//   // Deletes the book with the given id
//   deleteOpportunity: function(ein) {
//     return axios.delete("/api/opportunity/" + id);
//   },
//   // Saves a book to the database
//   saveOpportunity: function(OpportunityData) {
//     return axios.post("/api/opportunity", OpportunityData);
};
