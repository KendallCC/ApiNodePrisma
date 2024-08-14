//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarSucursales,ObtenerSucursales,CrearSucursales,ActualizarSucursales, ObtenerGerentesPorsucursal, ObtenerGerentesnull, BorrarSucursales, ListarSucursalesHorarios} from '../Controllers/SucursalesController'

//!Se inicializa la variable de Router
const RutaSucursales=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutaSucursales.get('/',ListarSucursales)
RutaSucursales.get('/null',ObtenerGerentesnull)
RutaSucursales.get('/gerentes/:id',ObtenerGerentesPorsucursal)
RutaSucursales.get('/horarios',ListarSucursalesHorarios)
RutaSucursales.get('/:id',ObtenerSucursales)
RutaSucursales.post('/',CrearSucursales)
RutaSucursales.put('/:id',ActualizarSucursales)
RutaSucursales.delete('/:id',BorrarSucursales)

//Se exportan las rutas
export default RutaSucursales;
