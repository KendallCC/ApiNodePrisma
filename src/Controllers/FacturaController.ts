import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export async function ListarFacturas(request: Request, response: Response) {
  await prisma.factura
    .findMany({
      include: {
        cita: { select:{cliente:{select:{id:true}},id_sucursal:true}
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
      response.status(400).send("Error: facturas no encontradas");
    });
}

export async function ObtenerFactura(request: Request, response: Response) {
  const id = request.params.id;
  await prisma.factura
    .findFirst({
      where: { id: parseInt(id) },
      select: {
        fecha_factura:true,
        estado:true,
        metodo_pago:true,
        detalle_factura: {
          select: {
            id: true,
            cantidad: true,
            precio_unitario: true,
            total_item: true,
            producto:true,
            servicio:true
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
                id:true,
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
  const {
    fecha_factura,
    cliente,
    detalle_productos,
    detalle_servicios,
    subtotal,
    impuesto,
    total,
    estado,
    metodo_pago
  } = request.body;

  try {
    const nuevaFactura = await prisma.factura.create({
      data: {
        fecha_factura: new Date(fecha_factura),
        subtotal,
        impuesto,
        total,
        estado,
        metodo_pago, // Ajusta según tu lógica
        cita: {
          connect: { id: cliente }, // Conectar con la cita usando el ID del cliente
        },
        detalle_factura: {
          create: [
            ...detalle_productos.map((producto: any) => ({
              producto: {
                connect: { id: producto.id_producto }, // Conectar producto por ID
              },
              cantidad: producto.cantidad,
              precio_unitario: producto.precio_unitario,
              total_item: producto.total_item,
            })),
            ...detalle_servicios.map((servicio: any) => ({
              servicio: {
                connect: { id: servicio.id_servicio }, // Conectar servicio por ID
              },
              precio_unitario: servicio.precio_unitario,
              total_item: servicio.total_item,
              cantidad: 1, // La cantidad es 1 para servicios
            })),
          ],
        },
      },
      include: {
        detalle_factura: true, // Incluye los detalles en la respuesta
      },
    });

    response.status(200).json(nuevaFactura);
  } catch (error) {
    console.error("Error al crear factura:", error.message);
    response.status(400).send(`Error: la factura no pudo ser agregada - ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function ActualizarFactura(request: Request, response: Response) {
  const { detalle_productos, detalle_servicios, subtotal, impuesto, total , estado,metodo_pago} = request.body;
  
  try {
    const facturaActualizada = await prisma.factura.update({
      where: { id: parseInt(request.params.id) },
      data: {
        fecha_factura: new Date(request.body.fecha_factura),
        subtotal,
        impuesto,
        total,
        estado,
        metodo_pago,
        detalle_factura: {
          deleteMany: {}, // Borra todos los detalles existentes de la factura

          create: [
            // Crear nuevos detalles para productos
            ...detalle_productos.map((producto: any) => ({
              producto: {
                connect: { id: producto.id_producto }, // Conectar por ID de producto
              },
              cantidad: producto.cantidad,
              precio_unitario: producto.precio_unitario,
              total_item: producto.total_item,
            })),
            // Crear nuevos detalles para servicios
            ...detalle_servicios.map((servicio: any) => ({
              servicio: {
                connect: { id: servicio.id_servicio }, // Conectar por ID de servicio
              },
              cantidad: 1, // Asume que la cantidad es 1 para servicios
              precio_unitario: servicio.precio_unitario,
              total_item: servicio.total_item,
            })),
          ],
        },
      },
      include: {
        detalle_factura: true, // Incluir detalles de la factura en la respuesta
      },
    });

    response.status(200).json(facturaActualizada);
  } catch (error) {
    console.error("Error al actualizar factura:", error.message);
    response.status(400).send(`Error: la factura no pudo ser actualizada - ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}