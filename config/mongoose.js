const mongoose = require("mongoose");
// mongoose.connect('mongodb://0.0.0.0/employeReviewSystem');
const DB =
  "mongodb+srv://rajendrasarak622:4cvPhC9nQ4UZ3piU@cluster2.phupiw4.mongodb.net/?retryWrites=true&w=majority";
// const DB = "mongodb://127.0.0.1/employee_review_system";

// These set of line can be written in async await fashion, but I have followed the documentation.
mongoose.connect(DB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
