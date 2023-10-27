const ProductoSchema = require('../models/ProductModel')

const productsController = {}

const obtenerProductos = async() => {
    return await ProductoSchema.find();
};

const guardarProducto = async (producto) => {
    let nuevoProducto = new ProductoSchema(producto)
    return await nuevoProducto.save()
};

module.exports = productsController;