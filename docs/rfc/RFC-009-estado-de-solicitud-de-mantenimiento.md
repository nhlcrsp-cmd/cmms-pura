# RFC-009
# Estado de Solicitud de Mantenimiento

**Estado:** APROBADA

**Versión:** 2.1

**Fecha:** 2026-07-04

---

# Objetivo

Incorporar una entidad `EstadoSolicitudMantenimiento`
para representar el ciclo de vida de una Solicitud de
Mantenimiento.

Esta RFC elimina el uso de múltiples campos booleanos
como representación del estado de una solicitud.

---

# Motivación

Inicialmente el modelo `SolicitudMantenimiento`
utilizaba los siguientes campos:

```prisma
atendida Boolean

cancelada Boolean
```

Esta implementación presenta múltiples problemas:

- Permite estados inconsistentes.
- No escala ante nuevos estados.
- Dificulta auditorías.
- Es inconsistente con la arquitectura utilizada
  para OrdenTrabajo.

---

# Cambios aprobados

## Se elimina

```prisma
atendida Boolean

cancelada Boolean
```

---

## Se incorpora

```prisma
estadoSolicitudMantenimientoId BigInt
```

con relación a:

```prisma
EstadoSolicitudMantenimiento
```

---

# Nuevo Modelo

Se crea el catálogo interno:

```
EstadoSolicitudMantenimiento
```

---

# Estados iniciales

ABIERTA

EN_REVISION

APROBADA

RECHAZADA

CONVERTIDA_EN_OT

CANCELADA

---

# Flujo recomendado

ABIERTA

↓

EN_REVISION

↓

APROBADA

↓

CONVERTIDA_EN_OT

Estados alternativos

RECHAZADA

CANCELADA

---

# Beneficios

Un único estado válido por solicitud.

Escalable.

Consistente con EstadoOrdenTrabajo.

Preparado para Workflow.

Preparado para Auditoría.

Preparado para KPIs.

---

# Compatibilidad

No modifica la filosofía del dominio.

Únicamente reemplaza dos campos booleanos por
una relación normalizada.

---

# Resultado

Todas las Solicitudes de Mantenimiento deberán
representar su estado mediante una referencia a
`EstadoSolicitudMantenimiento`.

Queda prohibido utilizar múltiples booleanos para
representar estados mutuamente excluyentes.

---

# Estado

✅ APROBADA

Implementación obligatoria antes de congelar
el dominio 09-mantenimiento.