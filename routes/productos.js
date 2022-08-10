const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarProducto } = require("../validations/validarProducto");
const {
  obtenerProductos,
  buscarProducto,
  insertarProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/controladorProducto");

router.get("/", obtenerProductos);
router.get("/:id", [validateId], buscarProducto);
router.post("/", [validarProducto], insertarProducto);
router.put("/:id", [validateId, validarProducto], actualizarProducto);
router.delete("/:id", [validateId], eliminarProducto);

module.exports = router;
