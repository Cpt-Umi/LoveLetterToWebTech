import express from "express";
const router = express.Router();
import { db } from "../models/index.js";

router.get("/msg", (req, res) => {
  res.json({ msg: "Hello Fren" });
});

router.get("/list", async (req, res) => {
  const courses = await db.Course.find().sort("courseid");
  res.status(200).json(courses);
});

router.get("/course/:id", async (req, res) => {
  const courses = await db.Course.findOne({ _id: req.params.id });
  res.status(200).json(courses);
});

router.post("/save", async (req, res) => {
  const course = await db.Course.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(course);
});

export default router;
