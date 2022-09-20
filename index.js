const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Route is working");
});

mongoose.connect(process.env.DATABASE).then(() => {
	console.log("Database connection is successful");
});

app.listen(port, () => {
	console.log(`App is running on the port ${port}`);
});
