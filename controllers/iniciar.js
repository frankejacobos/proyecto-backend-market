const { Categoria } = require('../models/categoria')
const { Cliente } = require('../models/cliente')
const { Distribuidor } = require('../models/distribuidor')
const { Producto } = require('../models/producto')
const createError = require('http-errors')

async function iniciar(req, res, next) {
  let mensaje = ''

  // try {
  //   let cliente = new Cliente({
  //     tipo_de_documento: 'ruc', numero_de_documento: '10218673304',
  //     nombre_de_persona: 'saravia alvarez de jacobo, ana bella', tipo_de_persona: 'natural',
  //     direccion: 'av. progreso n. 516 (condorillo bajo)', localidad: 'chincha alta',
  //     correo: 'correo@prueba', telefono: '987654321',
  //   })
  //   cliente = await cliente.save()
  // } catch (error) {
  //   return next(createError(error.message))
  // }
  // mensaje += 'cliente insertado correctamente.\n'

  // try {
  //   let distribuidor = new Distribuidor({
  //     vendedor: 'dario julian',
  //     telefono: '981529268',
  //     direccion: 'cal. garcilazo de la vega n. 298',
  //     localidad: 'chincha alta',
  //   })
  //   distribuidor = await distribuidor.save()
  // } catch (error) {
  //   return next(createError(error.message))
  // }
  // mensaje += 'distribuidor insertado correctamente.\n'

  // const categorias = [
  //   { nombre: 'carnes y embutidos', codigo: 'CATCE001' },
  //   { nombre: 'frutas y verduras', codigo: 'CATFV001' },
  //   { nombre: 'huevos y lacteos', codigo: 'CATHL001' },
  //   { nombre: 'fideos y aceites', codigo: 'CATFA001' },
  //   { nombre: 'golosinas y aperitivos', codigo: 'CATGA001' },
  //   { nombre: 'productos infantiles', codigo: 'CATPI001' },
  //   { nombre: 'cuidado personal', codigo: 'CATCP001' },
  //   { nombre: 'limpieza y hogar', codigo: 'CATLH001' },
  // ]
  // for (let categoria of categorias) {
  //   try {
  //     let temp = new Categoria(categoria)
  //     temp = await temp.save()
  //   } catch (error) {
  //     return next(createError(error.message))
  //   }
  // }
  // mensaje += 'categorias insertadas correctamente.\n'

  // const productos = [
  //   // golosinas
  //   {
  //     stock_almacen: '100', categoria: '627a9c8a4bc30f447048f763',
  //     descripcion: 'goma ositos 100gr 12un', unidad: 'bol',
  //     codigo: '22000030', precio_compra: '2.223', precio_venta: '2.5'
  //   },
  //   {
  //     stock_almacen: '100', categoria: '627a9c8a4bc30f447048f763',
  //     descripcion: 'goma gusanos 100gr 12un', unidad: 'bol',
  //     codigo: '22000003', precio_compra: '2.223', precio_venta: '2.5'
  //   },
  //   {
  //     stock_almacen: '100', categoria: '627a9c8a4bc30f447048f763',
  //     descripcion: 'goma bananas 100gr 12un', unidad: 'bol',
  //     codigo: '22000001', precio_compra: '2.223', precio_venta: '2.5'
  //   },
  //   // ingredientes cocina
  //   {
  //     stock_almacen: '100', categoria: '627a9c8a4bc30f447048f761',
  //     descripcion: 'pomarola salsa clasica 145gr', unidad: 'pck',
  //     codigo: '02801103', precio_compra: '1.287', precio_venta: '1.5'
  //   },
  //   // limpieza y hogar
  //   {
  //     stock_almacen: '100', categoria: '627a9c8a4bc30f447048f769',
  //     descripcion: 'vendiband 1 unidad', unidad: 'dis',
  //     codigo: '07118144', precio_compra: '0.058', precio_venta: '0.1'
  //   },
  // ]
  // for (let producto of productos) {
  //   try {
  //     producto.categoria = await Categoria.findById(producto.categoria)
  //     let temp = new Producto(producto)
  //     temp = await temp.save()
  //   } catch (error) {
  //     return next(createError(error.message))
  //   }
  // }
  // mensaje += 'productos insertados correctamente.\n'

  // const compras = [{
  //   clienteId: "627a9c8a4bc30f447048f76b",
  //   distribuidorId: "627a9c8b4bc30f447048f76d",
  //   items:
  //     [
  //       {
  //         "productoId": "628031fad4211a3abd189e02",
  //         "cantidad": "20", "precio_compra": '2.223', "precio_venta": '2.5'
  //       },
  //       {
  //         "productoId": "628031fad4211a3abd189e0e",
  //         "cantidad": "20", "precio_compra": '2.223', "precio_venta": '2.5'
  //       }
  //     ]
  // },]

  res.status(200).send(mensaje)
}

module.exports = { iniciar }