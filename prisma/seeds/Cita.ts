import { EstadoCita } from "@prisma/client";

export const citas = [
  {
    id_cliente: 1,
    id_mascota: 1,
    id_servicio: 1,
    id_sucursal: 1,
    fecha_cita: new Date("2024-07-26T17:00:00Z"),
    hora_cita: new Date("2024-07-26T17:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Primera visita",
    motivo: "Consulta general",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 2,
    id_mascota: 3,
    id_servicio: 2,
    id_sucursal: 2,
    fecha_cita: new Date("2024-06-21T16:00:00Z"),
    hora_cita: new Date("2024-06-21T16:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Vacunación anual",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 3,
    id_mascota: 5,
    id_servicio: 3,
    id_sucursal: 3,
    fecha_cita: new Date("2024-06-22T16:00:00Z"),
    hora_cita: new Date("2024-06-22T16:00:00Z"),
    estado: EstadoCita.Completada,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 4,
    id_mascota: 7,
    id_servicio: 4,
    id_sucursal: 4,
    fecha_cita: new Date("2024-06-23T21:00:00Z"),
    hora_cita: new Date("2024-06-23T21:00:00Z"),
    estado: EstadoCita.Reprogramada,
    observaciones: "Consulta de rutina",
    motivo: "Consulta general",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 5,
    id_mascota: 9,
    id_servicio: 5,
    id_sucursal: 5,
    fecha_cita: new Date("2024-06-24T16:00:00Z"),
    hora_cita: new Date("2024-06-24T16:00:00Z"),
    estado: EstadoCita.Cancelada,
    observaciones: "Vacunación anual",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 6,
    id_mascota: 11,
    id_servicio: 6,
    id_sucursal: 6,
    fecha_cita: new Date("2024-06-25T18:00:00Z"),
    hora_cita: new Date("2024-06-25T18:00:00Z"),
    estado: EstadoCita.No_asistio,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 7,
    id_mascota: 13,
    id_servicio: 7,
    id_sucursal: 7,
    fecha_cita: new Date("2024-06-26T21:00:00Z"),
    hora_cita: new Date("2024-06-26T21:00:00Z"),
    estado: EstadoCita.Pendiente,
    observaciones: "Revisión general",
    motivo: "Consulta general",
    condicion: "Alergias",
    vacunas: "Al día",
  },
  {
    id_cliente: 8,
    id_mascota: 15,
    id_servicio: 8,
    id_sucursal: 8,
    fecha_cita: new Date("2024-06-27T16:00:00Z"),
    hora_cita: new Date("2024-06-27T16:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Vacunación",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 9,
    id_mascota: 17,
    id_servicio: 9,
    id_sucursal: 9,
    fecha_cita: new Date("2024-06-28T18:00:00Z"),
    hora_cita: new Date("2024-06-28T18:00:00Z"),
    estado: EstadoCita.Completada,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 10,
    id_mascota: 19,
    id_servicio: 10,
    id_sucursal: 10,
    fecha_cita: new Date("2024-06-29T21:00:00Z"),
    hora_cita: new Date("2024-06-29T21:00:00Z"),
    estado: EstadoCita.Reprogramada,
    observaciones: "Consulta",
    motivo: "Consulta general",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 11,
    id_mascota: 21,
    id_servicio: 11,
    id_sucursal: 1,
    fecha_cita: new Date("2024-06-30T16:00:00Z"),
    hora_cita: new Date("2024-06-30T16:00:00Z"),
    estado: EstadoCita.Cancelada,
    observaciones: "Vacunación",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 12,
    id_mascota: 23,
    id_servicio: 12,
    id_sucursal: 2,
    fecha_cita: new Date("2024-07-01T16:00:00Z"),
    hora_cita: new Date("2024-07-01T16:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 13,
    id_mascota: 25,
    id_servicio: 13,
    id_sucursal: 3,
    fecha_cita: new Date("2024-07-02T21:00:00Z"),
    hora_cita: new Date("2024-07-02T21:00:00Z"),
    estado: EstadoCita.Pendiente,
    observaciones: "Primera visita",
    motivo: "Consulta general",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 14,
    id_mascota: 27,
    id_servicio: 14,
    id_sucursal: 4,
    fecha_cita: new Date("2024-07-03T16:00:00Z"),
    hora_cita: new Date("2024-07-03T16:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Vacunación anual",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 15,
    id_mascota: 29,
    id_servicio: 15,
    id_sucursal: 5,
    fecha_cita: new Date("2024-07-04T11:00:00Z"),
    hora_cita: new Date("2024-07-04T11:00:00Z"),
    estado: EstadoCita.Completada,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 16,
    id_mascota: 31,
    id_servicio: 16,
    id_sucursal: 6,
    fecha_cita: new Date("2024-07-05T21:00:00Z"),
    hora_cita: new Date("2024-07-05T21:00:00Z"),
    estado: EstadoCita.Reprogramada,
    observaciones: "Consulta de rutina",
    motivo: "Consulta general",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 17,
    id_mascota: 33,
    id_servicio: 17,
    id_sucursal: 7,
    fecha_cita: new Date("2024-07-06T16:00:00Z"),
    hora_cita: new Date("2024-07-06T16:00:00Z"),
    estado: EstadoCita.Cancelada,
    observaciones: "Vacunación anual",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  },
  {
    id_cliente: 18,
    id_mascota: 35,
    id_servicio: 18,
    id_sucursal: 8,
    fecha_cita: new Date("2024-07-07T15:00:00Z"),
    hora_cita: new Date("2024-07-07T15:00:00Z"),
    estado: EstadoCita.No_asistio,
    observaciones: "Desparasitación",
    motivo: "Parásitos",
    condicion: "Ninguna",
    vacunas: "Al día",
  },
  {
    id_cliente: 19,
    id_mascota: 37,
    id_servicio: 19,
    id_sucursal: 9,
    fecha_cita: new Date("2024-07-08T21:00:00Z"),
    hora_cita: new Date("2024-07-08T21:00:00Z"),
    estado: EstadoCita.Pendiente,
    observaciones: "Revisión general",
    motivo: "Consulta general",
    condicion: "Alergias",
    vacunas: "Al día",
  },
  {
    id_cliente: 20,
    id_mascota: 39,
    id_servicio: 20,
    id_sucursal: 10,
    fecha_cita: new Date("2024-07-09T17:00:00Z"),
    hora_cita: new Date("2024-07-09T17:00:00Z"),
    estado: EstadoCita.Confirmada,
    observaciones: "Vacunación",
    motivo: "Vacunas",
    condicion: "Ninguna",
    vacunas: "Parcial",
  }
];
