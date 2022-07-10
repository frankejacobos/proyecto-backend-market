var express = require('express')
const { obtener_compras, insertar_compra, buscar_compra, actualizar_compra, eliminar_compra } = require('../controllers/controlador_compra')
const { validar_id } = require('../middlewares/validar_id')
const { validar_compra } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_compras])
router.get('/:id', [validar_id, buscar_compra])
router.post('/', [validar_compra, insertar_compra])
router.put('/:id', [validar_id, validar_compra, actualizar_compra])
router.delete('/:id', [validar_id, eliminar_compra])

module.exports = router
