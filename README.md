Proyecto Blog API:

Este proyecto ( Actividad 8)  es una pequeña API para gestionar autores y posts de un blog.  

La API permite:

-Crear y listar autores.
-Crear y listar posts.
-Consultar los posts escritos por un autor concreto.
-Consultar el detalle de un post junto con la información de su autor.

Tecnologías utilizadas:

-Node.js
-Express
-MySQL
-mysql2 
-Nodemon


Base de datos:

La base de datos se llama `blog` y está incluida en el archivo `blog.sql`.

Tablas principales:

### autores
- id (INT, PK, AUTO_INCREMENT)
- nombre (VARCHAR(100), NOT NULL)
- email (VARCHAR(100), NOT NULL, UNIQUE)
- imagen (VARCHAR(255))

### posts
- id (INT, PK, AUTO_INCREMENT)
- titulo (VARCHAR(255), NOT NULL)
- descripcion (TEXT, NOT NULL)
- fecha_creacion (DATETIME, DEFAULT CURRENT_TIMESTAMP)
- categoria (VARCHAR(100))
- autor_id (INT, FK → autores.id)



## Restaurar la base de datos con MySQL Workbench

1. Abrir MySQL Workbench.
2. Ir a Server → Data Import.
3. Seleccionar Import from Self-Contained File y elegir `blog.sql`.
4. En "Default Target Schema", usar o crear el esquema `blog`.
5. Pulsar Start Import.