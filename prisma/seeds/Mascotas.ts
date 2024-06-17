import { Sexo } from "@prisma/client";

export const mascotas = [
  {
    nombre: 'Firulais',
    especie: 'Perro',
    raza: 'Labrador',
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date('2015-08-01'),
    id_cliente: 1,
  },
  {
    nombre: 'Misu',
    especie: 'Gato',
    raza: 'Siamés',
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date('2017-02-14'),
    id_cliente: 2,
  },
  {
    nombre: 'Bobby',
    especie: 'Perro',
    raza: 'Beagle',
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date('2016-11-30'),
    id_cliente: 3,
  },
];