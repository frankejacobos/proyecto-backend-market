const createError = require("http-errors");
const Joi = require("joi");

module.exports.validarCategoria = (req, _res, next) => {
  const { error } = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    next(createError(error.message));
  }
  next();
};
