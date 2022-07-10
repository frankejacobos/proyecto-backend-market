const { Categoria } = require('../models/categoria')
const { Producto } = require('../models/producto')
const createError = require('http-errors')

async function obtener_productos(req, res) {
  const productos = await Producto.find().sort('vendedor')
  res.status(200).send(productos)
}
async function insertar_producto(req, res, next) {
  const categoria = await Categoria.findById(req.body.categoria)
  if (!categoria) return next(createError('No existe una categoria con ese nombre.'))
  try {
    let producto = new Producto({
      descripcion: req.body.descripcion,
      unidad: req.body.unidad,
      codigo: req.body.codigo,
      precio_compra: req.body.precio_compra,
      precio_venta: req.body.precio_venta,
      stock_almacen: req.body.stock_almacen,
      categoria: categoria
    })
    producto = await producto.save()
    res.status(200).send(producto)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function actualizar_producto(req, res, next) {
  try {
    let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!producto) return next(createError('No existe un producto con ese id.'))
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_producto(req, res, next) {
  const producto = await Producto.findById(req.params.id)
  if (!producto) return next(createError('No existe un producto con ese id.'))
  res.status(200).send(producto)
}
async function eliminar_producto(req, res, next) {
  try {
    const producto = await Producto.findByIdAndRemove(req.params.id)
    if (!producto) return next(createError('No existe un producto con ese id.').status(404))
    res.status(200).send(producto)
  } catch (error) {
    return next(createError(error.message))
  }
}
module.exports = { obtener_productos, insertar_producto, buscar_producto, actualizar_producto, eliminar_producto }