const Tour = require("../models/tour");
const mongoose = require("mongoose");

exports.getTours = async (req, res, next) => {
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

exports.getTourDetails = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Tour.findById(id);
		console.log(result);
		res.status(200).json({
			status: "Success",
			message: "Successfully got tour data",
			data: result,
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

exports.updateATour = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Tour.updateOne(
			{ _id: id },
			{ $set: req.body },
			{ runValidators: true }
		);

		res.status(200).json({
			status: "Success",
			message: "Data updated successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: "Data cannot be updated",
			error: error.message,
		});
	}
};
