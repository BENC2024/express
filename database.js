//Conexion a la base de datos
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Ventas" ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>{
    console.log("Conexion exitosa");
}).catch((error) => {
    console.log("No se pudo conectar a la base de datos"+error.message);
})
//Cadena de conexion
