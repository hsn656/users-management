const express = require("express");
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const { validate } = require("express-validation");
const { updateProfileDto, searchUsersDto } = require("../dtos/user.dto");
const { authorizeRoles } = require("../middlewares/authorizeRoles");
const { RolesEnum } = require("../config/constants");

const router = express.Router();

router.get("/profile", verifyToken, userController.getProfile);
router.put(
  "/profile",
  verifyToken,
  validate(updateProfileDto),
  userController.updateProfile
);
router.post(
  "/search",
  verifyToken,
  authorizeRoles(RolesEnum.Admin),
  validate(searchUsersDto),
  userController.search
);

module.exports = router;
