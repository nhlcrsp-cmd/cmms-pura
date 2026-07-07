# 007 - Work Order Pattern

## Estado

CONGELADO

Release 2.1

---

# Objetivo

Definir el patrón oficial para la gestión del ciclo de vida de una
Orden de Trabajo (OT) dentro del CMMS.

La Orden de Trabajo representa la autorización formal para ejecutar
una actividad de mantenimiento.

Una Orden de Trabajo nunca representa la necesidad de mantenimiento.

La necesidad y la ejecución son conceptos diferentes.

---

# Principios

Una necesidad genera una solicitud.

Una solicitud puede generar una Orden de Trabajo.

Una Orden de Trabajo puede contener una o más tareas.

Las tareas generan registros.

Los registros generan historial.

---

# Flujo General

Necesidad

↓

SolicitudMantenimiento

↓

Planificación

↓

OrdenTrabajo

↓

OrdenTrabajoTarea

↓

RegistroTrabajo

↓

HistorialActivo

---

# Ciclo de Vida

Toda Orden de Trabajo deberá recorrer un flujo de estados.

Los estados representan el proceso de trabajo y no podrán
modificarse arbitrariamente.

Flujo recomendado

BORRADOR

↓

PENDIENTE

↓

PLANIFICADA

↓

ASIGNADA

↓

EN_EJECUCION

↓

PAUSADA

↓

FINALIZADA

↓

CERRADA

Estados alternativos

CANCELADA

RECHAZADA

---

# Origen de una Orden

Una Orden de Trabajo puede originarse desde:

- Solicitud de mantenimiento
- Plan preventivo
- Inspección
- Predictivo
- Mejora
- Proyecto
- Calibración
- Requisito legal
- Generación automática

---

# Destino

Toda Orden de Trabajo deberá estar asociada al menos a un Activo.

Opcionalmente podrá asociarse a:

- Unidad Organizacional
- Ubicación
- Sistema
- Componente

---

# Alcance

Una Orden de Trabajo puede incluir:

- una tarea

o

- múltiples tareas.

Cada tarea podrá ser ejecutada por distintos técnicos.

---

# Ejecución

Durante la ejecución podrán registrarse:

- horas hombre
- materiales
- repuestos
- herramientas
- fotografías
- documentos
- observaciones
- mediciones
- checklist
- firmas

---

# Cierre

Una Orden de Trabajo solamente podrá cerrarse cuando:

- todas las tareas estén finalizadas
- los registros requeridos existan
- el responsable apruebe el cierre

---

# Historial

El historial pertenece al Activo.

Nunca pertenece a la Orden de Trabajo.

La OT únicamente documenta una intervención.

El Activo conserva toda la historia de intervenciones.

---

# Relación con PlantillaTecnica

Una Orden podrá utilizar automáticamente:

- procedimientos
- checklist
- documentación
- repuestos recomendados

definidos por la PlantillaTecnica del Activo.

---

# Integraciones

Una Orden de Trabajo podrá relacionarse con:

- Inventario
- Compras
- Documentación
- Eventos
- Analítica
- Personal
- Calendario
- Costos

sin depender directamente de dichos dominios.

---

# Arquitectura

Necesidad
      │
      ▼
SolicitudMantenimiento
      │
      ▼
OrdenTrabajo
      │
      ▼
OrdenTrabajoTarea
      │
      ▼
RegistroTrabajo
      │
      ▼
HistorialActivo
      │
      ▼
Activo

---

# Principios de Diseño

Una Orden de Trabajo representa trabajo autorizado.

Una tarea representa una actividad.

Un registro representa evidencia.

El historial representa conocimiento.

La Orden de Trabajo nunca almacena el historial del Activo.

---

# Beneficios

Separación clara entre solicitud y ejecución.

Trazabilidad completa.

Escalabilidad para múltiples técnicos.

Compatibilidad con mantenimiento preventivo,
correctivo, predictivo y legal.

Integración natural con Inventario,
Documentación y Analítica.

---

# Modificaciones

Toda modificación de este patrón deberá realizarse
mediante una RFC.

No modificar directamente este documento.