import { TipoRepeticion } from "@prisma/client";
import { DiaSemana } from "@prisma/client";


export const horarios = [
  {
    id_sucursal: 1,
    dia_semana: DiaSemana.Lunes,
    hora_inicio: new Date('1970-01-01T06:00:00Z'),
    hora_fin: new Date('1970-01-01T16:00:00Z'),
    bloqueo: false,
    repeticion: TipoRepeticion.Semanal,
  },
  {
    id_sucursal: 1,
    dia_semana: DiaSemana.Martes,
    hora_inicio: new Date('1970-01-01T06:00:00Z'),
    hora_fin: new Date('1970-01-01T16:00:00Z'),
    bloqueo: false,
    repeticion: TipoRepeticion.Semanal
  },
];