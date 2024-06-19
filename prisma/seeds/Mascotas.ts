import { Sexo } from "@prisma/client";

export const mascotas = [
  // Mascotas para el Usuario 1
  {
    nombre: "Firulais",
    especie: "Perro",
    raza: "Labrador",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2015-01-01"),
    id_cliente: 1,
  },
  {
    nombre: "Michi",
    especie: "Gato",
    raza: "Siames",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2017-02-02"),
    id_cliente: 1,
  },

  // Mascotas para el Usuario 2
  {
    nombre: "Rex",
    especie: "Perro",
    raza: "Pastor Alemán",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2016-03-03"),
    id_cliente: 2,
  },
  {
    nombre: "Luna",
    especie: "Gato",
    raza: "Bengala",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2018-04-04"),
    id_cliente: 2,
  },

  // Mascotas para el Usuario 3
  {
    nombre: "Max",
    especie: "Perro",
    raza: "Golden Retriever",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2014-05-05"),
    id_cliente: 3,
  },
  {
    nombre: "Bella",
    especie: "Gato",
    raza: "Persa",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2019-06-06"),
    id_cliente: 3,
  },

  // Mascotas para el Usuario 4
  {
    nombre: "Rocky",
    especie: "Perro",
    raza: "Bulldog",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2013-07-07"),
    id_cliente: 4,
  },
  {
    nombre: "Nina",
    especie: "Gato",
    raza: "Maine Coon",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2020-08-08"),
    id_cliente: 4,
  },

  // Mascotas para el Usuario 5
  {
    nombre: "Buddy",
    especie: "Perro",
    raza: "Beagle",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2012-09-09"),
    id_cliente: 5,
  },
  {
    nombre: "Kira",
    especie: "Gato",
    raza: "Sphynx",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2021-10-10"),
    id_cliente: 5,
  },

  // Mascotas para el Usuario 6
  {
    nombre: "Toby",
    especie: "Perro",
    raza: "Cocker Spaniel",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2011-11-11"),
    id_cliente: 6,
  },
  {
    nombre: "Chloe",
    especie: "Gato",
    raza: "Ragdoll",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2015-12-12"),
    id_cliente: 6,
  },

  // Mascotas para el Usuario 7
  {
    nombre: "Charlie",
    especie: "Perro",
    raza: "Poodle",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2010-01-01"),
    id_cliente: 7,
  },
  {
    nombre: "Lola",
    especie: "Gato",
    raza: "Británico",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2016-02-02"),
    id_cliente: 7,
  },

  // Mascotas para el Usuario 8
  {
    nombre: "Duke",
    especie: "Perro",
    raza: "Dálmata",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2009-03-03"),
    id_cliente: 8,
  },
  {
    nombre: "Molly",
    especie: "Gato",
    raza: "Birmano",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2017-04-04"),
    id_cliente: 8,
  },

  // Mascotas para el Usuario 9
  {
    nombre: "Buster",
    especie: "Perro",
    raza: "Boxer",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2008-05-05"),
    id_cliente: 9,
  },
  {
    nombre: "Sasha",
    especie: "Gato",
    raza: "Siberiano",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2018-06-06"),
    id_cliente: 9,
  },

  // Mascotas para el Usuario 10
  {
    nombre: "Cooper",
    especie: "Perro",
    raza: "Chihuahua",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2007-07-07"),
    id_cliente: 10,
  },
  {
    nombre: "Daisy",
    especie: "Gato",
    raza: "Escocés",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2019-08-08"),
    id_cliente: 10,
  },

  // Mascotas para el Usuario 11
  {
    nombre: "Jack",
    especie: "Perro",
    raza: "Pitbull",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2006-09-09"),
    id_cliente: 11,
  },
  {
    nombre: "Mimi",
    especie: "Gato",
    raza: "Ruso Azul",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2020-10-10"),
    id_cliente: 11,
  },

  // Mascotas para el Usuario 12
  {
    nombre: "Zeus",
    especie: "Perro",
    raza: "Husky",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2005-11-11"),
    id_cliente: 12,
  },
  {
    nombre: "Simba",
    especie: "Gato",
    raza: "Egipcio",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2021-12-12"),
    id_cliente: 12,
  },

  // Mascotas para el Usuario 13
  {
    nombre: "Apollo",
    especie: "Perro",
    raza: "Doberman",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2004-01-01"),
    id_cliente: 13,
  },
  {
    nombre: "Cleo",
    especie: "Gato",
    raza: "Singapur",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2015-02-02"),
    id_cliente: 13,
  },

  // Mascotas para el Usuario 14
  {
    nombre: "Thor",
    especie: "Perro",
    raza: "Rottweiler",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2003-03-03"),
    id_cliente: 14,
  },
  {
    nombre: "Nala",
    especie: "Gato",
    raza: "Manx",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2016-04-04"),
    id_cliente: 14,
  },

  // Mascotas para el Usuario 15
  {
    nombre: "Rocky",
    especie: "Perro",
    raza: "Bulldog Francés",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2002-05-05"),
    id_cliente: 15,
  },
  {
    nombre: "Lily",
    especie: "Gato",
    raza: "Cornish Rex",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2017-06-06"),
    id_cliente: 15,
  },

  // Mascotas para el Usuario 16
  {
    nombre: "Shadow",
    especie: "Perro",
    raza: "Akita",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2001-07-07"),
    id_cliente: 16,
  },
  {
    nombre: "Misty",
    especie: "Gato",
    raza: "Savannah",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2018-08-08"),
    id_cliente: 16,
  },

  // Mascotas para el Usuario 17
  {
    nombre: "Chase",
    especie: "Perro",
    raza: "Weimaraner",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("2000-09-09"),
    id_cliente: 17,
  },
  {
    nombre: "Angel",
    especie: "Gato",
    raza: "Chartreux",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2019-10-10"),
    id_cliente: 17,
  },

  // Mascotas para el Usuario 18
  {
    nombre: "Ziggy",
    especie: "Perro",
    raza: "Pug",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1999-11-11"),
    id_cliente: 18,
  },
  {
    nombre: "Ruby",
    especie: "Gato",
    raza: "Balinese",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2020-12-12"),
    id_cliente: 18,
  },

  // Mascotas para el Usuario 19
  {
    nombre: "Bruno",
    especie: "Perro",
    raza: "Shih Tzu",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1998-01-01"),
    id_cliente: 19,
  },
  {
    nombre: "Jasmine",
    especie: "Gato",
    raza: "Ocicat",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2015-02-02"),
    id_cliente: 19,
  },

  // Mascotas para el Usuario 20
  {
    nombre: "Marley",
    especie: "Perro",
    raza: "Jack Russell Terrier",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1997-03-03"),
    id_cliente: 20,
  },
  {
    nombre: "Pepper",
    especie: "Gato",
    raza: "Snowshoe",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2016-04-04"),
    id_cliente: 20,
  },

  // Mascotas para el Usuario 21
  {
    nombre: "Gizmo",
    especie: "Perro",
    raza: "Cavalier King Charles Spaniel",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1996-05-05"),
    id_cliente: 21,
  },
  {
    nombre: "Hazel",
    especie: "Gato",
    raza: "Toyger",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2017-06-06"),
    id_cliente: 21,
  },

  // Mascotas para el Usuario 22
  {
    nombre: "Tank",
    especie: "Perro",
    raza: "Bulmastiff",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1995-07-07"),
    id_cliente: 22,
  },
  {
    nombre: "Willow",
    especie: "Gato",
    raza: "American Curl",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2018-08-08"),
    id_cliente: 22,
  },

  // Mascotas para el Usuario 23
  {
    nombre: "Jax",
    especie: "Perro",
    raza: "Samoyedo",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1994-09-09"),
    id_cliente: 23,
  },
  {
    nombre: "Tinkerbell",
    especie: "Gato",
    raza: "Selkirk Rex",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2019-10-10"),
    id_cliente: 23,
  },

  // Mascotas para el Usuario 24
  {
    nombre: "Archie",
    especie: "Perro",
    raza: "Border Collie",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1993-11-11"),
    id_cliente: 24,
  },
  {
    nombre: "Sassy",
    especie: "Gato",
    raza: "Himalayo",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2020-12-12"),
    id_cliente: 24,
  },

  // Mascotas para el Usuario 25
  {
    nombre: "Scout",
    especie: "Perro",
    raza: "Boston Terrier",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1992-01-01"),
    id_cliente: 25,
  },
  {
    nombre: "Precious",
    especie: "Gato",
    raza: "Burmilla",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2015-02-02"),
    id_cliente: 25,
  },

  // Mascotas para el Usuario 26
  {
    nombre: "Ace",
    especie: "Perro",
    raza: "Shiba Inu",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1991-03-03"),
    id_cliente: 26,
  },
  {
    nombre: "Piper",
    especie: "Gato",
    raza: "Siamés",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2016-04-04"),
    id_cliente: 26,
  },

  // Mascotas para el Usuario 27
  {
    nombre: "Blu",
    especie: "Perro",
    raza: "Australian Shepherd",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1990-05-05"),
    id_cliente: 27,
  },
  {
    nombre: "Coco",
    especie: "Gato",
    raza: "Persa",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2017-06-06"),
    id_cliente: 27,
  },

  // Mascotas para el Usuario 28
  {
    nombre: "Finn",
    especie: "Perro",
    raza: "Pembroke Welsh Corgi",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1989-07-07"),
    id_cliente: 28,
  },
  {
    nombre: "Lulu",
    especie: "Gato",
    raza: "Birmano",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2018-08-08"),
    id_cliente: 28,
  },

  // Mascotas para el Usuario 29
  {
    nombre: "Hunter",
    especie: "Perro",
    raza: "Airedale Terrier",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1988-09-09"),
    id_cliente: 29,
  },
  {
    nombre: "Midnight",
    especie: "Gato",
    raza: "Manx",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2019-10-10"),
    id_cliente: 29,
  },

  // Mascotas para el Usuario 30
  {
    nombre: "Ranger",
    especie: "Perro",
    raza: "Rhodesian Ridgeback",
    sexo: Sexo.Macho,
    fecha_nacimiento: new Date("1987-11-11"),
    id_cliente: 30,
  },
  {
    nombre: "Pearl",
    especie: "Gato",
    raza: "Oriental",
    sexo: Sexo.Hembra,
    fecha_nacimiento: new Date("2020-12-12"),
    id_cliente: 30,
  },
];
