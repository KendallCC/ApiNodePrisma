//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarFacturas,ObtenerFactura,CrearFactura,ActualizarFactura} from '../Controllers/FacturaController'

//!Se inicializa la variable de Router
const RutasFacturas=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasFacturas.get('/',ListarFacturas)
RutasFacturas.get('/:id',ObtenerFactura)
RutasFacturas.post('/',CrearFactura)
RutasFacturas.put('/:id',ActualizarFactura)

//Se exportan las rutas
export default RutasFacturas;
