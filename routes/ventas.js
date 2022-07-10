var express = require('express')
const { obtener_ventas, insertar_venta, buscar_venta, actualizar_venta, eliminar_venta } = require('../controllers/controlador_venta')
const { validar_id } = require('../middlewares/validar_id')
const { validar_venta } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_ventas])
router.get('/:id', [validar_id, buscar_venta])
router.post('/', [validar_venta, insertar_venta])
router.put('/:id', [validar_id, validar_venta, actualizar_venta])
router.delete('/:id', [validar_id, eliminar_venta])

module.exports = router
