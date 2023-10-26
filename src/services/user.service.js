const userDAO = require("../dao/user.dao");

const getProfile = async ({ userId }) => {
  const user = await userDAO.findById({ userId });
  delete user.password;
  return user;
};

module.exports = {
  getProfile,
};
