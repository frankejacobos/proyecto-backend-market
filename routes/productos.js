var express = require('express')
const { obtener_productos, insertar_producto, buscar_producto, actualizar_producto, eliminar_producto } = require('../controllers/controlador_producto')
const { validar_id } = require('../middlewares/validar_id')
const { validar_producto } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_productos])
router.get('/:id', [validar_id, buscar_producto])
router.post('/', [validar_producto, insertar_producto])
router.put('/:id', [validar_id, validar_producto, actualizar_producto])
router.delete('/:id', [validar_id, eliminar_producto])

module.exports = router
