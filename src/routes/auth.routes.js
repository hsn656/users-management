const express = require("express");
const { validate } = require("express-validation");

const authController = require("../controllers/auth.controller");
const { registerDto } = require("../dtos/auth.dto");

const router = express.Router();

router.post("/register", validate(registerDto), authController.register);

module.exports = router;
