const mongoose = require('mongoose')
const logger = require('../utils/logger')
require('express-async-errors')

module.exports = function () {
  const db = "mongodb+srv://" + process.env.ROOT + ":" + process.env.PASSWORD + "@cluster0.agkgn.mongodb.net/" + process.env.DB + "?retryWrites=true&w=majority";
  console.log(db);
  mongoose.connect(db)
    .then(() => { logger.info(`Conectado a ${process.env.DB}...`) })
    .catch(() => { logger.error(`No se pudo conectar a ${process.env.DB}...`) })
}