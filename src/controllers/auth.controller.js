const tryCatchWrapper = require("../helpers/tryCatchWrapper");
const { formatSuccessRespnse } = require("../helpers/formatResponse");
const authService = require("../services/auth.service");

const register = tryCatchWrapper(async (req, res) => {
  const { email, username, password, age } = req.body;
  const result = await authService.register({
    email,
    username,
    password,
    age,
  });
  return res.status(201).json(formatSuccessRespnse(result));
});

module.exports = {
  register,
};
