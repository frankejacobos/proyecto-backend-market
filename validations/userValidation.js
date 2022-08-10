const Joi = require("joi");

module.exports.validateUser = (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
  }).validate(req.body);
  if (error) {
    return next(error);
  }
  next();
};

module.exports.validateUserUpdate = (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    isAdmin: Joi.boolean(),
  }).validate(req.body);
  if (error) {
    return next(error);
  }
  next();
};

module.exports.validateAuth = (req, _res, next) => {
  const { error } = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    return next(error);
  }
  next();
};
