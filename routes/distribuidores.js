var express = require('express')
const { obtener_distribuidores, insertar_distribuidor, buscar_distribuidor, actualizar_distribuidor, eliminar_distribuidor } = require('../controllers/controlador_distribuidor')
const { validar_id } = require('../middlewares/validar_id')
const { validar_distribuidor } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_distribuidores])
router.get('/:id', [validar_id, buscar_distribuidor])
router.post('/', [validar_distribuidor, insertar_distribuidor])
router.put('/:id', [validar_id, validar_distribuidor, actualizar_distribuidor])
router.delete('/:id', [validar_id, eliminar_distribuidor])

module.exports = router
