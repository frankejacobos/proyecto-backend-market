const { Categoria } = require('../models/categoria')
const createError = require('http-errors')

async function obtener_categorias(req, res) {
  const categorias = await Categoria.find().sort('nombre')
  res.status(200).send(categorias)
}
async function insertar_categoria(req, res, next) {
  try {
    let categoria = new Categoria(req.body)
    categoria = await categoria.save()
    res.status(200).send(categoria)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function actualizar_categoria(req, res, next) {
  try {
    let categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!categoria) return next(createError('No existe una categoria con ese id.').status(404))
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_categoria(req, res, next) {
  const categoria = await Categoria.findById(req.params.id)
  if (!categoria) return next(createError('No existe una categoria con ese id.').status(404))
  res.status(200).send(categoria)
}
async function eliminar_categoria(req, res, next) {
  try {
    const categoria = await Categoria.findByIdAndRemove(req.params.id)
    if (!categoria) return next(createError('No existe una categoria con ese id.').status(404))
    res.status(200).send(categoria)
  } catch (error) {
    return next(createError(error.message))
  }
}
module.exports = { obtener_categorias, insertar_categoria, buscar_categoria, actualizar_categoria, eliminar_categoria }