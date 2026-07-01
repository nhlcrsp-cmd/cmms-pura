# Patrón 002 — Prisma Style Guide

**Estado:** 🟢 APROBADO

**Versión:** 2.1

**Aplica a:** Todos los archivos `*.prisma`

---

# Objetivo

Este documento define las convenciones de estilo para todos los modelos Prisma del proyecto.

Su objetivo es garantizar:

* Consistencia.
* Legibilidad.
* Mantenibilidad.
* Facilidad de revisión.
* Uniformidad entre dominios.

No define reglas funcionales del negocio.

Define únicamente reglas de escritura del esquema Prisma.

---

# Orden de los bloques

Todo modelo deberá respetar el siguiente orden.

```text
Identidad

Relaciones (FK)

Información

Presentación

Configuración

Estado

Auditoría

Relaciones

Restricciones

Índices
```

No deberán omitirse comentarios.

---

# Identidad

Siempre primero.

```prisma
id              BigInt   @id @default(autoincrement())

uuid            String   @unique @default(uuid())
```

Nunca utilizar `Int` para claves primarias.

---

# Relaciones (FK)

Las claves foráneas deberán declararse inmediatamente después de la identidad.

Ejemplo:

```prisma
empresaId       BigInt

plantaId        BigInt?
```

Las relaciones Prisma se declaran más adelante.

---

# Información

Contiene únicamente datos propios del negocio.

Ejemplos:

```prisma
codigo

nombre

descripcion
```

No incluir estados ni relaciones.

---

# Presentación

Sólo información utilizada por el frontend.

Campos recomendados:

```prisma
iconoNombre

colorHex

ordenVisual
```

Nunca almacenar archivos.

---

# Configuración

Campos de comportamiento.

Ejemplos:

```prisma
principal

predeterminado

requiereAprobacion
```

No corresponde a estado.

---

# Estado

Toda entidad persistente implementará:

```prisma
activo         Boolean   @default(true)

eliminadoEn    DateTime?
```

No utilizar eliminación física salvo procesos excepcionales.

---

# Auditoría

Siempre al final de los campos.

```prisma
creadoEn       DateTime  @default(now())

actualizadoEn  DateTime  @updatedAt
```

La auditoría extendida (`creadoPorUsuarioId`, `actualizadoPorUsuarioId`) se incorporará únicamente cuando el dominio lo requiera.

---

# Relaciones

Las relaciones Prisma deberán agruparse.

Orden recomendado:

1. Relaciones padre (`@relation(fields: ..., references: ...)`)
2. Relaciones hijas (colecciones)

Ejemplo:

```prisma
empresa Empresa @relation(...)

plantas Planta[]
```

---

# Restricciones

Las restricciones deberán declararse antes de los índices.

Ejemplo:

```prisma
@@unique([empresaId, codigo])
```

Siempre agruparlas bajo el bloque:

```text
Restricciones
```

---

# Índices

Los índices deberán colocarse al final del modelo.

Orden recomendado:

1. Claves foráneas.
2. Campos de búsqueda frecuente.
3. Estado.
4. Fechas.

Ejemplo:

```prisma
@@index([empresaId])

@@index([activo])

@@index([nombre])
```

---

# Relaciones Prisma

Toda relación deberá nombrarse utilizando el nombre del modelo relacionado.

Ejemplo:

```prisma
empresa

planta

usuario
```

Las colecciones deberán escribirse en plural.

Ejemplo:

```prisma
plantas

usuarios

roles
```

Cuando existan múltiples relaciones entre los mismos modelos, deberá utilizarse un nombre explícito mediante `@relation("NombreRelacion")`.

---

# Tipos de datos

## Identificadores

```prisma
BigInt
```

---

## UUID

```prisma
String
```

---

## Texto

```prisma
String
```

---

## Fechas

```prisma
DateTime
```

---

## Booleanos

```prisma
Boolean
```

---

# Convenciones

## Modelos

Singular.

PascalCase.

Ejemplo:

```text
Empresa

Planta

Usuario
```

---

## Campos

camelCase.

Ejemplo:

```text
fechaIngreso

colorHex

ordenVisual
```

---

## Relaciones

Nombre singular para referencias.

Nombre plural para colecciones.

---

## Comentarios

Todos los modelos deberán utilizar la estructura de comentarios estándar.

Ejemplo:

```text
// ======================================================
// BLOQUE
// ======================================================
```

y

```text
// ----------------------------------------------------
// Identidad
// ----------------------------------------------------
```

No deberán mezclarse otros estilos.

---

# Longitud

Se recomienda:

* una línea en blanco entre bloques;
* no agrupar conceptos distintos;
* mantener la alineación visual de los campos.

---

# Reglas de arquitectura

Todo modelo Prisma deberá cumplir simultáneamente con:

* Patrón 000 — Base Entity.
* Patrón 001 — Entidad Catálogo (cuando corresponda).
* Este Style Guide.

---

# Estado

Este documento queda aprobado como estándar oficial de escritura de todos los archivos Prisma del proyecto.

A partir de su aprobación, todos los nuevos dominios deberán respetar estas convenciones.
