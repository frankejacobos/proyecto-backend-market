const { default: mongoose } = require("mongoose");
const { esquema_de_categoria } = require("./categoria");

const esquema_de_producto = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
  unidad: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  precio_compra: {
    type: Number,
    required: true,
  },
  precio_venta: {
    type: Number,
    required: true,
  },
  stock_almacen: {
    type: Number,
    required: true,
  },
  categoria: {
    type: esquema_de_categoria,
    required: true,
  },
});
const Producto = mongoose.model("Producto", esquema_de_producto);
module.exports = { Producto, esquema_de_producto };
