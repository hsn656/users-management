const tryCatchWrapper = require("../helpers/tryCatchWrapper");
const { formatSuccessRespnse } = require("../helpers/formatResponse");
const userService = require("../services/user.service");

const getProfile = tryCatchWrapper(async (req, res) => {
  const result = await userService.getProfile({ userId: req.user.id });
  return res.status(200).json(formatSuccessRespnse(result));
});

const updateProfile = tryCatchWrapper(async (req, res) => {
  const { email, username, age } = req.body;
  const result = await userService.updateProfile(req.user.id, {
    email,
    username,
    age,
  });
  return res.status(200).json(formatSuccessRespnse(result));
});

const search = tryCatchWrapper(async (req, res) => {
  const { email, username, limit, page } = req.body;
  const result = await userService.search({
    email,
    username,
    limit,
    page,
  });
  return res.status(200).json(formatSuccessRespnse(result));
});

module.exports = {
  getProfile,
  updateProfile,
  search,
};
