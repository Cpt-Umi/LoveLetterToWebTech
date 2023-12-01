import express from "express";
const router = express.Router();
import { db } from "../models/index.js";

router.get("/list", async (req, res) => {
  const courses = await db.Course.find().sort("courseid");
  res.status(200).json(courses);
});

router.get("/msg", (req, res) => {
  res.json({ msg: "Hello Fren" });
});

export default router;
