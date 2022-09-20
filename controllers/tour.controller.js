const Tour = require("../models/tour");

exports.getTours = async () => {
	try {
		const tours = await Tour.find({});
		res.status(200).json({
			status: "Success",
			message: "Successfully got all tour data",
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
