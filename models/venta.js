const { default: mongoose } = require('mongoose')

const esquema_de_venta = new mongoose.Schema({
  items: {
    type: Array, required: true
  },
  fecha: {
    type: Date, required: true
  },
  importe: {
    type: Number, required: true
  }
})
const Venta = mongoose.model('Venta', esquema_de_venta)
module.exports = { Venta }