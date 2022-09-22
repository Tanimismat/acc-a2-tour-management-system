const Tour = require("../models/tour");

exports.getTours = async () => {
	try {
		const tours = await Tour.find({});
		res.status(200).json({
			status: "Success",
			message: "Successfully got all tours data",
			data: tours,
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: "Cannot get data",
			error: error.message,
		});
	}
};

exports.addTour = async (req, res, next) => {
	// res.send("working");
	try {
		const tour = new Tour(req.body);
		const result = await tour.save();

		res.status(200).json({
			status: "Success",
			message: "Data inserted successfully",
			data: tour,
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: "Data cannot be inserted",
			error: error.message,
		});
	}
};
