// const express = require('express');
// const router = express.Router();

// Better way of doing the above
const router = require("express").Router();

// Better way to handle get and post in a chain like manner
router
    .route("/save")
    .get((req, res) => {
        console.log(req.query);
        res.end();
    })
    .post((req, res) => {
        console.log(req.body);
        res.end();
    });

// Setting up ajax route
router.get("/ajax", (req, res) => {
    res.render("ajax");
    // res.end();
});

// Retrieve ajax data in the following
router.get("/xhr-action", (req, res) => {
    let num = Number(req.query.num) * 2;
    res.json({ num });
});

// Example for get and post
// /save as a path where the parameters will be saved from the form
// router.get("/save", (req, res) => {
//     console.log(req.query);
//     res.end();
// });

router.get("/form", (req, res) => {
    res.render("form");
});

// use router instead of app in routes
router.get("/", (req, res) => {
    // Using the fetch function to retrieve dummy data from dummy.json
    fetch(`https://dummyjson.com/users`)
        .then((res) => res.json())
        .then((data) =>
            res.render("index", {
                title: "Hello, Friend",
                msg: req.msg,
                age: 21,
                users: data.users,
            })
        );
    // When using template view engine we use res.render
    // res.render("index", { title: "Hello, Friend!", msg: req.msg, age: 25 });
    // res.send(`Hello, Friend! From Router With <b>Love</b>. ${req.msg}`);
});

// Always export modules/components
module.exports = router;
