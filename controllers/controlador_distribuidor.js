const { Distribuidor } = require('../models/distribuidor')
const createError = require('http-errors')

async function obtener_distribuidores(req, res) {
  const distribuidores = await Distribuidor.find().sort('vendedor')
  res.status(200).send(distribuidores)
}
async function insertar_distribuidor(req, res, next) {
  try {
    let distribuidor = new Distribuidor(req.body)
    distribuidor = await distribuidor.save()
    res.status(200).send(distribuidor)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function actualizar_distribuidor(req, res, next) {
  try {
    let distribuidor = await Distribuidor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!distribuidor) return next(createError('No existe un distribuidor con ese id.'))
    res.status(200).send(distribuidor)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_distribuidor(req, res, next) {
  const distribuidor = await Distribuidor.findById(req.params.id)
  if (!distribuidor) return next(createError('No existe un distribuidor con ese id.'))
  res.status(200).send(distribuidor)
}
async function eliminar_distribuidor(req, res, next) {
  try {
    const distribuidor = await Distribuidor.findByIdAndRemove(req.params.id)
    if (!distribuidor) return next(createError('No existe un distribuidor con ese id.').status(404))
    res.status(200).send(distribuidor)
  } catch (error) {
    return next(createError(error.message))
  }
}
module.exports = { obtener_distribuidores, insertar_distribuidor, buscar_distribuidor, actualizar_distribuidor, eliminar_distribuidor }