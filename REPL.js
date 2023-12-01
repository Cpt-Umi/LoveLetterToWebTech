import { db } from "./models/index.js";

(async () => {
  const courses = await db.Course.find();
  console.log(JSON.stringify(courses, null, 2));
  process.exit();
})();
