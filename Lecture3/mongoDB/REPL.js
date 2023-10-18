// READ EVALUATE PRINT LOOP
// For testing database connectivity and access

// Requiring database from models
const db = require("./models");

// Fetching courses
// db.Course.find()
//     .then((courses) => console.log(courses))
//     .then(() => process.exit());

// Better way to perform the above
(async () => {
    const courses = await db.Course.find();
    console.log(courses);
    process.exit();
})();

// There is supposed to be more here but that was also covered in the next Lecture.
// So see you there!
