//activity

const express = require("express");
const app = express();

app.use("/api", (req, res, next) => {
    let { token } = req.query;   // /api?token=giveaccess
    if (token === "giveaccess") {
        next();
    }
    throw new Error("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
    res.send("data");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});


//passing multiple middlewares
//  const checkToken = (req, res, next) => {
//     let { token } = req.query;   // /api?token=giveaccess
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!")
// };

// app.get("/api", checkToken, (req, res) => {
//     res.send("data");;
// });