import { EstadoFactura, MetodoPago } from "@prisma/client";

export const facturas = [
  {
    id_cita: 1,
    fecha_factura: new Date('2024-06-18T14:30:00Z'),
    subtotal: 15000,
    impuesto: 1950,
    total: 16950,
    metodo_pago: MetodoPago.Efectivo,
    estado: EstadoFactura.Proforma,
  },
  {
    id_cita: 2,
    fecha_factura: new Date('2024-06-19T15:30:00Z'),
    subtotal: 25000,
    impuesto: 3250,
    total: 28250,
    metodo_pago: MetodoPago.Tarjeta,
    estado: EstadoFactura.Facturada,
  },
  {
    id_cita: 3,
    fecha_factura: new Date('2024-06-20T16:30:00Z'),
    subtotal: 20000,
    impuesto: 2600,
    total: 22600,
    metodo_pago: MetodoPago.Transferencia,
    estado: EstadoFactura.Facturada,
  },
];
