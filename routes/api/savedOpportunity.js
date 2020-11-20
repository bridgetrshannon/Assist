const router = require("express").Router();
const savedOpportunityController = require("../../controllers/savedOpportunityController");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(savedOpportunityController.findById)
  .put(savedOpportunityController.update)
  .delete(savedOpportunityController.remove);

module.exports = router;
