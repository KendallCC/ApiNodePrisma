//?Importaciones necesarias para la api
import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

//?importaciones de tarea programada
import cron from 'node-cron';
import { sendReminderEmail } from './mailer';


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
import { authMiddleware } from './middleware/Auth';

//?inicializacion de variables y puertos
const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT || 3000

//!Configuracion de la api
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

//authMiddleware,

//?Configuracion de la ruta del api
app.use('/categoria/', RutasCategoria)
app.use('/usuario/', RutasUsuarios)
app.use('/sucursal/', RutasSucursales)
app.use('/mascota/', RutasMascota)
app.use('/servicio/', RutaServicios)
app.use('/producto/', RutasProducto)
app.use('/horario/', RutasHorario)
app.use('/cita/', RutasCitas)
app.use('/factura/', RutasFacturas)
app.use('/detallefactura/', RutasDetalleFactura)

//!Inicializacion del puerto
const server = app.listen(port, () =>
  console.log(`Server Activo en la url: http://localhost:${port}`)
)


// Configura la tarea programada para ejecutarse todos los días a las 5 PM
cron.schedule('12 22 * * *', async () => {
  console.log('Ejecutando tarea programada para enviar recordatorios de citas');

  // Obtener la fecha de hoy y la fecha de mañana
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Buscar las citas para mañana
  const citas = await prisma.cita.findMany({
    where: {
      fecha_cita: {
        gte: new Date(tomorrow.setHours(0, 0, 0, 0)),
        lt: new Date(tomorrow.setHours(23, 59, 59, 999))
      },
      estado: 'Confirmada' // Solo enviar recordatorios para citas confirmadas
    },
    include: {
      cliente: true,
      mascota: true,
      servicio: true,
      sucursal: true
    }
  });

  

  // Enviar recordatorios para cada cita
  for (const cita of citas) {
    const emailText = `
      Hola ${cita.cliente.nombre},
      
      Este es un recordatorio de la cita para su mascota ${cita.mascota?.nombre} programada para mañana a las ${cita.hora_cita.toLocaleTimeString()} en la sucursal ${cita.sucursal.nombre}.
      
      Detalles del servicio: ${cita.servicio.nombre}.
      
      Por favor confirme su asistencia.
      
      Gracias,
      Vedpet
    `;
    console.log(emailText);
    
    await sendReminderEmail('kendall26092002@gmail.com', 'Recordatorio de cita', emailText);
  }
});

console.log('Tarea programada configurada.');
