import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export async function ListarHorarios(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const horariosYBloqueos = await prisma.horario.findMany({
      where: { id_sucursal: parseInt(id) },
    });
    await prisma.$disconnect();
    response.status(200).json(horariosYBloqueos);
  } catch (error) {
    await prisma.$disconnect();
    response.status(400).send("Error: No se pudieron obtener los horarios y bloqueos");
  }
}



export async function ObtenerDetalleHorario(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const horario = await prisma.horario.findUnique({
      where: { id: parseInt(id) },
      include: { sucursal: true },
    });
    await prisma.$disconnect();
    response.status(200).json(horario);
  } catch (error) {
    await prisma.$disconnect();
    response.status(400).send("Error: No se pudo obtener el detalle del horario");
  }
}



export async function CrearHorario(request: Request, response: Response) {
  const { fecha, hora_inicio, hora_fin, id_sucursal, dia_semana, repeticion } = request.body;

console.log(request.body);


  const horaInicio = new Date(hora_inicio);
  const horaFin = new Date(hora_fin);
  const fechaBloqueo = new Date(fecha);

console.log('HORAS CONVERTIDAS',horaInicio,horaFin,fechaBloqueo);


  // Validación de fecha vigente
  const fechaActual = new Date();
  if (fechaBloqueo.setHours(0, 0, 0, 0) < fechaActual.setHours(0, 0, 0, 0)) {
    return response.status(400).send("Error: La fecha debe ser actual o futura");
  } 

  // Validación de sobreposición de horarios con otros horarios
  const overlappingHorarios = await prisma.horario.findMany({
    where: {
      id_sucursal: id_sucursal,
      bloqueo: false,
      OR: [
        {
          hora_inicio: {
            lt: hora_fin,
          },
          hora_fin: {
            gt: hora_inicio,
          },
        },
      ],
    },
  });

  if (overlappingHorarios.length > 0) {
    return response.status(400).send("Error: Sobreposición de horarios");
  }

  try {
    const horario = await prisma.horario.create({
      data: {
        fecha,
        dia_semana,
        hora_inicio: horaInicio,
        hora_fin: horaFin,
        id_sucursal,
        repeticion,
        bloqueo: false
      }
    });
    await prisma.$disconnect();
    return response.status(200).json(horario);
  } catch (error) {
    await prisma.$disconnect();
    return response.status(400).send("Error: Horario no pudo ser agregado");
  }
}

// export async function ListarBloqueos(request: Request, response: Response) {
//   try {
//     const bloqueos = await prisma.horario.findMany({
//       where: { bloqueo: true },
//     });
//     await prisma.$disconnect();
//     response.status(200).json(bloqueos);
//   } catch (error) {
//     await prisma.$disconnect();
//     response.status(400).send("Error: Bloqueos no encontrados");
//   }
// }

// export async function ObtenerBloqueo(request: Request, response: Response) {
//   const id = request.params.id;
//   try {
//     const bloqueo = await prisma.horario.findFirst({
//       where: { id: parseInt(id), bloqueo: true },
//     });
//     await prisma.$disconnect();
//     response.status(200).json(bloqueo);
//   } catch (error) {
//     await prisma.$disconnect();
//     response.status(400).send("Error: Bloqueo no encontrado");
//   }
// }

// export async function CrearBloqueo(request: Request, response: Response) {
//   const { fecha, hora_inicio, hora_fin, id_sucursal, dia_semana, repeticion } = request.body;

//   const horaInicio = new Date(hora_inicio);
//   const horaFin = new Date(hora_fin);
  
//   // Validación de fecha vigente
//   if (new Date(fecha) < new Date()) {
//     return response.status(400).send("Error: La fecha debe ser actual o futura");
//   }

//   // Validación de sobreposición de bloqueos con otros bloqueos
//   const overlappingBloqueos = await prisma.horario.findMany({
//     where: {
//       id_sucursal: id_sucursal,
//       bloqueo: true,
//       OR: [
//         {
//           hora_inicio: {
//             lt: hora_fin,
//           },
//           hora_fin: {
//             gt: hora_inicio,
//           },
//         },
//       ],
//     },
//   });

//   if (overlappingBloqueos.length > 0) {
//     return response.status(400).send("Error: Sobreposición de bloqueos");
//   }

//   try {
//     const bloqueo = await prisma.horario.create({
//       data: {
//         fecha,
//         dia_semana,
//         hora_inicio: horaInicio,
//         hora_fin: horaFin,
//         id_sucursal,
//         repeticion,
//         bloqueo: true
//       }
//     });
//     await prisma.$disconnect();
//     return response.status(200).json(bloqueo);
//   } catch (error) {
//     await prisma.$disconnect();
//     return response.status(400).send("Error: Bloqueo no pudo ser agregado");
//   }
// }



export async function CrearBloqueo(request: Request, response: Response) {
  const { fecha, hora_inicio, hora_fin, id_sucursal, dia_semana, repeticion } = request.body;

  const horaInicio = new Date(hora_inicio);
  const horaFin = new Date(hora_fin);
  const fechaBloqueo = new Date(fecha);

  // Validación de fecha vigente
  const fechaActual = new Date();
  if (fechaBloqueo.setHours(0, 0, 0, 0) < fechaActual.setHours(0, 0, 0, 0)) {
    return response.status(400).send("Error: La fecha debe ser actual o futura");
  }

  // Validación de sobreposición de bloqueos con otros bloqueos
  const overlappingBloqueos = await prisma.horario.findMany({
    where: {
      id_sucursal: id_sucursal,
      bloqueo: true,
      OR: [
        {
          hora_inicio: {
            lt: hora_fin,
          },
          hora_fin: {
            gt: hora_inicio,
          },
        },
      ],
    },
  });

  if (overlappingBloqueos.length > 0) {
    return response.status(400).send("Error: Sobreposición de bloqueos");
  }

  try {
    const bloqueo = await prisma.horario.create({
      data: {
        fecha,
        dia_semana,
        hora_inicio: horaInicio,
        hora_fin: horaFin,
        id_sucursal,
        repeticion,
        bloqueo: true
      }
    });
    await prisma.$disconnect();
    return response.status(200).json(bloqueo);
  } catch (error) {
    await prisma.$disconnect();
    return response.status(400).send("Error: Bloqueo no pudo ser agregado");
  }
}

 