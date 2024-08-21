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
  const fechahoy= new Date()
  
  const {
    fecha_factura=fechahoy,
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



export async function ActualizarFacturaYcitas(req: Request, res: Response) {
  const {
    detalle_productos,
    detalle_servicios,
    subtotal,
    impuesto,
    total,
    estado,
    metodo_pago
  } = req.body;

  const { id } = req.params; // Obtener el id de la factura desde el parámetro de la URL

  try {
    // Obtener la factura existente con la cita relacionada
    const facturaExistente = await prisma.factura.findUnique({
      where: { id: Number(id) }, // Usar el id obtenido de los parámetros
      include: {
        detalle_factura: true,
        cita: true, // Relación 1:1 con la cita
      },
    });

    if (!facturaExistente) {
      return res.status(404).json('Factura no encontrada.');
    }

    // Manejar los servicios
    if (detalle_servicios.length > 0) {
      // Si hay servicios, debemos verificar si hay citas asociadas y actualizarlas
      if (facturaExistente.cita) {
        // Si ya hay una cita, la actualizamos
        await prisma.cita.update({
          where: { id: facturaExistente.cita.id },
          data: {
            estado:'Confirmada'
          },
        });
      } 
    } else {
      // Si no hay servicios en la nueva factura pero había una cita, eliminamos la cita
      if (facturaExistente.cita) {
        await prisma.cita.delete({
          where: { id: facturaExistente.cita.id },
        });
      }
    }

    // Actualizar la factura
    const facturaActualizada = await prisma.factura.update({
      where: { id: Number(id) }, // Usar el id obtenido de los parámetros
      data: {
        subtotal,
        impuesto,
        total,
        estado,
        metodo_pago,
        detalle_factura: {
          deleteMany: {}, // Eliminar los detalles anteriores
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
              cantidad: 1, // La cantidad es 1 para servicios
              precio_unitario: servicio.precio_unitario,
              total_item: servicio.total_item,
            })),
          ],
        },
      },
      include: { detalle_factura: true, cita: true },
    });

    res.status(200).json(facturaActualizada);
  } catch (error) {
    console.error('Error al actualizar la factura y las citas:', error.message);
    res.status(500).json('Error al actualizar la factura y las citas.');
  } finally {
    await prisma.$disconnect();
  }
}

// export async function CrearFacturaSoloProductos(request: Request, response: Response) {
//   const {
//     fecha_factura = new Date(),
//     detalle_productos,
//     subtotal,
//     impuesto,
//     total,
//     estado,
//     metodo_pago
//   } = request.body;

//   const { id_cliente, id_sucursal } = request.body.user; // Datos del usuario


//   console.log(id_cliente,id_sucursal);
  
//   try {
//     // Primero, crea una cita "dummy" para asociarla a la factura
//     const nuevaCita = await prisma.cita.create({
//       data: {
//         cliente: { connect: { id: id_cliente } }, // Asociar la cita al cliente
//         sucursal: { connect: { id: id_sucursal } }, // Asociar la cita a la sucursal del cliente
//         fecha_cita: new Date(), // Usar la fecha actual como fecha de la cita
//         hora_cita: new Date(), // Usar la hora actual
//         estado: 'Confirmada', // Estado predeterminado para la cita
//         observaciones: 'Cita generada automáticamente para la compra de productos',
//         motivo: 'Compra de productos',
//         condicion: '',
//         vacunas: '',
//       }
//     });

//     // Luego, crea la factura asociada a la cita recién creada
//     const nuevaFactura = await prisma.factura.create({
//       data: {
//         fecha_factura: new Date(fecha_factura),
//         subtotal,
//         impuesto,
//         total,
//         estado,
//         metodo_pago,
//         cita: {
//           connect: { id: nuevaCita.id }, // Conectar la factura con la cita recién creada
//         },
//         detalle_factura: {
//           create: detalle_productos.map((producto: any) => ({
//             producto: {
//               connect: { id: producto.id_producto }, // Conectar producto por ID
//             },
//             cantidad: producto.cantidad,
//             precio_unitario: producto.precio_unitario,
//             total_item: producto.total_item,
//           })),
//         },
//       },
//       include: {
//         detalle_factura: true, // Incluye los detalles en la respuesta
//       },
//     });

//     response.status(200).json(nuevaFactura);
//   } catch (error) {
//     console.error("Error al crear factura:", error.message);
//     response.status(400).send(`Error: la factura no pudo ser agregada - ${error.message}`);
//   } finally {
//     await prisma.$disconnect();
//   }
// }



export async function CrearFacturaSoloProductos(request: Request, response: Response) {
  const {
    facturaId,
    detalle_productos,
    detalle_servicios,
    subtotal,
    impuesto,
    total,
    estado = 'Facturada',
    metodo_pago = 'Efectivo',
    user: { id_cliente, id_sucursal },
  } = request.body;

  try {
    let citaId;

    if (facturaId) {
      // Obtener la factura existente
      const facturaExistente = await prisma.factura.findUnique({
        where: { id: facturaId },
        include: { cita: true, detalle_factura: true },
      });

      if (facturaExistente) {
        citaId = facturaExistente.id_cita;

        // Si hay servicios, actualizamos la cita y la factura
        if (detalle_servicios.length > 0) {
          await prisma.cita.update({
            where: { id: citaId },
            data: {
              estado: 'Confirmada', // Estado confirmado para la cita
              // Otros campos que puedas necesitar actualizar
            },
          });

          await prisma.factura.update({
            where: { id: facturaId },
            data: {
              subtotal,
              impuesto,
              total,
              estado, // Estado facturado
              metodo_pago,
              detalle_factura: {
                deleteMany: {}, // Borra todos los detalles actuales
                create: [
                  ...detalle_productos.map((producto: any) => ({
                    producto: { connect: { id: producto.id_producto } },
                    cantidad: producto.cantidad,
                    precio_unitario: producto.precio_unitario,
                    total_item: producto.total_item,
                  })),
                  ...detalle_servicios.map((servicio: any) => ({
                    servicio: { connect: { id: servicio.id_servicio } },
                    cantidad: 1,
                    precio_unitario: servicio.precio_unitario,
                    total_item: servicio.total_item,
                  })),
                ],
              },
            },
          });
        } else {
          // Si solo hay productos y se han eliminado los servicios, elimina los servicios de la cita
          await prisma.detalleFactura.deleteMany({
            where: {
              id_factura: facturaId,
              id_servicio: { not: null }, // Elimina solo los servicios
            },
          });

          await prisma.factura.update({
            where: { id: facturaId },
            data: {
              subtotal,
              impuesto,
              total,
              estado,
              metodo_pago,
              detalle_factura: {
                deleteMany: {},
                create: detalle_productos.map((producto: any) => ({
                  producto: { connect: { id: producto.id_producto } },
                  cantidad: producto.cantidad,
                  precio_unitario: producto.precio_unitario,
                  total_item: producto.total_item,
                })),
              },
            },
          });

          // Si ya no hay servicios, actualizar el estado de la cita
          await prisma.cita.update({
            where: { id: citaId },
            data: {
              estado: 'Pendiente', // Cambiar el estado a pendiente o lo que necesites
            },
          });
        }
      }
    } else {
      // Crear una cita dummy si no hay facturaId
      const nuevaCita = await prisma.cita.create({
        data: {
          cliente: { connect: { id: id_cliente } },
          sucursal: { connect: { id: id_sucursal } },
          fecha_cita: new Date(),
          hora_cita: new Date(),
          estado: 'Confirmada',
          observaciones: 'Cita generada automáticamente para la compra de productos',
          motivo: 'Compra de productos',
          condicion: '',
          vacunas: '',
        },
      });

      citaId = nuevaCita.id;

      // Crear una nueva factura asociada a la cita dummy
      await prisma.factura.create({
        data: {
          fecha_factura: new Date(),
          subtotal,
          impuesto,
          total,
          estado,
          metodo_pago,
          cita: { connect: { id: citaId } },
          detalle_factura: {
            create: detalle_productos.map((producto: any) => ({
              producto: { connect: { id: producto.id_producto } },
              cantidad: producto.cantidad,
              precio_unitario: producto.precio_unitario,
              total_item: producto.total_item,
            })),
          },
        },
        include: {
          detalle_factura: true,
        },
      });
    }

    response.status(200).json({ message: 'Factura procesada correctamente' });
  } catch (error) {
    console.error('Error al gestionar la factura:', error.message);
    response.status(400).send(`Error: No se pudo procesar la factura - ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}