const express = require("express");
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const { validate } = require("express-validation");
const { updateProfileDto } = require("../dtos/user.dto");

const router = express.Router();

router.get("/profile", verifyToken, userController.getProfile);
router.put(
  "/profile",
  verifyToken,
  validate(updateProfileDto),
  userController.updateProfile
);

module.exports = router;
