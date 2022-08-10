const createError = require("http-errors");
const Joi = require("joi");

module.exports.validarProducto = (req, _res, next) => {
  const { error } = Joi.object({
    descripcion: Joi.string().required(),
    unidad: Joi.string().required(),
    codigo: Joi.string().required(),
    categoria: Joi.string().required(),
    precio_compra: Joi.number().required(),
    precio_venta: Joi.number().required(),
    stock_almacen: Joi.number().required(),
  }).validate(req.body);
  if (error) {
    next(createError(error.message));
  }
  next();
};
