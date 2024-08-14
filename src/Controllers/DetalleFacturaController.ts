import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export async function ListardetalleFacturas(
  request: Request,
  response: Response
) {
  await prisma.detalleFactura
    .findMany()
    .then(async (detallefacturas) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(detallefacturas);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:Detalle facturas no encontradas");
    });
}

export async function ObtenerdetalleFactura(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const detallefacturas = await prisma.detalleFactura.findMany({
      where: { id_factura: parseInt(id) },
      include: {
        producto: true,
        servicio: true,
        factura: {
          select: {
            cita: {
              select: {
                sucursal: true,
                cliente: true
              }
            },
            fecha_factura: true
          }
        }
      }
    });

    await prisma.$disconnect();
    res.status(200).json(detallefacturas);
  } catch (error) {
    console.error("Error al obtener detalle de la factura:", error);
    await prisma.$disconnect();
    res.status(400).send("Error: Detalle Factura no encontradas");
  }
}




export async function CrearDetalleFactura(
  request: Request,
  response: Response
) {
  await prisma.detalleFactura
    .create({
      data: request.body,
    })
    .then(async (detalleFactura) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(detalleFactura);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:Detalle Factura no pudo ser agregada");
    });
}

export async function ActualizarDetalleFactura(
  request: Request,
  response: Response
) {
  await prisma.detalleFactura
    .update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    })
    .then(async (detalleFactura) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(detalleFactura);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response
        .status(400)
        .send("Error:Detalle Factura no pudo ser Actualizada");
    });
}
