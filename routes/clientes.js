const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarCliente } = require("../validations/validarCliente");
const {
  obtenerClientes,
  buscarCliente,
  insertarCliente,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/controladorCliente");

router.get("/", obtenerClientes);
router.get("/:id", validateId, buscarCliente);
router.post("/", validarCliente, insertarCliente);
router.put("/:id", validateId, validarCliente, actualizarCliente);
router.delete("/:id", validateId, eliminarCliente);

module.exports = router;
