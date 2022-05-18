const express = require("express");
const { check } = require("express-validator");

const { getUsers, signup, login } = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").isLength({ min: 4, max: 20 }),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 4, max: 20 }),
  ],
  signup
);

router.post("/login", login);

router.get("/", getUsers);

module.exports = router;
