const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware is integrated between Client and the Server
// Middleware has a function called next()
const logger = (req, res, next) => {
    req.msg = `<br /> This message is from Logger ^^`;
    next();
};

// Example of a auth middleware
const auth = (req, res, next) => {
    if (req.query.username === "Achilles") {
        next();
    } else {
        res.send(`You are not Worthy.`);
    }
};

// app.use to utilize/integrate middleware
app.use(logger);

app.get("/", (req, res) => {
    res.send(`Hello, Friend! ${req.msg}`);
});

// Middlewares have scopes
// Utilizes auth middleware
app.get("/login", auth, (req, res) => {
    res.send(`Welcome to the DashBoard ${req.msg}`);
});

app.listen(PORT, () => {
    console.log(`You are LIVE on http://localhost:${PORT}`);
});
