const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour.controller");
const viewCount = require("../middleware/viewCount");

router.route("/tour/trending").get(tourController.getTrendingTour);

router
	.route("/tours")
	.get(tourController.getTours)
	.post(tourController.addTour);

router.route("/tours/:id").get(viewCount, tourController.getTourDetails);

router.route("/tour/:id").patch(tourController.updateATour);

module.exports = router;
