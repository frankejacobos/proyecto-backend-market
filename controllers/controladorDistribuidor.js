const { Distribuidor } = require("../models/distribuidor");
const createError = require("http-errors");

module.exports.obtenerDistribuidores = async (_req, res) => {
  try {
    const distribuidores = await Distribuidor.find();
    res.status(200).send(distribuidores);
  } catch (err) {
    return next(err);
  }
};

module.exports.obtenerDistribuidor = async (req, res, next) => {
  try {
    const distribuidor = await Distribuidor.findById(req.params.id);
    if (!distribuidor) {
      return next(createError(404, "No existe un distribuidor con ese id."));
    }
    res.status(200).send(distribuidor);
  } catch (err) {
    return next(err);
  }
};

module.exports.insertarDistribuidor = async (req, res, next) => {
  try {
    let distribuidor = new Distribuidor(req.body);
    distribuidor = await distribuidor.save();
    res.status(200).send(distribuidor);
  } catch (err) {
    return next(err);
  }
};

module.exports.actualizarDistribuidor = async (req, res, next) => {
  try {
    const distribuidor = await Distribuidor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!distribuidor) {
      return next(createError(404, "No existe un distribuidor con ese id."));
    }
    res.status(200).send(distribuidor);
  } catch (err) {
    return next(err);
  }
};

module.exports.eliminarDistribuidor = async (req, res, next) => {
  try {
    const distribuidor = await Distribuidor.findByIdAndDelete(req.params.id);
    if (!distribuidor) {
      return next(createError(404, "No existe un distribuidor con ese id."));
    }
    res.status(200).send(distribuidor);
  } catch (err) {
    return next(err);
  }
};
