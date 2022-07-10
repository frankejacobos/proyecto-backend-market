var express = require('express')
const { obtener_categorias, insertar_categoria, buscar_categoria, actualizar_categoria, eliminar_categoria } = require('../controllers/controlador_categoria')
const { validar_id } = require('../middlewares/validar_id')
const { validar_categoria } = require('../middlewares/validar_modelo')
var router = express.Router()

router.get('/', [obtener_categorias])
router.get('/:id', [validar_id, buscar_categoria])
router.post('/', [validar_categoria, insertar_categoria])
router.put('/:id', [validar_id, validar_categoria, actualizar_categoria])
router.delete('/:id', [validar_id, eliminar_categoria])

module.exports = router
