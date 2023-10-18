const mongoose = require("mongoose");

// async-await function for mongoDB connection locally
(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/academic");
})();

// Exporting the Course data
module.exports = {
    Course: require("./Course"),
};
