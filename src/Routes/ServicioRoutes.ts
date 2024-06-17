//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarServicios,ObtenerServicios,CrearServicios,ActualizarServicios} from '../Controllers/ServiciosController'

//!Se inicializa la variable de Router
const RutaServicios=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutaServicios.get('/',ListarServicios)
RutaServicios.get('/:id',ObtenerServicios)
RutaServicios.post('/',CrearServicios)
RutaServicios.put('/:id',ActualizarServicios)



//Se exportan las rutas
export default RutaServicios;
