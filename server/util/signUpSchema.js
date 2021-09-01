const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(
    new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
  ).required(),
  confirm: Joi.ref('password'),
});

module.exports = signUpSchema;
