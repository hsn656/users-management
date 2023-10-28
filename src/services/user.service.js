const usersIndex = require("../algolia/userIndex");
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

const search = async ({ username, email, page, limit }) => {
  const offset = (page - 1) * limit;

  const filters = [];
  if (username) filters.push(`username:${username}`);
  if (email) filters.push(`email:${email}`);

  const filterString = filters.join(" OR ");
  const result = await usersIndex.search("", {
    filters: filterString,
    attributesToRetrieve: ["username", "email", "age"],
    offset,
    length: limit,
  });

  return result.hits.map((doc) => {
    return {
      username: doc.username,
      email: doc.email,
      age: doc.age,
      id: doc.objectID,
    };
  });
};

module.exports = {
  getProfile,
  updateProfile,
  search,
};
