const bcrypt = require("bcryptjs");

const userDAO = require("../dao/user.dao");
const ApiError = require("../error/api-error");
const { RolesEnum } = require("../config/constants");
const { generateAccessToken } = require("../helpers/jwt");

const register = async ({
  email,
  username,
  password,
  age,
  role = RolesEnum.NormalUser,
}) => {
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
    role,
  });
};

const login = async ({ username, password }) => {
  const user = await userDAO.findByUsername({ username });

  await validateCredential({ user, password });

  return {
    accessToken: generateAccessToken({
      username,
      id: user.id,
      role: user.role,
    }),
  };
};

const adminlogin = async ({ username, password }) => {
  const user = await userDAO.findByUsername({ username });
  if (user.role !== RolesEnum.Admin)
    throw ApiError.unAuthorized("Invalid credentials");
  await validateCredential({ user, password });
  return {
    accessToken: generateAccessToken({
      username,
      id: user.id,
      role: user.role,
    }),
  };
};

const validateCredential = async ({ user, password }) => {
  if (!user) throw ApiError.unAuthorized("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw ApiError.unAuthorized("Invalid credentials");
};

module.exports = {
  register,
  login,
  adminlogin,
};
