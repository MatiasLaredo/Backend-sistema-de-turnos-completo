📌Backend – Sistema de Gestión de Turnos

Este proyecto es el backend de una aplicación fullstack para la gestión de turnos por hora.
Permite a los usuarios reservar turnos y a un administrador autenticado gestionarlos.

Está desarrollado con Node.js y Express, implementando autenticación con JWT y persistencia en archivo JSON, sin utilizar base de datos.

🚀 Tecnologías utilizadas

Node.js

Express

JSON Web Token (JWT)

bcryptjs

CORS

dotenv

Nodemon

Persistencia en archivo JSON (fs module)

🧠 Funcionalidades principales
👤 Usuario

Consultar horarios disponibles

Reservar turno

Validación de campos obligatorios

Prevención de turnos duplicados

Restricción de horarios válidos (formato por hora)

🔐 Administrador

Registro de usuario admin

Login con generación de JWT

Middleware de autenticación

Ver todos los turnos registrados

Editar turnos existentes

Eliminar turnos

Protección de rutas mediante token

🏗 Arquitectura del proyecto

El backend está organizado con una estructura modular profesional:

src/
│
├── controllers/
├── routes/
├── middleware/
├── utils/
├── data/
└── app.js
