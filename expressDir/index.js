const express = require('express');
const app = express();


const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

  app.get("/", (req, res)=>{
    res.send("Hello, I am root.");
  });
  
  app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    res.send(`welcome to the page of @${username} with id ${id}.`);
  });


app.get("/search", (req, res) =>{
  let {q} = req.query;
  res.send(`<h1>search results for query: ${q}</h1>`);
});