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
    if (!result.length == 0) {
      res.json({ data: result });
    } else {
      res.json({ message: "user doesn't exist", data: result });
    }
  });
});

// user delete
router.delete("/:userId", (req, res) => {
  var sql = `DELETE FROM users WHERE id=${req.params.userId}`;
  var sql1 = `SELECT * FROM users WHERE id=${req.params.userId}`;
  db.query(sql1, function (err, result) {
    if (err) throw err;
    if (!result.length == 0) {
      db.query(sql, function (err) {
        if (err) throw err;
        res.json({ message: "user deleted!" });
      });
    } else {
      res.json({ message: "user doesn't exist" });
    }
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
