import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarHorarios(request: Request, response: Response) {
    await prisma.horario.findMany().then(async (horario) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(horario)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Horario no encontradas');
    })
}

export async function ObtenerHorario(request: Request, response: Response) {
    const id = request.params.id
    await prisma.horario.findFirst(
        {
            where: { id: parseInt(id) }
            
        }
    ).then(async (horario) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(horario)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Horario no encontradas');
    })
}

export async function CrearHorario(request: Request, response: Response) {

    await prisma.horario.create(
        {
            data: request.body
        }
    ).then(async (horario) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(horario)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Horario no pudo ser agregada');
    })
}

export async function ActualizarHorario(request: Request, response: Response) {

    await prisma.horario.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (horario) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(horario)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Horario no pudo ser Actualizada');
    })
}
