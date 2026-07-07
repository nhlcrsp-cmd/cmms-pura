# RFC-013
# Generación Automática de Tareas desde Plantilla Técnica

**Estado:** APROBADA

**Versión:** 2.1

**Fecha:** 2026-07-07

---

# Objetivo

Permitir que una Orden de Trabajo genere automáticamente
sus tareas a partir de la Plantilla Técnica asociada al
Activo.

La creación manual continuará siendo posible.

---

# Motivación

Actualmente una Orden de Trabajo requiere que las tareas
sean cargadas manualmente.

Sin embargo, la mayoría de los trabajos repetitivos ya
poseen procedimientos estandarizados.

Duplicar esa información en cada OT genera:

- trabajo administrativo;
- diferencias entre técnicos;
- pérdida de estandarización;
- errores de ejecución.

---

# Arquitectura

PlantillaTecnica

↓

Procedimiento

↓

Paso

↓

OrdenTrabajo

↓

OrdenTrabajoTarea

---

# Funcionamiento

Al crear una Orden de Trabajo el sistema evaluará si
el Activo posee una Plantilla Técnica.

Si existe:

1. obtiene el procedimiento asociado;
2. copia cada paso;
3. crea automáticamente las
   OrdenTrabajoTarea.

Las tareas creadas serán independientes de la plantilla.

Modificar una tarea NO modifica la Plantilla Técnica.

Modificar la Plantilla Técnica NO modifica las OT ya creadas.

---

# Instanciación

Cada tarea generada representa una copia del procedimiento.

Nunca deberá mantenerse una referencia editable
a la Plantilla Técnica.

La Plantilla representa conocimiento.

La Tarea representa ejecución.

---

# Creación Manual

El sistema deberá permitir crear tareas manualmente.

Una OT podrá contener simultáneamente:

- tareas generadas automáticamente;
- tareas agregadas manualmente.

---

# Beneficios

Estandarización.

Reducción del tiempo de planificación.

Menor carga administrativa.

Mayor calidad de ejecución.

Reutilización del conocimiento técnico.

Capacitación más sencilla.

Mayor trazabilidad.

---

# Compatibilidad

No modifica el modelo actual de
OrdenTrabajoTarea.

Únicamente agrega una forma alternativa
de generarlas.

---

# Futuro

En una versión posterior podrán incorporarse
automáticamente desde la Plantilla:

- checklist;
- herramientas;
- repuestos;
- tiempos estándar;
- fotografías;
- documentos;
- riesgos;
- permisos de trabajo;
- EPP requeridos.

---

# Principio Arquitectónico

La Plantilla Técnica representa el conocimiento.

La Orden de Trabajo representa la autorización.

La OrdenTrabajoTarea representa la planificación.

El RegistroTrabajo representa la ejecución.

Nunca deberá duplicarse conocimiento técnico
de forma manual cuando pueda reutilizarse desde
una Plantilla Técnica.

---

# Estado

✅ APROBADA

Implementación recomendada para la
Release 2.2.

No obligatoria para la Release 2.1.