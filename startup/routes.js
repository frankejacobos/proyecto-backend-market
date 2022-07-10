const categoriasRouter = require('../routes/categorias')
const clientesRouter = require('../routes/clientes')
const distribuidoresRouter = require('../routes/distribuidores')
const productosRouter = require('../routes/productos')
const comprasRouter = require('../routes/compras')
const ventasRouter = require('../routes/ventas')
const error = require('../middlewares/error')

module.exports = function (app) {
  app.get('/', function (req, res) { res.render('index', { title: 'API database Market' }) })
  app.use('/categorias', categoriasRouter)
  app.use('/clientes', clientesRouter)
  app.use('/distribuidores', distribuidoresRouter)
  app.use('/productos', productosRouter)
  app.use('/compras', comprasRouter)
  app.use('/ventas', ventasRouter)
  app.use(error)
}