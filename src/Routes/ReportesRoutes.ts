//?Importacion necesaria para el Router
import Express from "express"; 
import { obtenerCitasPorSucursalHoy, obtenerTopProductosVendidos, obtenerTopServiciosVendidos } from "../Controllers/ReportesController";

//!Se inicializa la variable de Router
const RutasReportes=Express.Router()

RutasReportes.get('/obtenerCitasPorSucursalHoy',obtenerCitasPorSucursalHoy)
RutasReportes.get('/obtenerTopServiciosVendidos',obtenerTopServiciosVendidos)
RutasReportes.get('/obtenerTopProductosVendidos',obtenerTopProductosVendidos)

//Se exportan las rutas
export default RutasReportes;
