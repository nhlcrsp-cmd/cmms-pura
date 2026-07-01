# Convenciones de Desarrollo - CMMS PURA

Versión: 2.0

---

# Objetivo

Este documento establece las reglas generales que deberán respetarse durante el diseño y desarrollo del CMMS PURA.

Su finalidad es garantizar un modelo consistente, escalable y fácil de mantener a lo largo del tiempo.

Todas las decisiones técnicas futuras deberán alinearse con estas convenciones, salvo que exista una ADR (Architecture Decision Record) que justifique una excepción.

---

# Principios generales

El sistema deberá priorizar:

* Simplicidad.
* Escalabilidad.
* Reutilización.
* Integridad de los datos.
* Historial completo.
* Bajo acoplamiento.
* Alta cohesión.
* Configuración por encima del código.

---

# Lenguaje del dominio

El proyecto utilizará una única terminología.

Ejemplos:

Correcto:

* Activo
* Modelo
* Sistema
* Ubicación
* Aviso
* Orden de Trabajo
* Plan Preventivo
* Repuesto

Incorrecto:

* Máquina
* Equipo
* Elemento
* Componente

Cuando el dominio utilice un término oficial, siempre deberá utilizarse ese mismo nombre en:

* documentación,
* código,
* API,
* base de datos,
* interfaz.

---

# Nombres de entidades

Todas las entidades utilizarán:

* Singular.
* PascalCase.

Ejemplos:

Activo

Modelo

Documento

OrdenTrabajo

Evento

Nunca:

Activos

Documentos

OTs

---

# Nombres de tablas

Las tablas seguirán el nombre de la entidad.

Ejemplos:

Activo

Modelo

Documento

Evento

---

# Identificadores

Toda entidad principal tendrá:

* id (entero autoincremental)
* uuid (identificador público)

El UUID será utilizado para:

* APIs
* Integraciones
* URLs
* Exportaciones

El ID entero será interno.

---

# Claves foráneas

Todas finalizarán con:

Id

Ejemplos:

modeloId

activoId

usuarioId

ubicacionId

Nunca:

modelo

fkModelo

idModelo

---

# Campos de auditoría

Las entidades principales incluirán:

* creadoEn
* actualizadoEn

Las entidades críticas podrán incorporar:

* creadoPorId
* actualizadoPorId
* eliminadoEn
* eliminadoPorId

---

# Fechas

Todos los nombres finalizarán en:

En

Ejemplos:

creadoEn

actualizadoEn

instaladoEn

cerradoEn

Nunca:

fechaAlta

fechaModificacion

---

# Estados

Siempre que sea posible, los estados serán catálogos.

Se evitará el uso de enum cuando exista la posibilidad de configuración futura.

---

# Catálogos

Todo catálogo principal deberá incluir:

* código
* nombre
* descripción
* color
* icono
* orden
* activo

---

# Relaciones

Las relaciones deberán representar conceptos reales del negocio.

No deberán duplicarse relaciones existentes.

Ejemplo:

Si un Activo pertenece a una Ubicación, no deberá almacenarse nuevamente esa información en otra entidad.

---

# Árboles

Los árboles utilizarán una referencia al padre.

Ejemplos:

Ubicación

Sistema

TipoActivo

Activo

Cada entidad tendrá:

padreId

No existe límite de profundidad.

---

# Eliminación

Como regla general:

No se eliminarán registros históricos.

Se utilizará:

activo = false

o

eliminadoEn

según corresponda.

---

# Historial

Todo cambio importante deberá generar un Evento.

Ejemplos:

* Cambio de estado.
* Cambio de ubicación.
* Cambio de responsable.
* Documento agregado.
* OT cerrada.
* Preventivo ejecutado.

El historial nunca deberá perderse.

---

# Documentación

Los documentos serán independientes.

Nunca pertenecerán directamente a un Activo o una OT.

Siempre se utilizarán tablas de relación.

Ejemplos:

DocumentoActivo

DocumentoModelo

DocumentoOrdenTrabajo

---

# Campos personalizados

No se modificará la estructura de la base de datos para agregar nuevos atributos.

Se utilizarán:

DefinicionCampo

ValorCampo

---

# UUID

Todas las entidades principales utilizarán UUID.

Beneficios:

* URLs seguras.
* Integraciones.
* Exportaciones.
* Replicación.
* Sin exposición del ID interno.

---

# Índices

Se crearán índices sobre:

* UUID.
* Código.
* Claves foráneas.
* Campos de búsqueda frecuente.

Los índices deberán justificarse por su uso.

---

# Soft Delete

Se priorizará el borrado lógico.

El borrado físico será una excepción y deberá documentarse.

---

# Integridad

Toda clave foránea deberá representar una relación válida.

Se evitarán campos duplicados o redundantes.

---

# Escalabilidad

Todo diseño deberá considerar futuras ampliaciones:

* ERP.
* IoT.
* SCADA.
* IA.
* Aplicación móvil.
* Multiempresa.
* Multiplanta.
* Multiidioma.

---

# Rendimiento

Se priorizará:

* consultas simples,
* relaciones claras,
* índices adecuados,
* mínima duplicación.

---

# Documentación

Todo módulo deberá poseer documentación de dominio antes de comenzar su implementación.

El flujo oficial será:

Idea

↓

Modelo de Dominio

↓

Modelo de Datos

↓

Schema Prisma

↓

Migración

↓

Backend

↓

Frontend

---

# Arquitectura

El proyecto seguirá una arquitectura modular.

Cada dominio será independiente.

Las dependencias entre dominios deberán mantenerse al mínimo.

---

# Filosofía del proyecto

El objetivo del CMMS PURA no es únicamente administrar órdenes de trabajo.

El objetivo es construir una plataforma de gestión de activos industriales preparada para evolucionar durante muchos años.

Cada decisión deberá favorecer:

* claridad,
* mantenibilidad,
* reutilización,
* escalabilidad,
* trazabilidad.

Cuando existan varias alternativas técnicamente válidas, se elegirá aquella que facilite el crecimiento futuro del sistema.
