import mongoose from "mongoose";
import { Course } from "./Course.js";

(async () => {
  await mongoose.connect(
    `mongodb://127.0.0.1:27017/recapsheet?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.0`
  );
})();

export const db = {
  Course,
};
