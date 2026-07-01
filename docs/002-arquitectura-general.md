# 002 - Arquitectura General

Versión: 1.0

Estado: Vigente

---

# Objetivo

Definir la arquitectura técnica del sistema CMMS Pura.

Este documento establece la organización del código, los módulos, las responsabilidades de cada capa y las tecnologías utilizadas.

---

# Arquitectura General

El sistema sigue una arquitectura modular basada en capas.

```text
Frontend

↓

API REST

↓

Controllers

↓

Services

↓

Repositories

↓

Prisma ORM

↓

Base de Datos
```

Cada capa posee una responsabilidad única.

---

# Tecnologías

## Backend

* Node.js
* TypeScript
* Express
* Prisma ORM

---

## Base de datos

Durante el desarrollo:

* SQLite

Producción:

* PostgreSQL

La utilización de Prisma permitirá cambiar el motor de base de datos con un impacto mínimo sobre el código.

---

## Frontend

Se desarrollará posteriormente utilizando:

* React
* TypeScript
* Vite

---

# Organización del proyecto

```text
backend/

config/
controllers/
middleware/
modules/
routes/
services/
shared/
lib/

prisma/

docs/
```

---

# Organización por módulos

Cada módulo será independiente.

Ejemplo:

```text
modules/

activos/

auth/

dashboard/

documentos/

inventario/

lop/

ordenes/

preventivos/

usuarios/
```

Cada módulo deberá contener como mínimo:

```text
activos/

activos.controller.ts

activos.service.ts

activos.repository.ts

activos.routes.ts

activos.validators.ts

activos.types.ts
```

---

# Responsabilidad de las capas

## Controller

Recibe las solicitudes HTTP.

No contiene lógica de negocio.

Responsabilidades:

* validar entrada
* llamar al servicio
* devolver respuesta

---

## Service

Contiene toda la lógica de negocio.

No conoce HTTP.

No conoce Express.

No conoce Prisma.

---

## Repository

Única capa autorizada para acceder a Prisma.

Toda consulta a la base de datos deberá realizarse desde esta capa.

---

## Prisma

Abstrae el acceso a la base de datos.

Permite cambiar SQLite por PostgreSQL sin modificar la lógica de negocio.

---

# Principios SOLID

Durante el desarrollo se intentará respetar:

* Responsabilidad única
* Abierto/Cerrado
* Sustitución
* Segregación de interfaces
* Inversión de dependencias

---

# Convenciones

## Nombres

Archivos:

camelCase

Clases:

PascalCase

Variables:

camelCase

Constantes:

UPPER_CASE

---

# Base de datos

Las tablas utilizarán:

* id entero para relaciones internas
* uuid para exposición pública mediante API

---

# Auditoría

Las entidades principales deberán incluir:

* creadoEn
* actualizadoEn
* creadoPor
* actualizadoPor

Cuando corresponda:

* eliminadoEn
* eliminadoPor

---

# Autenticación

La autenticación se realizará mediante JWT.

El backend será completamente stateless.

Los permisos se determinarán mediante:

* Roles
* Permisos específicos

---

# Diseño Modular

Cada módulo podrá evolucionar de forma independiente.

La incorporación de nuevos módulos no deberá requerir modificaciones en módulos existentes.

---

# Flujo de una solicitud

Solicitud HTTP

↓

Middleware

↓

Controller

↓

Service

↓

Repository

↓

Prisma

↓

Base de Datos

↓

Repository

↓

Service

↓

Controller

↓

Respuesta HTTP

---

# Escalabilidad

La arquitectura deberá permitir incorporar futuras funcionalidades como:

* Mantenimiento predictivo
* Integración con PLC
* Integración con ERP
* Aplicación móvil
* APIs externas
* Microservicios
* Inteligencia Artificial

sin rediseñar la estructura principal del sistema.

---

# Objetivo Final

Construir una arquitectura mantenible, modular y escalable que permita el crecimiento continuo del sistema sin comprometer la calidad del código ni la estabilidad de la plataforma.
