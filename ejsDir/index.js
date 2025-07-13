const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random()*6) + 1;
    res.render("rollDice.ejs", {diceVal:num});
});

app.get("/ig/:username", (req, res) => {
    const followers = ["aarti", "steve", "ironman", "bob"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});

