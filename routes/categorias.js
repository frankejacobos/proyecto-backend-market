const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarCategoria } = require("../validations/validarCategoria");
const {
  obtenerCategorias,
  buscarCategoria,
  insertarCategoria,
  actualizarCategoria,
  eliminarCategoria,
} = require("../controllers/controladorCategoria");

router.get("/", obtenerCategorias);
router.get("/:id", [validateId, buscarCategoria]);
router.post("/", [validarCategoria, insertarCategoria]);
router.put("/:id", [validateId, validarCategoria, actualizarCategoria]);
router.delete("/:id", [validateId, eliminarCategoria]);

module.exports = router;
