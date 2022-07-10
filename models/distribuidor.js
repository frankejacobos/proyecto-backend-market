const { default: mongoose } = require('mongoose')

const esquema_de_distribuidor = new mongoose.Schema({
  vendedor: {
    type: String, required: true
  },
  telefono: {
    type: String, required: true
  },
  direccion: {
    type: String, required: true
  },
  localidad: {
    type: String, required: true
  },
})
const Distribuidor = mongoose.model('Distribuidor', esquema_de_distribuidor)
module.exports = { Distribuidor, esquema_de_distribuidor }