let mysql = require("mysql");
let db = mysql.createConnection({
  host: "localhost",
  user: "manojAviox",
  password: "Aviox@123",
  database: "mydb",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
