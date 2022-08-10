const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validarDistribuidor } = require("../validations/validarDistribuidor");
const {
  obtenerDistribuidores,
  obtenerDistribuidor,
  insertarDistribuidor,
  actualizarDistribuidor,
  eliminarDistribuidor,
} = require("../controllers/controladorDistribuidor");

router.get("/", obtenerDistribuidores);
router.get("/:id", [validateId], obtenerDistribuidor);
router.post("/", [validarDistribuidor], insertarDistribuidor);
router.put("/:id", [validateId, validarDistribuidor], actualizarDistribuidor);
router.delete("/:id", [validateId], eliminarDistribuidor);

module.exports = router;
