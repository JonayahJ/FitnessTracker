const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://Jonayah:5z6qecycT!2c@ds161459.mlab.com:61459/heroku_9rnq4q4p", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useMongoClient: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/html-routes.js"));
// app.use(require("./routes/api-routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});