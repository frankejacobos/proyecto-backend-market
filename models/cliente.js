const { default: mongoose } = require('mongoose')

const esquema_de_cliente = new mongoose.Schema({
  nombre_de_persona: {
    type: String, required: true
  },
  tipo_de_persona: {
    type: String, required: true
  },
  tipo_de_documento: {
    type: String, required: true
  },
  numero_de_documento: {
    type: Number, required: true
  },
  direccion: {
    type: String, required: true
  },
  localidad: {
    type: String, required: true
  },
  correo: {
    type: String, required: true
  },
  telefono: {
    type: String, required: true
  },
})
const Cliente = mongoose.model('Cliente', esquema_de_cliente)
module.exports = { Cliente, esquema_de_cliente }