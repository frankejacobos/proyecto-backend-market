const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarCompra } = require("../validations/validarCompra");
const {
  obtenerCompras,
  insertarCompra,
  buscarCompra,
} = require("../controllers/controladorCompra");

router.get("/", obtenerCompras);
router.get("/:id", [validateId], buscarCompra);
router.post("/", [validarCompra], insertarCompra);

module.exports = router;
