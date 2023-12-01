import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schemaCourse = Schema({
  courseid: Number,
  code: String,
  title: String,
  crhr: Number,
  semester: Number,
});

export const Course = model("Course", schemaCourse);
