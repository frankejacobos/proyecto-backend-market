//Routes
const userRoutes = require("../routes/users");
const categoriaRoutes = require("../routes/categorias");
const clienteRoutes = require("../routes/clientes");
const comprasRoutes = require("../routes/compras");
const distribuidorRoutes = require("../routes/distribuidores");
const productoRoutes = require("../routes/productos");
const ventaRoutes = require("../routes/ventas");
const error = require("../middlewares/errorHandler");

module.exports = function (app) {
  const api = process.env.API_URL;
  app.use(`${api}/users`, userRoutes);
  app.use(`${api}/categorias`, categoriaRoutes);
  app.use(`${api}/clientes`, clienteRoutes);
  app.use(`${api}/compras`, comprasRoutes);
  app.use(`${api}/distribuidores`, distribuidorRoutes);
  app.use(`${api}/productos`, productoRoutes);
  app.use(`${api}/ventas`, ventaRoutes);
  app.use(error);
};
