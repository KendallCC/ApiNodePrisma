import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export async function obtenerCitasPorSucursalHoy(req: Request, res: Response) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const citasPorSucursal = await prisma.cita.groupBy({
      by: ['id_sucursal'],
      _count: {
        id: true,
      },
      where: {
        fecha_cita: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // Hasta el final del día
        },
      },
    });

    // Obtener los detalles de las sucursales
    const sucursalesIds = citasPorSucursal.map(cita => cita.id_sucursal);
    const sucursales = await prisma.sucursal.findMany({
      where: { id: { in: sucursalesIds } },
    });

    // Combinar los resultados
    const resultado = citasPorSucursal.map(cita => {
      const sucursal = sucursales.find(s => s.id === cita.id_sucursal);
      return {
        id_sucursal: cita.id_sucursal,
        nombre_sucursal: sucursal?.nombre || 'Sucursal no encontrada',
        cantidad_citas: cita._count.id,
      };
    });

    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener citas por sucursal:', error);
    res.status(500).json({ error: 'Error al obtener citas por sucursal' });
  }
}



export async function obtenerTopServiciosVendidos(req: Request, res: Response) {
    try {
      const topServicios = await prisma.detalleFactura.groupBy({
        by: ['id_servicio'],
        _sum: {
          cantidad: true,
        },
        orderBy: {
          _sum: {
            cantidad: 'desc',
          },
        },
        take: 3,
        where: {
          id_servicio: {
            not: null, // Solo considerar servicios
          },
        },
      });
  
      // Obtener los detalles de los servicios
      const serviciosIds = topServicios.map(servicio => servicio.id_servicio);
      const servicios = await prisma.servicio.findMany({
        where: { id: { in: serviciosIds } },
      });
  
      // Combinar los resultados
      const resultado = topServicios.map(servicio => {
        const detalleServicio = servicios.find(s => s.id === servicio.id_servicio);
        return {
          id_servicio: servicio.id_servicio,
          nombre_servicio: detalleServicio?.nombre || 'Servicio no encontrado',
          cantidad_vendida: servicio._sum.cantidad,
        };
      });
  
      res.json(resultado);
    } catch (error) {
      console.error('Error al obtener servicios más vendidos:', error);
      res.status(500).json({ error: 'Error al obtener servicios más vendidos' });
    }
  }

  

export async function obtenerTopProductosVendidos(req: Request, res: Response) {
  try {
    const topProductos = await prisma.detalleFactura.groupBy({
      by: ['id_producto'],
      _sum: {
        cantidad: true,
      },
      orderBy: {
        _sum: {
          cantidad: 'desc',
        },
      },
      take: 3,
      where: {
        id_producto: {
          not: null, // Solo considerar productos
        },
      },
    });

    // Obtener los detalles de los productos
    const productosIds = topProductos.map(producto => producto.id_producto);
    const productos = await prisma.producto.findMany({
      where: { id: { in: productosIds } },
    });

    // Combinar los resultados
    const resultado = topProductos.map(producto => {
      const detalleProducto = productos.find(p => p.id === producto.id_producto);
      return {
        id_producto: producto.id_producto,
        nombre_producto: detalleProducto?.nombre || 'Producto no encontrado',
        cantidad_vendida: producto._sum.cantidad,
      };
    });

    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener productos más vendidos:', error);
    res.status(500).json({ error: 'Error al obtener productos más vendidos' });
  }
}
