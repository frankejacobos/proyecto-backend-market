const createError = require("http-errors");
const Joi = require("joi");

module.exports.validarCompra = (req, _res, next) => {
  const { error } = Joi.object({
    distribuidorId: Joi.string().required(),
    clienteId: Joi.string().required(),
    items: Joi.array().required(),
  }).validate(req.body);
  if (error) {
    next(createError(error.message));
  }
  next();
};
