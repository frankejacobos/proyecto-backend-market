const { Categoria } = require("../models/categoria");

module.exports.obtenerCategorias = async (_req, res, next) => {
  try {
    const categorias = await Categoria.find().sort("nombre");
    res.status(200).send(categorias);
  } catch (err) {
    return next(err);
  }
};
module.exports.buscarCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return next(createError(404, "Categoria no encontrada"));
    }
    res.status(200).send(categoria);
  } catch (err) {
    return next(err);
  }
};

module.exports.insertarCategoria = async (req, res, next) => {
  try {
    let categoria = new Categoria(req.body);
    categoria = await categoria.save();
    res.status(201).send(categoria);
  } catch (err) {
    return next(err);
  }
};

module.exports.actualizarCategoria = async (req, res, next) => {
  try {
    let categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!categoria) {
      return next(createError(404, "Categoria no encontrada"));
    }
    res.status(200).send(categoria);
  } catch (err) {
    return next(err);
  }
};

module.exports.eliminarCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.findByIdAndRemove(req.params.id);
    if (!categoria) {
      return next(createError(404, "Categoria no encontrada"));
    }
    res.status(200).send(categoria);
  } catch (err) {
    return next(err);
  }
};
