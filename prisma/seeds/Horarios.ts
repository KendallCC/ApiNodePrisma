import { TipoRepeticion } from "@prisma/client";
import { DiaSemana } from "@prisma/client";

export const horarios = [
  {
    id_sucursal: 1,
    dia_semana: DiaSemana.Lunes,
    hora_inicio: new Date("2024-01-01T08:00:00Z"),
    hora_fin: new Date("2024-01-01T17:00:00Z"),
    fecha: new Date("2024-01-01T00:00:00Z"),
    bloqueo: false,
    repeticion: TipoRepeticion.Ninguno,
  },
  {
    id_sucursal: 1,
    dia_semana: DiaSemana.Martes,
    hora_inicio: new Date("2024-01-02T08:00:00Z"),
    hora_fin: new Date("2024-01-02T17:00:00Z"),
    fecha: new Date("2024-01-02T00:00:00Z"),
    bloqueo: true,
    repeticion: TipoRepeticion.Diario,
  },
  {
    id_sucursal: 2,
    dia_semana: DiaSemana.Miercoles,
    hora_inicio: new Date("2024-01-03T08:00:00Z"),
    hora_fin: new Date("2024-01-03T17:00:00Z"),
    fecha: new Date("2024-01-03T00:00:00Z"),
    bloqueo: false,
    repeticion: TipoRepeticion.Semanal,
  },
  {
    id_sucursal: 2,
    dia_semana: DiaSemana.Jueves,
    hora_inicio: new Date("2024-01-04T08:00:00Z"),
    hora_fin: new Date("2024-01-04T17:00:00Z"),
    fecha: new Date("2024-01-04T00:00:00Z"),
    bloqueo: true,
    repeticion: TipoRepeticion.Mensual,
  },
];
