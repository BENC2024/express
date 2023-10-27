const { Router } = require("express");
const router = Router();
const { obtenerProducto } = require("../controller/productos.controller");

router.get('/', (req,res) => {res.send("Hola mundo")} );

router.get('/productos', (req,res) => {res.send("listado de los productos")} );

module.exports = router;


