const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  res.send("barbar balabala");
});

app.get("/people/:id", (req, res) => {
  res.send("People id: " + req.params.id);
});

app.get("/coba_query", (req, res) => {
  res.send(req.query.kuncidek + " " + req.query.kuncimas);
});

app.post("/coba_body", (req, res) => {
  res.send(req.body.test);
});

app.listen(3000, () => console.log("Asyiikk Jalaan"));
