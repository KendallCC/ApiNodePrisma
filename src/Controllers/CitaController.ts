import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();



export async function ListarporEncargado(request: Request, response: Response) {
    const id = request.params.id
    await prisma.usuario.findUnique({
        where: { id: parseInt(id), rol:"encargado"},
  select: {
    sucursal: {
      select: {
        id: true,
        nombre: true,
        citas: {
          select: {
            id: true,
            fecha_cita: true,
            hora_cita: true,
            estado: true,
          },
        },
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




export async function ListarCitas(request: Request, response: Response) {
    await prisma.cita.findMany({
        select:{
            condicion:true,
                estado:true,
                fecha_cita:true,
                id:true,
                hora_cita:true,
                motivo:true,
                observaciones:true,
                vacunas:true
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
    const id = request.params.id
    await prisma.cita.findFirst(
        {
            where: { id: parseInt(id) },
            select:{
                condicion:true,
                estado:true,
                fecha_cita:true,
                id:true,
                hora_cita:true,
                motivo:true,
                observaciones:true,
                vacunas:true,
                cliente:true,
                servicio:true,
                sucursal:true,
                mascota:true,
               

            }
        }
    ).then(async (citas) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(citas)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Cita no encontradas');
    })
}

export async function CrearCita(request: Request, response: Response) {

    await prisma.cita.create(
        {
            data: request.body
        }
    ).then(async (cita) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(cita)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Cita no pudo ser agregada');
    })
}

export async function ActualizarCita(request: Request, response: Response) {

    await prisma.cita.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (cita) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(cita)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Cita no pudo ser Actualizada');
    })
}

