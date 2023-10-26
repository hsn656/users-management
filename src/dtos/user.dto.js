const { Joi } = require("express-validation");

const updateProfileDto = {
  body: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    age: Joi.number().min(18).max(50),
  }),
};

module.exports = {
  updateProfileDto,
};
