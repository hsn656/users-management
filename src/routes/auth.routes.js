const express = require("express");
const { validate } = require("express-validation");

const authController = require("../controllers/auth.controller");
const { registerDto, loginDto } = require("../dtos/auth.dto");

const router = express.Router();

router.post("/register", validate(registerDto), authController.register);
router.post("/login", validate(loginDto), authController.login);

module.exports = router;
