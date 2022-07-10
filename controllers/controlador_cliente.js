const { Cliente } = require('../models/cliente')
const createError = require('http-errors')

async function obtener_clientes(req, res) {
  const clientes = await Cliente.find().sort('apellido_paterno')
  res.status(200).send(clientes)
}
async function insertar_cliente(req, res, next) {
  try {
    let cliente = new Cliente(req.body)
    cliente = await cliente.save()
    res.status(200).send(cliente)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function actualizar_cliente(req, res, next) {
  try {
    let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!cliente) return next(createError('No existe un cliente con ese id.'))
    res.status(200).send(cliente)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_cliente(req, res, next) {
  const cliente = await Cliente.findById(req.params.id)
  if (!cliente) return next(createError('No existe un cliente con ese id.'))
  res.status(200).send(cliente)
}
async function eliminar_cliente(req, res, next) {
  try {
    const cliente = await Cliente.findByIdAndRemove(req.params.id)
    if (!cliente) return next(createError('No existe un cliente con ese id.').status(404))
    res.status(200).send(cliente)
  } catch (error) {
    return next(createError(error.message))
  }
}
module.exports = { obtener_clientes, insertar_cliente, buscar_cliente, actualizar_cliente, eliminar_cliente }