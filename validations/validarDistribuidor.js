const createError = require("http-errors");
const Joi = require("joi");

module.exports.validarDistribuidor = (req, _res, next) => {
  const { error } = Joi.object({
    vendedor: Joi.string().required(),
    telefono: Joi.string().required(),
    direccion: Joi.string().required(),
    localidad: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    next(createError(error.message));
  }
  next();
};
