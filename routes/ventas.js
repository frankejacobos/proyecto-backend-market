const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarVenta } = require("../validations/validarVenta");
const {
  obtenerVentas,
  obtenerVenta,
  crearVenta,
} = require("../controllers/controladorVenta");

router.get("/", obtenerVentas);
router.get("/:id", [validateId], obtenerVenta);
router.post("/", [validarVenta], crearVenta);

module.exports = router;
