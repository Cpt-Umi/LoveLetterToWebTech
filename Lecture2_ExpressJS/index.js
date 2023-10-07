const express = require("express");
const app = express(); // An app object for all the functionalities of express
// Importing a built in node 'path' object
const path = require("path");
const PORT = process.env.PORT || 4000;
// Getting routes from routes folder and storing it in a constant
const indexRoute = require("./routes/index");

// Setting up the engine via app.set by providing the folder name
app.set("views", path.join(__dirname, "views"));
// Setting up the view engine extension
app.set("view engine", "vash");

// Middleware for retrieving data from get and post
// urlencoded for translating the url for data
app.use(express.urlencoded({ extended: false }));
// Convert the translated data in json
app.use(express.json());
// static access to public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware
// An application which uses next function
// Note: Always handle a request stream properly
// app.all handle all types of methods like: get, post, patch etc
app.all("*", (req, res, next) => {
    req.msg = "OKAY!";
    next(); // To move on to the next route
    // If you're not using next you either res.end, res.send or res.render. Otherwise it keeps on waiting for a response
});

// Utilizing the sub-application from routes folder
// app.use for accessing different routes
app.use("/", indexRoute);

// Every server side application has a request and response cycle.
// app.get("/", (req, res) => {
//     res.send(`Hello, Friend! ${req.msg}`);
// });

// app.listen for executing application
// app.listen requires a PORT to execute
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
