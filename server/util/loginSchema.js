const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  password: Joi.string().pattern(
    new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
  ).required(),

});

module.exports = loginSchema;
