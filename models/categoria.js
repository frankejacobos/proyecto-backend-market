const { default: mongoose } = require("mongoose");

const esquema_de_categoria = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
});
const Categoria = mongoose.model("Categoria", esquema_de_categoria);
module.exports = { Categoria, esquema_de_categoria };
