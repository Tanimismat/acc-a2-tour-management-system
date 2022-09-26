const Tour = require("../models/tour");
const mongoose = require("mongoose");

exports.getTours = async (req, res, next) => {
	try {
		const queries = {};

		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			queries.fields = fields;
			// console.log(fields);
		}
		if (req.query.page) {
			const { page = 1, limit = 3 } = req.query;
			const skipValue = (page - 1) * +limit;
			queries.skipValue = skipValue;
			queries.limit = +limit;
		}
		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			queries.sortBy = sortBy;
			// console.log(sortBy);
		}

		const tours = await Tour.find({})
			.select(queries.fields)
			.skip(queries.skipValue)
			.limit(queries.limit)
			.sort(queries.sortBy);

		// const totalTour = Tour.countDocuments({});

		res.status(200).json({
			status: "Success",
			message: "Successfully got all tours data",
			data: { tours },
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
