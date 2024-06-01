
# Projecto con node, Express y Prisma

Este proyecto esta siendo realizado con prisma y Express en una base de datos mysql para una Tiendas de mascotas y clínicas veterinarias

## Authors

- [@KendallCC](https://github.com/KendallCC)


## Instalacion
Copiar el repositorio desde github o descargar el archivo
Luego ejecutar los siguientes comandos

```bash
  npm install 
```
Este comando instalara las dependencias necesarias
```bash
  npx prisma migrate dev --name init
```
Este comando migrara la base de datos del fichero que se encuentra dentro de prisma/schema.prisma
## Detalles del proyecto y Variables de Entorno

Para ejecutar este proyecto debe tener Xampp o mysql instalado y configurado en el puerto 3306 asi como un archivo .env con las siguientes variables.

`DATABASE_URL`: Url donde hara las migraciones a la base de datos

`PORT`: puerto donde correra la aplicacion (Configurado si no existe al puerto 3000)

ejemplo: 

`DATABASE_URL`: "mysql://johndoe:randompassword@localhost:3306/mydb"

`PORT`: 3000

## Despliegue
Para Iniciar el servidor y que funcione correctamente debe utilizar el comando

```bash
  npm run dev
```
Esto iniciara el programa y al realizar cambios en el codigo se actualizaran

## Referencias a la Api de categoria


#### Obtener Lista de Categorias

```http
  GET /categoria
```

| Parametro 
| :-------- 
| Ninguno 

#### Obtener Una Categoria

```http
  GET /categoria/${id}
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Number` | **Requerido**. Id de categoria a obtener|

#### Agregar una categoria

```http
  POST /categoria
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `String` | **Requerido**. Nombre de la categoria|

#### Actualizar una Categoria

```http
  PUT /categoria/${id}
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id de categoria a obtener|
| `nombre`      | `String` | **Requerido**. Nombre de la categoria|


## Referencias a la Api de Usuarios

#### Obtener Lista de Usuarios

```http
  GET /usuario
```

| Parametro 
| :-------- 
| Ninguno 

#### Obtener Un Usuario

```http
  GET /usuario/${id}
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Number` | **Requerido**. Id de usuario a obtener|

#### Agregar un Usuario

```http
  POST /usuario
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `String` | **Requerido**. Nombre del Usuario|

#### Actualizar un Usuario

```http
  PUT /usuario/${id}
```

| Parametro | Tipo de dato     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id del Usuario a obtener|
| `nombre`      | `String` | **Requerido**. Nombre del Usuario|
| `telefono`      | `String` | **Requerido**. Nombre del Usuario|
| `email`      | `String` | **Requerido**. email del Usuario|
| `direccion`      | `String` | **Requerido**. direccion del Usuario|
| `fechaNacimiento`      | `datetime` | **Requerido**. fecha de Nacimiento del Usuario|
| `contrasena`      | `String` | **Requerido**. contraseña del Usuario|
| `rol`      | `String` | **Requerido**. rol del Usuario (Administrador,Encargado,Cliente)|
