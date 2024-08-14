import { DiaSemana, EstadoCita, EstadoFactura, MetodoPago, PrismaClient } from "@prisma/client";

import { Request, Response } from 'express';
const prisma = new PrismaClient();



export async function ListarporEncargado(request: Request, response: Response) {
  const id = request.params.id
  await prisma.usuario.findUnique({
    where: { id: parseInt(id), rol: "encargado" },
    select: {
      sucursal: {
        select: {
          id: true,
          nombre: true,
          citas: true
          ,
        },
      },
    }
  }).then(async (citas) => {
    await prisma.$disconnect();
    response.status(200)
    return response.json(citas)
  }).catch(async () => {
    await prisma.$disconnect();
    response.status(400).send('Error:Citas no encontradas');
  })
}

// {
//   select: {
//     id: true,
//     fecha_cita: true,
//     hora_cita: true,
//     estado: true,
//   },


export async function ListarCitas(request: Request, response: Response) {
  await prisma.cita.findMany({
    select: {
      condicion: true,
      estado: true,
      fecha_cita: true,
      id: true,
      hora_cita: true,
      motivo: true,
      observaciones: true,
      vacunas: true
    }
  }).then(async (citas) => {
    await prisma.$disconnect();
    response.status(200)
    return response.json(citas)
  }).catch(async () => {
    await prisma.$disconnect();
    response.status(400).send('Error:Citas no encontradas');
  })
}

export async function ObtenerCita(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);

  try {
    const cita = await prisma.cita.findUnique({
      where: { id },
      include: {
        cliente: true,
        sucursal: true,
        mascota: true,
        facturas: {
          include: {
            detalle_factura: {
              include: {
                servicio: true,
                producto: true // Incluye productos si existen
              }
            }
          }
        }
      }
    });

    if (!cita) {
      return response.status(404).json({ error: 'Cita no encontrada' });
    }

    return response.status(200).json(cita);
  } catch (error) {
    console.error('Error al obtener la cita:', error);
    return response.status(500).json({ error: 'Error al obtener la cita' });
  }
}









function convertirDiaSemana(numeroDia) {
  switch (numeroDia) {
    case 0: return DiaSemana.Domingo;
    case 1: return DiaSemana.Lunes;
    case 2: return DiaSemana.Martes;
    case 3: return DiaSemana.Miercoles;
    case 4: return DiaSemana.Jueves;
    case 5: return DiaSemana.Viernes;
    case 6: return DiaSemana.Sabado;
    default: throw new Error('Número de día de la semana no válido');
  }
}

// Crear una nueva cita
export async function CrearCita(req: Request, res: Response) {
  const { fecha, id_Cliente, id_sucursal, estado, id_Servicio, id_mascota, hora_inicio, observaciones, motivo, condicion, vacunas } = req.body;
  console.log(req.body);

  try {
    const fechaCita = new Date(fecha);
    const horaLocalCita = new Date(`${fecha.split('T')[0]}T${hora_inicio}:00.000-06:00`);
    const diaSemana = convertirDiaSemana(fechaCita.getUTCDay());

    const horaCitaUTC = new Date(horaLocalCita.toISOString());

    // Obtener los servicios
    const servicios = await prisma.servicio.findMany({
      where: { id: { in: id_Servicio } }
    });

    // Calcular la duración total de los servicios
    const totalDuration = servicios.reduce((total, servicio) => total + new Date(servicio.tiempo_servicio).getUTCMinutes() + new Date(servicio.tiempo_servicio).getUTCHours() * 60, 0);

    // Calcular el tiempo de finalización de la cita
    const horaCitaFinUTC = new Date(horaCitaUTC.getTime() + totalDuration * 60 * 1000);

    // Verificar si la cita está dentro del horario de la sucursal
    const horarios = await prisma.horario.findMany({
      where: {
        id_sucursal,
        dia_semana: diaSemana,
        OR: [
          { fecha: fechaCita },
          { repeticion: 'Diario' },
          { repeticion: 'Semanal' },
          { repeticion: 'Mensual' }
        ]
      }
    });

    const esHorarioValido = horarios.some(horario => {
      const horaInicioUTC = new Date(horario.hora_inicio);
      const horaFinUTC = new Date(horario.hora_fin);

      return horaCitaUTC >= horaInicioUTC && horaCitaFinUTC <= horaFinUTC;
    });

    if (!esHorarioValido) {
      return res.status(400).json('La cita no está dentro del horario permitido.');
    }

    // Verificar si existe un bloqueo en el horario
    const bloqueos = horarios.filter(horario => horario.bloqueo);
    const tieneBloqueo = bloqueos.some(horario => {
      const horaInicioBloqueoUTC = new Date(horario.hora_inicio);
      const horaFinBloqueoUTC = new Date(horario.hora_fin);

      return (horaCitaUTC < horaFinBloqueoUTC && horaCitaFinUTC > horaInicioBloqueoUTC);
    });

    if (tieneBloqueo) {
      return res.status(400).json('El horario de la cita está bloqueado.');
    }

    // Verificar si ya existe una cita en el mismo horario
    const citasExistentes = await prisma.cita.findMany({
      where: {
        id_sucursal: id_sucursal,
        fecha_cita: fechaCita,
        AND: [
          {
            hora_cita: {
              lt: new Date(horaCitaUTC.getTime() + totalDuration * 60 * 1000) // Verifica si alguna cita termina antes de que comience la nueva cita
            }
          },
          {
            hora_cita: {
              gt: new Date(horaCitaUTC.getTime() - totalDuration * 60 * 1000) // Verifica si alguna cita comienza después de que termine la nueva cita
            }
          }
        ]
      }
    });

    if (citasExistentes.length > 0) {
      return res.status(400).json('Ya existe una cita reservada en este horario.');
    }

    // Crear la cita
    const nuevaCita = await prisma.cita.create({
      data: {
        cliente: { connect: { id: id_Cliente } },
        sucursal: { connect: { id: id_sucursal } },
        mascota: id_mascota ? { connect: { id: id_mascota } } : undefined,
        fecha_cita: fechaCita,
        hora_cita: horaCitaUTC,
        estado,
        observaciones,
        motivo,
        condicion,
        vacunas
      }
    });

    // Calcular subtotal, impuesto y total
    const subtotal = servicios.reduce((total, servicio) => total + servicio.tarifa, 0);
    const impuesto = subtotal * 0.13; // Suponiendo un 13% de IVA
    const total = subtotal + impuesto;

    // Crear la factura proforma
    const nuevaFactura = await prisma.factura.create({
      data: {
        cita: { connect: { id: nuevaCita.id } },
        fecha_factura: new Date(),
        subtotal,
        impuesto,
        total,
        metodo_pago: MetodoPago.Efectivo, // Por defecto
        estado: EstadoFactura.Proforma,
        detalle_factura: {
          create: servicios.map(servicio => ({
            servicio: { connect: { id: servicio.id } },
            cantidad: 1,
            precio_unitario: servicio.tarifa,
            total_item: servicio.tarifa
          }))
        }
      }
    });

    console.log(nuevaFactura);

    return res.status(201).json({ nuevaCita, nuevaFactura });
  } catch (error) {
    console.error('Error al crear la cita:', error);
    return res.status(500).json('Error al crear la cita');
  }
}







export async function ActualizarCita(req: Request, res: Response) {
  const { id } = req.params;
  const { fecha, id_Cliente, id_sucursal, estado, id_Servicio, id_mascota, hora_inicio, observaciones, motivo, condicion, vacunas } = req.body;

  try {
    // Parsear fecha y hora en la zona horaria local de Costa Rica (UTC-6)
    const fechaCita = new Date(fecha);
    const horaLocalCita = new Date(`${fecha.split('T')[0]}T${hora_inicio}:00.000-06:00`);
    const diaSemana = convertirDiaSemana(fechaCita.getUTCDay());

    // Convertir hora de la cita a UTC para la comparación
    const horaCitaUTC = new Date(horaLocalCita.toISOString());

    // Obtener los servicios para calcular la duración total
    const servicios = await prisma.servicio.findMany({
      where: { id: { in: id_Servicio } }
    });

    const totalDuration = servicios.reduce((total, servicio) => {
      const duration = new Date(servicio.tiempo_servicio);
      return total + duration.getUTCHours() * 60 + duration.getUTCMinutes();
    }, 0);

    // Calcular el tiempo de finalización de la cita
    const horaCitaFinUTC = new Date(horaCitaUTC.getTime() + totalDuration * 60 * 1000);

    // Verificar si la cita está dentro del horario de la sucursal y no hay bloqueos
    const horarios = await prisma.horario.findMany({
      where: {
        id_sucursal,
        dia_semana: diaSemana,
        OR: [
          { fecha: fechaCita },
          { repeticion: 'Diario' },
          { repeticion: 'Semanal' },
          { repeticion: 'Mensual' }
        ]
      }
    });

    const esHorarioValido = horarios.some(horario => {
      const horaInicioUTC = new Date(horario.hora_inicio);
      const horaFinUTC = new Date(horario.hora_fin);

      // Verificar si el horario es válido y no hay bloqueo
      return horaCitaUTC >= horaInicioUTC && horaCitaFinUTC <= horaFinUTC && !horario.bloqueo;
    });

    if (!esHorarioValido) {
      return res.status(400).json('La cita no está dentro del horario permitido o está en un horario bloqueado.');
    }


// Verificar si existe un bloqueo en el horario
const bloqueos = horarios.filter(horario => horario.bloqueo);
const tieneBloqueo = bloqueos.some(horario => {
  const horaInicioBloqueoUTC = new Date(horario.hora_inicio);
  const horaFinBloqueoUTC = new Date(horario.hora_fin);

  return (horaCitaUTC < horaFinBloqueoUTC && horaCitaFinUTC > horaInicioBloqueoUTC);
});

if (tieneBloqueo) {
  return res.status(400).json('El horario de la cita está bloqueado.');
}


    // Verificar si ya existe una cita en el mismo horario (excluyendo la cita actual)
    const citasExistentes = await prisma.cita.findMany({
      where: {
        id_sucursal: id_sucursal,
        fecha_cita: fechaCita,
        id: { not: Number(id) }, // Excluir la cita actual
        AND: [
          {
            hora_cita: {
              lt: new Date(horaCitaUTC.getTime() + totalDuration * 60 * 1000) // Verifica si alguna cita termina antes de que comience la nueva cita
            }
          },
          {
            hora_cita: {
              gt: new Date(horaCitaUTC.getTime() - totalDuration * 60 * 1000) // Verifica si alguna cita comienza después de que termine la nueva cita
            }
          }
        ]
      }
    });

    if (citasExistentes.length > 0) {
      return res.status(400).json('Ya existe una cita reservada en este horario.');
    }

    // Actualizar la cita
    const citaActualizada = await prisma.cita.update({
      where: { id: Number(id) },
      data: {
        cliente: { connect: { id: id_Cliente } },
        sucursal: { connect: { id: id_sucursal } },
        mascota: id_mascota ? { connect: { id: id_mascota } } : undefined,
        fecha_cita: fechaCita,
        hora_cita: horaCitaUTC,
        observaciones,
        motivo,
        condicion,
        vacunas,
        estado
      }
    });

    // Obtener la factura relacionada usando findFirst
    const facturaRelacionada = await prisma.factura.findFirst({
      where: { id_cita: citaActualizada.id }
    });

    if (!facturaRelacionada) {
      return res.status(404).json('Factura no encontrada para la cita.');
    }

    // Calcular subtotal, impuesto y total
    const subtotal = servicios.reduce((total, servicio) => total + servicio.tarifa, 0);
    const impuesto = subtotal * 0.13; // Suponiendo un 13% de IVA
    const total = subtotal + impuesto;

    // Actualizar la factura proforma relacionada
    const facturaActualizada = await prisma.factura.update({
      where: { id: facturaRelacionada.id },
      data: {
        subtotal,
        impuesto,
        total,
        metodo_pago: MetodoPago.Efectivo, // Por defecto
        estado: EstadoFactura.Proforma,
        detalle_factura: {
          deleteMany: {}, // Eliminar los detalles anteriores
          create: servicios.map(servicio => ({
            servicio: { connect: { id: servicio.id } },
            cantidad: 1,
            precio_unitario: servicio.tarifa,
            total_item: servicio.tarifa
          }))
        }
      }
    });

    console.log('Esta es la factura actualizada: ', facturaActualizada);

    return res.status(200).json({ citaActualizada, facturaActualizada });
  } catch (error) {
    console.error('Error al actualizar la cita:', error);
    return res.status(500).json('Error al actualizar la cita');
  }
}
