# Matriz de Entidades - CMMS PURA

Versión: 2.0

---

# Objetivo

Este documento constituye el inventario maestro de entidades del sistema.

Su propósito es:

* Identificar todas las entidades del dominio.
* Definir a qué dominio pertenece cada una.
* Identificar sus responsabilidades.
* Servir como base para el `schema_v2.prisma`.
* Evitar duplicidades y omisiones durante el desarrollo.

Toda nueva entidad deberá incorporarse primero a esta matriz antes de implementarse.

---

# Estados

| Estado       | Significado                    |
| ------------ | ------------------------------ |
| Diseño       | Definida conceptualmente       |
| Modelado     | Incluida en el modelo de datos |
| Implementada | Disponible en la aplicación    |

---

# Matriz de entidades

| Entidad               | Dominio         | Responsable                      | Historial | Documentos | Campos personalizados | Estado       |
| --------------------- | --------------- | -------------------------------- | --------- | ---------- | --------------------- | ------------ |
| Empresa               | Organización    | Organización de la planta        | No        | No         | No                    | Diseño       |
| Planta                | Organización    | Establecimiento físico           | No        | Sí         | No                    | Diseño       |
| Área                  | Organización    | División funcional               | No        | No         | No                    | Diseño       |
| Ubicación             | Infraestructura | Localización física              | Sí        | Sí         | No                    | Diseño       |
| Sistema               | Infraestructura | Agrupación funcional             | Sí        | Sí         | No                    | Diseño       |
| ClaseActivo           | Catálogos       | Familia de activos               | No        | No         | No                    | Diseño       |
| TipoActivo            | Catálogos       | Clasificación técnica            | No        | No         | No                    | Diseño       |
| Fabricante            | Infraestructura | Fabricante del modelo            | No        | Sí         | No                    | Diseño       |
| Modelo                | Activos         | Información técnica común        | Sí        | Sí         | Sí                    | Diseño       |
| Activo                | Activos         | Ciclo de vida del equipo         | Sí        | Sí         | Sí                    | Diseño       |
| RelacionActivo        | Activos         | Relaciones funcionales           | Sí        | No         | No                    | Diseño       |
| Usuario               | Seguridad       | Operador del sistema             | Sí        | No         | No                    | Implementada |
| Rol                   | Seguridad       | Perfil de permisos               | No        | No         | No                    | Implementada |
| Permiso               | Seguridad       | Acción autorizada                | No        | No         | No                    | Diseño       |
| RolPermiso            | Seguridad       | Relación Rol-Permiso             | No        | No         | No                    | Diseño       |
| Documento             | Documentación   | Repositorio documental           | Sí        | —          | Sí                    | Diseño       |
| DocumentoActivo       | Documentación   | Vinculación documento-activo     | Sí        | —          | No                    | Diseño       |
| DocumentoModelo       | Documentación   | Vinculación documento-modelo     | Sí        | —          | No                    | Diseño       |
| DocumentoOrdenTrabajo | Documentación   | Vinculación documento-OT         | Sí        | —          | No                    | Diseño       |
| DefinicionCampo       | Personalización | Definición de atributos          | No        | No         | —                     | Diseño       |
| ValorCampo            | Personalización | Valor de atributos               | Sí        | No         | —                     | Diseño       |
| Evento                | Eventos         | Registro histórico               | Sí        | No         | No                    | Diseño       |
| TipoEvento            | Catálogos       | Clasificación de eventos         | No        | No         | No                    | Diseño       |
| Aviso                 | Mantenimiento   | Solicitud de intervención        | Sí        | Sí         | Sí                    | Diseño       |
| OrdenTrabajo          | Mantenimiento   | Ejecución del trabajo            | Sí        | Sí         | Sí                    | Diseño       |
| Tarea                 | Mantenimiento   | Actividad dentro de una OT       | Sí        | No         | Sí                    | Diseño       |
| PlanPreventivo        | Mantenimiento   | Programación periódica           | Sí        | Sí         | Sí                    | Diseño       |
| PlanInspeccion        | Mantenimiento   | Inspecciones programadas         | Sí        | Sí         | Sí                    | Diseño       |
| Recurso               | Mantenimiento   | Personas y medios                | Sí        | No         | Sí                    | Diseño       |
| ConsumoRepuesto       | Mantenimiento   | Material utilizado               | Sí        | No         | No                    | Diseño       |
| HoraTrabajo           | Mantenimiento   | Registro de horas                | Sí        | No         | No                    | Diseño       |
| Repuesto              | Inventario      | Material administrado            | Sí        | Sí         | Sí                    | Diseño       |
| ModeloRepuesto        | Inventario      | Información técnica del repuesto | Sí        | Sí         | Sí                    | Diseño       |
| Proveedor             | Inventario      | Suministrador                    | Sí        | Sí         | No                    | Diseño       |
| Deposito              | Inventario      | Almacén físico                   | Sí        | No         | No                    | Diseño       |
| Stock                 | Inventario      | Existencias                      | Sí        | No         | No                    | Diseño       |
| Movimiento            | Inventario      | Movimiento de inventario         | Sí        | No         | No                    | Diseño       |
| Reserva               | Inventario      | Reserva para OT                  | Sí        | No         | No                    | Diseño       |
| Herramienta           | Inventario      | Herramientas especiales          | Sí        | Sí         | Sí                    | Diseño       |
| Medicion              | Analítica       | Lecturas de condición            | Sí        | No         | Sí                    | Diseño       |
| Indicador             | Analítica       | KPI calculado                    | No        | No         | No                    | Diseño       |

---

# Entidades centrales

Las siguientes entidades constituyen el núcleo del sistema:

* Activo
* OrdenTrabajo
* Usuario
* Evento
* Repuesto
* Documento

Todos los dominios deberán integrarse con ellas.

---

# Entidades configurables

Son administradas por el usuario y no requieren cambios en el código.

* ClaseActivo
* TipoActivo
* TipoEvento
* EstadoActivo
* Prioridad
* Criticidad
* TipoDocumento
* TipoSistema
* TipoUbicacion

---

# Próximas incorporaciones

La arquitectura contempla agregar:

* SolicitudCompra
* OrdenCompra
* Contratista
* Contrato
* Garantía
* SensorIoT
* LecturaSensor
* RutaInspeccion
* Checklist
* FirmaDigital
* CentroCosto
* Presupuesto
* Proyecto
* Riesgo
* ModoFalla
* CausaFalla
* AcciónCorrectiva

Estas entidades podrán añadirse sin modificar la arquitectura principal del sistema.

---

# Relación con el modelo de datos

Esta matriz es la referencia oficial para la construcción del `schema_v2.prisma`.

Ninguna entidad deberá implementarse sin estar previamente registrada y documentada en este archivo.

El objetivo es garantizar consistencia, trazabilidad y escalabilidad durante toda la evolución del proyecto.
