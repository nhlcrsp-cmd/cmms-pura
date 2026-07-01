# Diccionario de Datos - CMMS PURA

Versión: 2.0

---

# Objetivo

Este documento define el estándar para la construcción del modelo de datos del CMMS PURA.

No representa una implementación específica de Prisma ni de ningún motor de base de datos.

Su propósito es documentar de manera unificada:

* Entidades.
* Campos.
* Tipos de datos.
* Restricciones.
* Relaciones.
* Reglas de negocio.

Es la fuente oficial para la construcción del `schema_v2.prisma`.

---

# Convenciones

## Tipos de datos

| Tipo lógico | Prisma   | Descripción                    |
| ----------- | -------- | ------------------------------ |
| UUID        | String   | Identificador público          |
| ID          | Int      | Clave primaria interna         |
| Texto corto | String   | Hasta 255 caracteres           |
| Texto largo | String   | Observaciones o descripciones  |
| Booleano    | Boolean  | Verdadero/Falso                |
| Entero      | Int      | Valores enteros                |
| Decimal     | Decimal  | Valores numéricos de precisión |
| Fecha       | DateTime | Fecha y hora                   |
| JSON        | Json     | Configuración flexible         |

---

# Campos comunes

Todas las entidades principales deberán incluir, como mínimo:

| Campo         | Tipo  | Obligatorio | Descripción            |
| ------------- | ----- | ----------- | ---------------------- |
| id            | Int   | Sí          | Clave primaria interna |
| uuid          | UUID  | Sí          | Identificador público  |
| creadoEn      | Fecha | Sí          | Fecha de creación      |
| actualizadoEn | Fecha | Sí          | Última modificación    |

Cuando corresponda también podrán incluir:

* creadoPorId
* actualizadoPorId
* eliminadoEn
* eliminadoPorId
* activo

---

# Reglas generales

* El `id` nunca será expuesto fuera del sistema.
* El `uuid` será el identificador utilizado por la API.
* Las claves foráneas finalizarán en `Id`.
* Los nombres estarán en singular.
* No se duplicará información ya existente en otra entidad.
* El historial deberá preservarse.

---

# Plantilla de entidad

Cada entidad del sistema deberá documentarse utilizando el siguiente formato.

---

# Entidad

## Nombre

Ejemplo:

Activo

---

## Descripción

Explica el propósito de la entidad dentro del dominio.

---

## Dominio

Ejemplo:

Activos

---

## Campos

| Campo       | Tipo        | Obligatorio | Único | Descripción           |
| ----------- | ----------- | ----------- | ----- | --------------------- |
| id          | Int         | Sí          | Sí    | Identificador interno |
| uuid        | UUID        | Sí          | Sí    | Identificador público |
| codigo      | Texto       | Sí          | Sí    | Código interno        |
| nombre      | Texto       | Sí          | No    | Nombre visible        |
| descripcion | Texto largo | No          | No    | Observaciones         |

---

## Relaciones

| Relación     | Cardinalidad |
| ------------ | ------------ |
| Modelo       | N : 1        |
| Ubicación    | N : 1        |
| Sistema      | N : 1        |
| Activo Padre | N : 1        |
| Documento    | N : N        |
| Evento       | 1 : N        |

---

## Índices

* uuid
* codigo
* nombre

---

## Reglas de negocio

Ejemplo:

* El código deberá ser único dentro de la planta.
* Todo activo deberá pertenecer a una ubicación.
* Un activo podrá tener un padre.
* El historial no podrá eliminarse.

---

# Catálogo de entidades

## Organización

* Empresa
* Planta
* Área
* Ubicación

## Seguridad

* Usuario
* Rol
* Permiso
* RolPermiso

## Catálogos

* ClaseActivo
* TipoActivo
* TipoUbicacion
* TipoSistema
* EstadoActivo
* Criticidad
* Prioridad
* TipoDocumento
* TipoEvento
* TipoRelacionActivo

## Infraestructura

* Fabricante
* Modelo

## Activos

* Activo
* RelacionActivo

## Documentación

* Documento
* DocumentoActivo
* DocumentoModelo
* DocumentoOrdenTrabajo

## Personalización

* DefinicionCampo
* ValorCampo

## Eventos

* Evento

## Mantenimiento

* Aviso
* OrdenTrabajo
* Tarea
* PlanPreventivo
* PlanInspeccion
* Recurso
* HoraTrabajo
* ConsumoRepuesto

## Inventario

* Repuesto
* ModeloRepuesto
* Proveedor
* Deposito
* Stock
* Movimiento
* Reserva
* Herramienta

## Analítica

* Medicion
* Indicador

---

# Tipos de relaciones

El sistema utilizará únicamente las siguientes cardinalidades:

* 1 : 1
* 1 : N
* N : N (mediante tabla puente)

No se utilizarán relaciones implícitas cuando sea necesario almacenar información adicional.

---

# Índices recomendados

Toda entidad principal deberá indexar:

* uuid
* codigo (si existe)
* nombre (cuando aplique)
* claves foráneas
* campos de búsqueda frecuente

---

# Auditoría

Las entidades críticas deberán registrar:

* usuario creador
* usuario modificador
* fecha de creación
* fecha de modificación
* fecha de eliminación lógica

---

# Historial

Toda modificación relevante deberá generar un registro en el dominio Eventos.

El historial es inmutable.

Nunca deberá eliminarse.

---

# Integridad referencial

Todas las relaciones deberán proteger la consistencia de los datos.

Como regla general:

* No se eliminarán registros que tengan dependencias.
* Se preferirá el borrado lógico.
* Las eliminaciones físicas serán excepcionales y documentadas.

---

# Evolución

Este documento evolucionará junto con el modelo de dominio.

Toda modificación estructural deberá reflejarse primero aquí y luego en:

1. ERD Maestro.
2. `schema_v2.prisma`.
3. Migraciones.
4. Backend.
5. Frontend.

El objetivo es mantener una única fuente de verdad para la arquitectura de datos del proyecto.
