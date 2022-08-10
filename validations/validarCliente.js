const createError = require("http-errors");
const Joi = require("joi");

module.exports.validarCliente = (req, _res, next) => {
  const { error } = Joi.object({
    nombre_de_persona: Joi.string().required(),
    tipo_de_persona: Joi.string().required(),
    tipo_de_documento: Joi.string().required(),
    numero_de_documento: Joi.number().required(),
    direccion: Joi.string().required(),
    localidad: Joi.string().required(),
    correo: Joi.string().required(),
    telefono: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    next(createError(error.message));
  }
  next();
};
