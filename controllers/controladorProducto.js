const { Categoria } = require("../models/categoria");
const { Producto } = require("../models/producto");
const createError = require("http-errors");

module.exports.obtenerProductos = async (_req, res, next) => {
  try {
    const productos = await Producto.find().sort("descripcion");
    res.status(200).send(productos);
  } catch (err) {
    return next(err);
  }
};

module.exports.buscarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return next(createError(404, "No existe un producto con ese id."));
    }
    res.status(200).send(producto);
  } catch (err) {
    return next(err);
  }
};

module.exports.insertarProducto = async (req, res, next) => {
  try {
    let categoria = await Categoria.findById(req.body.categoria);
    if (!categoria) {
      return next(createError(404, "No existe una categoria con ese id."));
    }
    req.body.categoria = categoria;
    let producto = new Producto(req.body);
    producto = await producto.save();
    res.status(200).send(producto);
  } catch (err) {
    return next(err);
  }
};

module.exports.actualizarProducto = async (req, res, next) => {
  try {
    if (req.body.categoria) {
      let categoria = await Categoria.findById(req.body.categoria);
      if (!categoria) {
        return next(createError(404, "No existe una categoria con ese id."));
      }
      req.body.categoria = categoria;
    }
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!producto) {
      return next(createError(404, "No existe un producto con ese id."));
    }
    res.status(200).send(producto);
  } catch (err) {
    return next(err);
  }
};

module.exports.eliminarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return next(createError(404, "No existe un producto con ese id."));
    }
    res.status(200).send(producto);
  } catch (err) {
    return next(err);
  }
};
