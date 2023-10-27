const {Schema,model} = require("mongoose");
const ProductoSchema = new Schema({
    nombre_Producto: String,
    precio: Number,
    categoria: String,
    cantidad: Number,
});

module.exports = model('producto', ProductoSchema, "productos")
