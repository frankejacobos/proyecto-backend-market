var express = require('express')
const { obtener_clientes, insertar_cliente, buscar_cliente, actualizar_cliente, eliminar_cliente } = require('../controllers/controlador_cliente')
const { validar_id } = require('../middlewares/validar_id')
const { validar_cliente } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_clientes])
router.get('/:id', [validar_id, buscar_cliente])
router.post('/', [validar_cliente, insertar_cliente])
router.put('/:id', [validar_id, validar_cliente, actualizar_cliente])
router.delete('/:id', [validar_id, eliminar_cliente])

module.exports = router