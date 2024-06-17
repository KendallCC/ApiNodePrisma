//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarProductos,ObtenerProducto,CrearProducto,ActualizarProducto} from '../Controllers/ProductoController'

//!Se inicializa la variable de Router
const RutasProducto=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasProducto.get('/',ListarProductos)
RutasProducto.get('/:id',ObtenerProducto)
RutasProducto.post('/',CrearProducto)
RutasProducto.put('/:id',ActualizarProducto)



//Se exportan las rutas
export default RutasProducto;
