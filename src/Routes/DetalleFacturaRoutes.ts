//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListardetalleFacturas,ObtenerdetalleFactura,CrearDetalleFactura,ActualizarDetalleFactura} from '../Controllers/DetalleFacturaController'

//!Se inicializa la variable de Router
const RutasDetalleFactura=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasDetalleFactura.get('/',ListardetalleFacturas)
RutasDetalleFactura.get('/:id',ObtenerdetalleFactura)
RutasDetalleFactura.post('/',CrearDetalleFactura)
RutasDetalleFactura.put('/:id',ActualizarDetalleFactura)



//Se exportan las rutas
export default RutasDetalleFactura;
