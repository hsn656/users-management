const userDAO = require("../dao/user.dao");
const ApiError = require("../error/api-error");

const getProfile = async ({ userId }) => {
  const user = await userDAO.findById({ userId });
  delete user.password;
  return user;
};

const updateProfile = async (userId, { email, username, age }) => {
  const isEmailUnique = await userDAO.isUpdatedEmailUnique({ userId, email });
  if (!isEmailUnique) throw ApiError.badRequest("Email already exists");

  const isUsernameUnique = await userDAO.isUpdatedUsernameUnique({
    userId,
    username,
  });
  if (!isUsernameUnique) throw ApiError.badRequest("username is already taken");

  return await userDAO.update(userId, { email, username, age });
};

module.exports = {
  getProfile,
  updateProfile,
};
