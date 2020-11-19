const router = require("express").Router();
const opportunityController = require("../../controllers/opportunityController");

// Matches with "/api/books"
router.route("/")
  .get(opportunityController.findAll)
  .post(opportunityController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(opportunityController.findById)
  .put(opportunityController.update)
  .delete(opportunityController.remove);

module.exports = router;
