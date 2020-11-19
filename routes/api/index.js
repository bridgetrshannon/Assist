const router = require("express").Router();
const opportunityRoutes = require("./opportunity");

// Book routes
router.use("/opportunity", opportunityRoutes);

module.exports = router;