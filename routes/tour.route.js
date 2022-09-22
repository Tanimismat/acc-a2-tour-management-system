const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour.controller");

router.route("/").get(tourController.getTours).post(tourController.addTour);

router.route("/:id").get(tourController.getTourDetails);

module.exports = router;
