const { default: mongoose } = require("mongoose");
const { esquema_de_distribuidor } = require("./distribuidor");
const { esquema_de_cliente } = require("./cliente");

const esquema_de_compra = new mongoose.Schema({
  distribuidor: {
    type: esquema_de_distribuidor,
    required: true,
  },
  cliente: {
    type: esquema_de_cliente,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  importe: {
    type: Number,
    required: true,
  },
});
const Compra = mongoose.model("Compra", esquema_de_compra);
module.exports = { Compra };
