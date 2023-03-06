const db = require("./db");
const express = require("express");
const app = express();

// routes import
const auth = require("./routes/auth");
const user = require("./routes/users");

// connect to mysql database
db;

// test api
app.get("/", (req, res) => {
  res.send("Hey Api is working!");
});

// api routes
app.use(express.json());
app.use("/auth", auth);
app.use("/users", user);


// server start
app.listen(5000, () => {
  console.log("Server Started at 5000 port");
});
