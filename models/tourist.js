const mongoose = require("mongoose");

// tourist schema design
const addressSchema = mongoose.Schema({
	street: String,
	city: String,
	require: true,
});

const touristSchema = mongoose.Schema({
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
	address: addressSchema,
	gender: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
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

module.exports = mongoose.model("Tourist", touristSchema);
