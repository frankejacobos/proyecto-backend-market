const { Venta } = require('../models/venta')
const { Producto } = require('../models/producto')
const createError = require('http-errors')

async function obtener_ventas(req, res) {
  const ventas = await Venta.find().sort('fecha')
  res.status(200).send(ventas)
}
async function insertar_venta(req, res, next) {
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
      if (item.cantidad <= producto.stock_almacen) {
        producto.stock_almacen = Number(producto.stock_almacen) - Number(item.cantidad)
        producto = await producto.save()
        importe_temp += Number(producto.precio_venta) * Number(item.cantidad)
      } else { return next(createError(`No hay suficientes ${producto.descripcion}`)) }
    } catch (error) { return next(createError(error.message)) }
  }
  // creando la venta
  try {
    let venta = new Venta({
      items: req.body.items,
      fecha: Date.now(),
      importe: importe_temp
    })
    venta = await venta.save()
    res.status(200).send(venta)
  } catch (error) { return next(createError(error.message)) }
}
async function actualizar_venta(req, res, next) {
  return next(createError('las ventas no se pueden actualizar').status(404))
}
async function buscar_venta(req, res, next) {
  const venta = await Venta.findById(req.params.id)
  if (!venta) return next(createError('No existe una venta con ese id.'))
  res.status(200).send(venta)
}
async function eliminar_venta(req, res, next) {
  return next(createError('las ventas no se pueden eliminar').status(404))
}
module.exports = { obtener_ventas, insertar_venta, buscar_venta, actualizar_venta, eliminar_venta }