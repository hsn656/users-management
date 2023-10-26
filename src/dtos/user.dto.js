const { Joi } = require("express-validation");

const updateProfileDto = {
  body: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    age: Joi.number().min(18).max(50),
  }),
};

const searchUsersDto = {
  body: Joi.object({
    email: Joi.string().optional(),
    username: Joi.string().optional(),
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(0).required(),
  }),
};

module.exports = {
  updateProfileDto,
  searchUsersDto,
};
