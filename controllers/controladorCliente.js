const { Cliente } = require("../models/cliente");
const createError = require("http-errors");

module.exports.obtenerClientes = async (_req, res, next) => {
  try {
    const clientes = await Cliente.find().sort("nombre");
    res.status(200).send(clientes);
  } catch (err) {
    return next(err);
  }
};

module.exports.buscarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return next(createError(404, "No existe un cliente con ese id."));
    }
    res.status(200).send(cliente);
  } catch (err) {
    return next(err);
  }
};

module.exports.insertarCliente = async (req, res, next) => {
  try {
    let cliente = new Cliente(req.body);
    cliente = await cliente.save();
    res.status(201).send(cliente);
  } catch (err) {
    return next(err);
  }
};

module.exports.actualizarCliente = async (req, res, next) => {
  try {
    let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cliente) {
      return next(createError(404, "No existe un cliente con ese id."));
    }
    res.status(200).send(cliente);
  } catch (err) {
    return next(err);
  }
};

module.exports.eliminarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndRemove(req.params.id);
    if (!cliente) {
      return next(createError(404, "No existe un cliente con ese id."));
    }
    res.status(200).send(cliente);
  } catch (err) {
    return next(err);
  }
};
