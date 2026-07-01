# Dominio 10 - Mantenimiento

## Objetivo

El dominio **Mantenimiento** administra todo el ciclo de vida del trabajo realizado sobre los activos.

Su función es transformar una necesidad de mantenimiento en una intervención planificada, ejecutada, registrada y analizada.

Este dominio constituye el núcleo operativo del CMMS.

---

# Definición

El mantenimiento comprende todas las actividades destinadas a conservar o recuperar la capacidad operativa de un activo.

El proceso comienza con la detección de una necesidad y finaliza con el cierre de la intervención y la actualización del historial.

---

# Objetivos del dominio

* Registrar solicitudes de mantenimiento.
* Priorizar intervenciones.
* Planificar recursos.
* Ejecutar trabajos.
* Registrar tiempos y materiales.
* Mantener la trazabilidad completa.
* Alimentar el historial del activo.
* Generar indicadores de gestión.

---

# Flujo general

Solicitud

↓

Aviso

↓

Evaluación

↓

Orden de Trabajo

↓

Planificación

↓

Asignación

↓

Ejecución

↓

Cierre

↓

Evento

↓

Historial del Activo

---

# Entidades principales

## Aviso

Representa una necesidad detectada.

Puede originarse por:

* Operador.
* Técnico.
* Supervisor.
* Inspección.
* Preventivo.
* Sensor IoT.
* Sistema externo.

El aviso no implica que exista una orden de trabajo.

---

## Orden de Trabajo (OT)

Representa una intervención autorizada.

La OT es el documento principal del mantenimiento.

Puede estar asociada a:

* uno o varios activos,
* un aviso,
* un plan preventivo,
* documentos,
* recursos,
* repuestos.

---

## Tipo de OT

Ejemplos:

* Correctivo.
* Preventivo.
* Predictivo.
* Inspección.
* Mejora.
* Calibración.
* Emergencia.

---

## Estado de OT

Ejemplos:

* Borrador.
* Pendiente.
* Planificada.
* Asignada.
* En ejecución.
* Pausada.
* Finalizada.
* Cancelada.

---

## Prioridad

Ejemplos:

* Baja.
* Normal.
* Alta.
* Urgente.
* Emergencia.

Será un catálogo reutilizable.

---

## Plan Preventivo

Define trabajos programados.

Puede basarse en:

* Tiempo.
* Horas de funcionamiento.
* Ciclos.
* Producción.
* Condición.

Una planificación puede generar múltiples OT a lo largo de su vida útil.

---

## Plan de Inspección

Representa recorridas o verificaciones periódicas.

Puede generar:

* Avisos.
* OT.
* Mediciones.

---

## Tarea

Una OT se compone de una o varias tareas.

Ejemplos:

* Desmontar motor.
* Cambiar rodamiento.
* Lubricar.
* Ajustar tensión.
* Verificar temperatura.

Cada tarea podrá registrar:

* responsable,
* tiempo,
* resultado,
* observaciones.

---

## Recursos

Representan todo lo utilizado durante la intervención.

Ejemplos:

* Técnicos.
* Contratistas.
* Herramientas.
* Equipos especiales.
* Vehículos.

---

## Consumo de Repuestos

Registra todos los materiales utilizados.

Ejemplos:

* Rodamientos.
* Retenes.
* Aceites.
* Tornillos.
* Sensores.

Cada consumo impactará automáticamente en el inventario.

---

## Horas de Trabajo

Cada técnico registrará:

* inicio,
* fin,
* tiempo efectivo,
* tiempo improductivo,
* observaciones.

---

# Relaciones

Una OT puede relacionarse con:

* Activos.
* Avisos.
* Preventivos.
* Documentos.
* Eventos.
* Repuestos.
* Técnicos.
* Campos personalizados.

---

# Flujo Correctivo

Falla detectada

↓

Aviso

↓

Evaluación

↓

OT

↓

Asignación

↓

Ejecución

↓

Cierre

↓

Evento

↓

Historial

---

# Flujo Preventivo

Plan Preventivo

↓

Programación

↓

Generación automática de OT

↓

Asignación

↓

Ejecución

↓

Cierre

↓

Nueva programación

---

# Indicadores

El dominio generará información para calcular:

* MTBF.
* MTTR.
* Disponibilidad.
* Cumplimiento Preventivo.
* Backlog.
* Horas Hombre.
* Costos.
* Tiempo de Respuesta.
* Tiempo de Resolución.

Los indicadores no se almacenan; se calculan a partir de los datos registrados.

---

# Reglas de negocio

* Toda OT debe tener un estado.
* Toda OT debe tener una prioridad.
* Toda OT debe tener un responsable.
* Una OT puede involucrar múltiples activos.
* Todo cierre genera un evento.
* Toda intervención queda registrada en el historial del activo.
* Ninguna OT podrá eliminarse una vez ejecutada.
* Las modificaciones importantes deberán quedar auditadas.

---

# Integraciones

Este dominio consume información de:

* Activos.
* Infraestructura.
* Catálogos.
* Inventario.
* Documentación.
* Eventos.
* Analítica.

Y genera información para:

* Indicadores.
* Dashboard.
* Reportes.
* Auditoría.

---

# Futuras ampliaciones

La arquitectura contempla incorporar:

* Planificación con calendario.
* Gantt de mantenimiento.
* Rutas de inspección móviles.
* Checklists digitales.
* Firmas electrónicas.
* Integración con ERP.
* Integración con SCADA.
* IoT y mantenimiento predictivo.
* Inteligencia Artificial para priorización y recomendación de acciones.
* Asistente técnico con historial contextual.

El diseño del dominio busca soportar estas capacidades sin modificar su estructura principal.
