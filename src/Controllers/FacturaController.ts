import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export async function ListarFacturas(request: Request, response: Response) {
  await prisma.factura
    .findMany()
    .then(async (facturas) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(facturas);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:facturas no encontradas");
    });
}

export async function ObtenerFactura(request: Request, response: Response) {
  const id = request.params.id;
  await prisma.factura
    .findFirst({
      where: { id: parseInt(id) },
      select: {
        fecha_factura:true,
        detalle_factura: {
          select: {
            id: true,
            cantidad: true,
            precio_unitario: true,
            total_item: true,
            producto:{
                select:{
                    nombre:true,
                    precio:true
            }}
          },
        },
        cita: {
          select: {
            cliente: {
              select: {
                id: true,
                nombre: true,
              },
            },
            mascota: {
              select: {
                id: true,
                nombre: true,
              },
            },
            sucursal: {
              select: {
                nombre: true,
                telefono: true,
                direccion: true,
                correo_electronico: true,
              },
            },
          },
        },
      },
    })
    .then(async (facturas) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(facturas);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:factura no encontradas");
    });
}

export async function CrearFactura(request: Request, response: Response) {
  await prisma.factura
    .create({
      data: request.body,
    })
    .then(async (factura) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(factura);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:factura no pudo ser agregada");
    });
}

export async function ActualizarFactura(request: Request, response: Response) {
  await prisma.factura
    .update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    })
    .then(async (factura) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(factura);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:factura no pudo ser Actualizada");
    });
}
