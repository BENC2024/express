const productsController = {}

const {
    obtenerProductos,
    guardarProducto
} = require('../services/Productos.services')

productsController.obtenerProductos = async(req, res) => {
    const listaDeProductos = await obtenerProductos()
    res.json(listaDeProductos);
};

module.exports = productsController;