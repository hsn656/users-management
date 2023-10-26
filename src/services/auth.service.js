const bcrypt = require("bcryptjs");

const userDAO = require("../dao/user.dao");
const ApiError = require("../error/api-error");
const { RolesEnum } = require("../config/constants");

const register = async ({ email, username, password, age }) => {
  const alreadyRegisteredEmail = await userDAO.findByEmail({ email });
  if (alreadyRegisteredEmail) throw ApiError.badRequest("Email already exists");

  const alreadyRegisteredUsername = await userDAO.findByUsername({ username });
  if (alreadyRegisteredUsername)
    throw ApiError.badRequest("username is already taken");

  const hashedPassword = await bcrypt.hash(password, 10);

  return await userDAO.create({
    email,
    username,
    password: hashedPassword,
    age,
    role: RolesEnum.NormalUser,
  });
};

module.exports = {
  register,
};
