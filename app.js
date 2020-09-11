require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT;

// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// database
const db = require("./config/db-config");
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log("Error: ", error));

// route middlewares
const homeroute = require("./controllers/home");

app.use("", homeroute);

app.listen(port, () => console.log(`Server started at ${port}`));
