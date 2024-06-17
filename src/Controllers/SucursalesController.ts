import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();



export async function ListarSucursales(request: Request, response: Response) {
    await prisma.sucursal.findMany().then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Sucursales no encontradas');
    })
}

export async function ObtenerSucursales(request: Request, response: Response) {
    const id = request.params.id
    await prisma.sucursal.findFirst(
        {
            where: { id: parseInt(id) }
            
        }
    ).then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no encontradas');
    })
}

export async function CrearSucursales(request: Request, response: Response) {

    await prisma.sucursal.create(
        {
            data: request.body
        }
    ).then(async (sucursal) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(sucursal)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no pudo ser agregada');
    })
}

export async function ActualizarSucursales(request: Request, response: Response) {

    await prisma.sucursal.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (sucursal) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(sucursal)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no pudo ser Actualizada');
    })
}