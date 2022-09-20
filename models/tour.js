const mongoose = require("mongoose");

// tour schema design

const tourSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Tourist name is required"],
		unique: [true, "Name must be unique"],
		trim: true,
		minLength: [3, "Name must be at least 3 characters"],
		maxLength: [100, "Name must be within 100 characters"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: [true, "Email must be unique"],
		lowercase: true,
	},
	image: {
		type: String,
		required: [true, "Image is required"],
	},
	address: {
		type: String,
		// street: String,
		// city: String,
		required: true,
		// default: "Main st. NY",
	},
	gender: {
		type: String,
		required: [true, "Gender is required"],
	},
	age: {
		type: Number,
		required: [true, "Age is required"],
	},
	destination: {
		type: String,
		required: [true, "Destination is required"],
	},
	price: {
		type: Number,
		required: [true, "Price is required"],
	},
	arrivalTime: {
		type: Date,
		immutable: true,
		default: Date.now,
	},
	departureTime: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Tour", tourSchema);
