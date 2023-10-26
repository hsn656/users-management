const tryCatchWrapper = require("../helpers/tryCatchWrapper");
const { formatSuccessRespnse } = require("../helpers/formatResponse");
const userService = require("../services/user.service");

const getProfile = tryCatchWrapper(async (req, res) => {
  const result = await userService.getProfile({ userId: req.user.id });
  return res.status(200).json(formatSuccessRespnse(result));
});

module.exports = {
  getProfile,
};
