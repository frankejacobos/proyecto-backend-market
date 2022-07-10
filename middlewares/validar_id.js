const createError = require('http-errors')
const mongoose = require('mongoose')

function validar_id(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    next(createError('El id no es valido.'))
  next()
}
module.exports = { validar_id }