const { Joi } = require("express-validation");

const registerDto = {
  body: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/)
      .message(`Password should be more than 6 characters contains numbers and
      letters`),
    age: Joi.number().min(18).max(50),
  }),
};

const loginDto = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  registerDto,
  loginDto,
};
