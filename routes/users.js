const router = require("express").Router();
const db = require("../db");

// get all users
router.get("/", (req, res) => {
  var sql = "SELECT * FROM users";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ data: result });
  });
});

// user profile
router.get("/:userId", (req, res) => {
  var sql = `SELECT * FROM users WHERE id=${req.params.userId}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ data: result });
  });
});

// user delete
router.delete("/:userId", (req, res) => {
  var sql = `DELETE FROM users WHERE id=${req.params.userId}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ message: "user deleted!" });
  });
});

// user update
router.put("/:userId", (req, res) => {
  var sql = `UPDATE  users SET name = '${req.body.name}' WHERE id=${req.params.userId}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ data: result, message: "user updated!" });
  });
});

module.exports = router;
