//?Importaciones necesarias para la api
import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

//!Importacion de las variables entorno
import dotenv from "dotenv";
dotenv.config();

//*Rutas con sus respectivas funciones
import RutasCategoria from './Routes/CategoriaRoutes';
import RutasUsuarios from './Routes/UsuarioRoutes';
import RutasSucursales from './Routes/SucursalRoutes';
import RutasMascota from './Routes/MascotaRoutes';
import RutaServicios from './Routes/ServicioRoutes';
import RutasProducto from './Routes/ProductoRoutes';
import RutasHorario from './Routes/HorarioRoutes';
import RutasCitas from './Routes/CitaRoutes';
import RutasFacturas from './Routes/FacturaRoutes';
import RutasDetalleFactura from './Routes/DetalleFacturaRoutes';

//?inicializacion de variables y puertos
const prisma = new PrismaClient()
const app = express()
const port=process.env.PORT||3000

//!Configuracion de la api
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true})) 

//?Configuracion de la ruta del api
app.use('/categoria/',RutasCategoria)
app.use('/usuario/',RutasUsuarios)
app.use('/sucursal/',RutasSucursales)
app.use('/mascota/',RutasMascota)
app.use('/servicio/',RutaServicios)
app.use('/producto/',RutasProducto)
app.use('/horario/',RutasHorario)
app.use('/cita/',RutasCitas)
app.use('/factura/',RutasFacturas)
app.use('/detallefactura/',RutasDetalleFactura)

//!Inicializacion del puerto
const server = app.listen(port, () =>
  console.log(`Server Activo en la url: http://localhost:${port}`)
) 
