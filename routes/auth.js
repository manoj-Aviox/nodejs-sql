const router = require("express").Router();
const db = require("../db");

// to create user
router.post("/register", async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;
    if (!name || !phone || !email || !password) {
      res.status(400).json({ message: "Please fill all fields" });
    } else {
      db.query(
        `SELECT * FROM users WHERE email='${email}'`,
        function (err, result) {
          if (err) throw err;
          if (result.length > 0) {
            res.status(400).send({ message: "this email already used!" });
          } else {
            db.query(
              `INSERT INTO users (name,email,phone,password) VALUES ('${name}', '${email}', '${phone}', '${password}')`,
              (err, result) => {
                if (err) throw err;
                res.send({ data: result, message: "user registered" });
              }
            );
          }
        }
      );
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
