# Dominio 03 - Catálogos

## Objetivo

El dominio **Catálogos** centraliza todas las listas maestras utilizadas por el sistema.

Su propósito es evitar información duplicada, facilitar la configuración del CMMS y mantener una experiencia de usuario uniforme.

Los catálogos representan valores de referencia que pueden ser utilizados por uno o varios dominios.

---

# Definición

Un catálogo es una colección de valores administrados por el sistema que permite clasificar, organizar o parametrizar información.

Los catálogos no representan procesos ni elementos operativos. Representan conocimiento compartido.

---

# Objetivos del dominio

* Centralizar información de referencia.
* Evitar duplicidad de datos.
* Facilitar la configuración del sistema.
* Estandarizar el comportamiento de la interfaz.
* Permitir futuras ampliaciones sin modificar el código.

---

# Responsabilidades

El dominio Catálogos es responsable de:

* Clasificaciones.
* Tipificaciones.
* Estados.
* Prioridades.
* Niveles.
* Colores de representación.
* Íconos.
* Orden de visualización.

No administra información operativa.

---

# Principios

## Un concepto, un catálogo

Cada concepto debe existir una única vez.

Ejemplo:

Estado del Activo

No debe existir:

EstadoEquipo

EstadoMáquina

EstadoMotor

Todos utilizan:

EstadoActivo

---

## Reutilización

Un mismo catálogo podrá ser utilizado por distintos dominios.

Ejemplo:

Prioridad

Será utilizada por:

* Avisos
* Órdenes de Trabajo
* Preventivos
* Solicitudes

---

## Configuración

Siempre que sea razonable, un catálogo deberá poder modificarse sin necesidad de recompilar la aplicación.

---

# Estructura estándar

Todos los catálogos principales compartirán una estructura común.

Campos recomendados:

* Código
* Nombre
* Descripción
* Color
* Ícono
* Orden
* Activo

Esta estructura garantiza uniformidad en toda la aplicación.

---

# Catálogos principales

## ClaseActivo

Agrupa grandes familias de activos.

Ejemplos:

* Equipo Rotativo
* Equipo Estático
* Instrumentación
* Infraestructura
* Vehículo
* Herramienta
* Software

---

## TipoActivo

Clasifica activos dentro de una clase.

Ejemplos:

* Motor
* Bomba
* Válvula
* Sensor
* PLC
* Compresor

Permitirá estructura jerárquica.

---

## TipoUbicacion

Clasifica nodos del árbol de ubicaciones.

Ejemplos:

* Planta
* Edificio
* Área
* Línea
* Sala
* Sector
* Servicios
* Depósito

---

## TipoSistema

Clasifica sistemas funcionales.

Ejemplos:

* Producto
* Vapor
* Agua Caliente
* Agua Fría
* Aire
* CIP
* Eléctrico
* Instrumentación

---

## EstadoActivo

Representa la condición operacional del activo.

Ejemplos:

* Operativo
* En Marcha
* Detenido
* En Mantenimiento
* Fuera de Servicio
* Dado de Baja

---

## Criticidad

Clasifica la importancia operacional.

Ejemplos:

* Muy Baja
* Baja
* Media
* Alta
* Crítica

---

## Prioridad

Utilizada por distintos procesos.

Ejemplos:

* Baja
* Normal
* Alta
* Urgente
* Emergencia

---

## TipoDocumento

Clasifica documentos.

Ejemplos:

* Manual
* Plano
* Certificado
* Procedimiento
* Fotografía
* Video
* Hoja Técnica

---

## TipoEvento

Clasifica eventos del historial.

Ejemplos:

* Creación
* Modificación
* Cambio de Estado
* Cambio de Ubicación
* Documento Asociado
* OT Cerrada
* Preventivo Ejecutado

---

## TipoRelacionActivo

Clasifica relaciones funcionales entre activos.

Ejemplos:

* Acciona
* Controla
* Alimenta
* Mide
* Protege
* Respalda

---

# Reglas de negocio

* Todo catálogo posee un identificador único.
* Todo catálogo posee un código único.
* Los códigos no deben cambiar una vez utilizados.
* El nombre puede modificarse.
* Los registros históricos nunca deberán perder su referencia.
* Un catálogo puede desactivarse, pero no eliminarse si ya posee relaciones.

---

# Enumeraciones

Se utilizarán enumeraciones únicamente cuando los valores sean completamente fijos y no exista posibilidad razonable de configuración.

Como regla general, se preferirá un catálogo antes que un enum.

---

# Integraciones

Este dominio es utilizado por:

* Organización
* Infraestructura
* Activos
* Mantenimiento
* Inventario
* Documentación
* Eventos
* Analítica

Prácticamente todos los dominios consumirán uno o más catálogos.

---

# Futuras ampliaciones

El diseño contempla la incorporación de nuevos catálogos sin modificar la arquitectura principal.

Ejemplos:

* Tipo de Riesgo
* Tipo de Inspección
* Tipo de Falla
* Tipo de Recurso
* Tipo de Lubricante
* Tipo de Energía
* Tipo de Instrumento
* Tipo de Servicio
* Tipo de Contratista

El objetivo es que el crecimiento funcional del CMMS dependa principalmente de la configuración y no de cambios estructurales en la base de datos.
