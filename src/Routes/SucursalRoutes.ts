//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarSucursales,ObtenerSucursales,CrearSucursales,ActualizarSucursales} from '../Controllers/SucursalesController'

//!Se inicializa la variable de Router
const RutaSucursales=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutaSucursales.get('/',ListarSucursales)
RutaSucursales.get('/:id',ObtenerSucursales)
RutaSucursales.post('/',CrearSucursales)
RutaSucursales.put('/:id',ActualizarSucursales)



//Se exportan las rutas
export default RutaSucursales;
