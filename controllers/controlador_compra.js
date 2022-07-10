const { Compra } = require('../models/compra')
const { Producto } = require('../models/producto')
const { Distribuidor } = require('../models/distribuidor')
const { Cliente } = require('../models/cliente')
const createError = require('http-errors')

async function obtener_compras(req, res) {
  const compras = await Compra.find().sort('fecha')
  res.status(200).send(compras)
}
async function insertar_compra(req, res, next) {
  // buscando distribuidor
  const distribuidor = await Distribuidor.findById(req.body.distribuidorId)
  if (!distribuidor) return next(createError('No existe el distribuidor.'))
  // buscando cliente
  const cliente = await Cliente.findById(req.body.clienteId)
  if (!cliente) return next(createError('No existe el cliente.'))
  // verificando que existan los productos de la lista
  for (let item of req.body.items) {
    let producto = await Producto.findById(item.productoId)
    if (!producto) return next(createError(`${item.productoId} no existe.`))
  }
  let importe_temp = 0;
  // actualizando cada producto en la bd
  for (let item of req.body.items) {
    try {
      let producto = await Producto.findById(item.productoId)
      producto.stock_almacen = Number(producto.stock_almacen) + Number(item.cantidad)
      producto.precio_compra = item.precio_compra
      producto.precio_venta = item.precio_venta
      producto = await producto.save()
      importe_temp += Number(item.precio_compra) * Number(item.cantidad)
    } catch (error) { return next(createError(400, 'Error al actualizar el producto ')) }
  }
  // creando la compra
  let compra = new Compra({
    distribuidor: distribuidor,
    cliente: cliente,
    items: req.body.items,
    fecha: Date.now(),
    importe: importe_temp
  })
  try {
    compra = await compra.save()
    res.status(200).send(compra)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function actualizar_compra(req, res, next) {
  return next(createError('las compras no se pueden actualizar').status(404))
}
async function buscar_compra(req, res, next) {
  const compra = await Compra.findById(req.params.id)
  if (!compra) return next(createError('No existe una compra con ese id.'))
  res.status(200).send(compra)
}
async function eliminar_compra(req, res, next) {
  return next(createError('las compras no se pueden eliminar').status(404))
}
module.exports = { obtener_compras, insertar_compra, buscar_compra, actualizar_compra, eliminar_compra }