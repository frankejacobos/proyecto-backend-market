const createError = require('http-errors')
const Joi = require('joi')

function validar_categoria(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    codigo:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_cliente(req, res, next) {
  const { error } = Joi.object({
    nombre_de_persona:
      Joi.string().required(),
    tipo_de_persona:
      Joi.string().required(),
    tipo_de_documento:
      Joi.string().required(),
    numero_de_documento:
      Joi.number().required(),
    direccion:
      Joi.string().required(),
    localidad:
      Joi.string().required(),
    correo:
      Joi.string().required(),
    telefono:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_distribuidor(req, res, next) {
  const { error } = Joi.object({
    vendedor:
      Joi.string().required(),
    telefono:
      Joi.string().required(),
    direccion:
      Joi.string().required(),
    localidad:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_producto(req, res, next) {
  const { error } = Joi.object({
    descripcion:
      Joi.string().required(),
    unidad:
      Joi.string().required(),
    codigo:
      Joi.string().required(),
    categoria:
      Joi.string().required(),
    precio_compra:
      Joi.number().required(),
    precio_venta:
      Joi.number().required(),
    stock_almacen:
      Joi.number().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_compra(req, res, next) {
  const { error } = Joi.object({
    distribuidorId:
      Joi.string().required(),
    clienteId:
      Joi.string().required(),
    items:
      Joi.array().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_venta(req, res, next) {
  const { error } = Joi.object({
    items:
      Joi.array().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}

module.exports = { validar_categoria, validar_cliente, validar_distribuidor, validar_producto, validar_compra, validar_venta }