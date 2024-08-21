//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarCitas,ObtenerCita,CrearCita,ActualizarCita,ListarporEncargado, ListarCitasPorSucursalCliente, ObtenerCitasHorariosYBloqueos, obtenerCitasParaMananaPorCliente, confirmarCita} from '../Controllers/CitaController'

//!Se inicializa la variable de Router
const RutasCitas=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasCitas.get('/encargado/:id',ListarporEncargado)
RutasCitas.get('/horariocitabloqueo/:id',ObtenerCitasHorariosYBloqueos)
RutasCitas.get('/cliente/pendiente/:id',obtenerCitasParaMananaPorCliente)
RutasCitas.get('/',ListarCitas)
RutasCitas.get('/:id',ObtenerCita)
RutasCitas.post('/',CrearCita)
RutasCitas.put('/:id',ActualizarCita)
RutasCitas.put('/confirmarcita/:id',confirmarCita)
RutasCitas.get('/sucursal/:id',ListarCitasPorSucursalCliente)



//Se exportan las rutas
export default RutasCitas;
