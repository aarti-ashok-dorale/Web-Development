const express = require("express");
const app = express();


// app.use((req, res, next) => {
//     console.log("I am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("I am 2nd middleware");
//     next();
// });


//callback app.use
app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

//error handling middleware
// app.get("/", (req, res) => {
//     res.send("Hi am root");
// });

app.get("/random", (req, res) => {
    res.send("Hi I am random");
});

// utility middleware - logger
app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.time);
});

//404
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});