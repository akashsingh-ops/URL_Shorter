//replit: https://replit.com/@thahsi/UrlShortener#index.js

const express = require("express");
const app = express();
const shortUrl = require("./routes/shortUrl");
const homeRoute = require("./routes/home");

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/urlapi", shortUrl);
app.use("/", homeRoute);

//connecting to the port
const port = 1337;
app.listen(port, () => {
  console.log("APP is running");
});
