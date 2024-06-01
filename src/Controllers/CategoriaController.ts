import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarCategorias(request: Request, response: Response) {
    await prisma.categoria.findMany().then(async (categorias) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(categorias)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:categorias no encontradas');
    })
}

export async function ObtenerCategoria(request: Request, response: Response) {
    const id = request.params.id
    await prisma.categoria.findFirst(
        {
            where: { id: parseInt(id) }
        }
    ).then(async (categorias) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(categorias)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:categoria no encontradas');
    })
}

export async function CrearCategoria(request: Request, response: Response) {

    await prisma.categoria.create(
        {
            data: request.body
        }
    ).then(async (categoria) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(categoria)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:categoria no pudo ser agregada');
    })
}

export async function ActualizarCategoria(request: Request, response: Response) {

    await prisma.categoria.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (categoria) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(categoria)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:categoria no pudo ser Actualizada');
    })
}

