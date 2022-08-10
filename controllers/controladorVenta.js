const { Venta } = require("../models/venta");
const { ItemVenta } = require("../models/itemVenta");
const { Producto } = require("../models/producto");
const createError = require("http-errors");

module.exports.obtenerVentas = async (_req, res) => {
  try {
    const ventas = await Venta.find().sort({ fecha: -1 }).populate({
      path: "items",
      populate: "producto",
    });
    res.status(200).json(ventas);
  } catch (error) {
    return next(error);
  }
};

module.exports.obtenerVenta = async (req, res, next) => {
  try {
    const venta = await Venta.findById(req.params.id).populate({
      path: "items",
      populate: "producto",
    });
    if (!venta) {
      return next(createError(404, "La venta no existe"));
    }
    res.status(200).json(venta);
  } catch (error) {
    return next(error);
  }
};

module.exports.crearVenta = async (req, res, next) => {
  try {
    let itemsIds = Promise.all(
      req.body.items.map(async (item) => {
        let nuevoItemVenta = new ItemVenta({
          cantidad: item.cantidad,
          producto: item.producto,
        });
        nuevoItemVenta = await nuevoItemVenta.save();
        return nuevoItemVenta._id;
      })
    );
    itemsIds = await itemsIds;
    let importe = await Promise.all(
      itemsIds.map(async (itemId) => {
        const item = await ItemVenta.findById(itemId).populate(
          "producto",
          "precio_venta"
        );
        return item.cantidad * item.producto.precio_venta;
      })
    );
    importe = await importe.reduce((a, b) => a + b, 0);
    let nuevaVenta = new Venta({
      items: itemsIds,
      importe: importe,
    });
    nuevaVenta = await nuevaVenta.save();
    nuevaVenta.items.forEach(async (itemId) => {
      const item = await ItemVenta.findById(itemId);
      const producto = await Producto.findById(item.producto);
      producto.cantidad = producto.cantidad - item.cantidad;
      await producto.save();
    });
    if (!nuevaVenta) {
      return next(createError(500, "Error al crear la venta"));
    }
    res.status(201).json(nuevaVenta);
  } catch (error) {
    return next(error);
  }
};
