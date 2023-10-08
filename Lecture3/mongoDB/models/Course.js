// Import mongoose
const mongoose = require("mongoose");
// Destructuring two objects from mongoose
const { Schema, model } = mongoose;

// Initializing course schema
const courseSchema = Schema({
    courseid: Number,
    code: String,
    title: String,
    crhr: Number,
    semester: Number,
});

module.exports = model("Course", courseSchema);
