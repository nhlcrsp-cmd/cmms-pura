# Dominio 04 - Infraestructura

## Objetivo

El dominio **Infraestructura** representa la estructura física y funcional de la organización sobre la cual se administran los activos.

Define la organización territorial, las ubicaciones físicas y los sistemas funcionales utilizados por el CMMS.

Este dominio constituye el contexto donde existen los activos.

---

# Definición

La infraestructura describe dónde se encuentra un activo y a qué sistema funcional pertenece.

Se compone de estructuras jerárquicas independientes que permiten representar una planta industrial de forma flexible.

---

# Objetivos del dominio

* Modelar la estructura física de la organización.
* Representar la organización funcional de los equipos.
* Facilitar la navegación por la planta.
* Permitir búsquedas por ubicación y sistema.
* Soportar el crecimiento futuro sin limitar la estructura.

---

# Responsabilidades

El dominio Infraestructura es responsable de:

* Empresas.
* Plantas.
* Áreas.
* Ubicaciones.
* Sistemas.
* Organización jerárquica.

No administra información técnica de los activos.

---

# Entidades principales

## Empresa

Representa la organización propietaria de los activos.

Ejemplos:

* Lácteos del Sur
* Planta Industrial XYZ

Una empresa puede poseer múltiples plantas.

---

## Planta

Representa un establecimiento físico.

Ejemplos:

* Pura 1
* Pura 2
* Pura 3

Cada planta pertenece a una única empresa.

---

## Área

Representa una división funcional dentro de una planta.

Ejemplos:

* Producción
* Mantenimiento
* Servicios
* Depósito
* Expedición
* Laboratorio

Las áreas facilitan la organización administrativa y operativa.

---

## Ubicación

Representa el lugar físico donde se encuentra instalado un activo.

Las ubicaciones forman un árbol independiente.

Ejemplo:

Planta

↓

Producción

↓

Línea 2

↓

Sala Esterilización

↓

Servicios

↓

Sector Bombas

Una ubicación puede contener:

* Activos
* Otras ubicaciones

---

## Sistema

Representa una agrupación funcional.

No describe ubicación física.

Ejemplos:

* Producto
* Agua Caliente
* Agua Fría
* Vapor
* CIP
* Aire Comprimido
* Eléctrico
* Instrumentación

Un sistema puede contener múltiples activos distribuidos en distintas ubicaciones.

---

# Árbol de Ubicaciones

Las ubicaciones forman una estructura jerárquica.

Características:

* Un único padre.
* Múltiples hijos.
* Profundidad ilimitada.

Ejemplo:

Empresa

↓

Planta

↓

Producción

↓

Línea 2

↓

Sala Esterilización

↓

Servicios

↓

Sector Bombas

---

# Árbol de Sistemas

Los sistemas también pueden organizarse jerárquicamente.

Ejemplo:

Producto

↓

Calentamiento

↓

Recirculación

↓

Transferencia

Esto permite distintos niveles de análisis funcional.

---

# Independencia entre estructuras

Las siguientes estructuras son independientes:

* Organización.
* Ubicaciones.
* Sistemas.
* Activos.

Un cambio en una estructura no debe afectar las demás.

Ejemplo:

Mover una bomba de una sala a otra no modifica:

* su modelo,
* su historial,
* su sistema,
* sus documentos.

---

# Relación con Activos

Cada activo posee:

* una ubicación física,
* un sistema funcional (opcional),
* un padre físico (opcional).

Estas relaciones cumplen funciones distintas y no deben confundirse.

---

# Navegación

El sistema deberá permitir navegar por:

Empresa

↓

Planta

↓

Área

↓

Ubicación

↓

Activo

y también por:

Sistema

↓

Activos

independientemente de la ubicación física.

---

# Reglas de negocio

* Toda planta pertenece a una empresa.
* Toda área pertenece a una planta.
* Toda ubicación pertenece a una planta.
* Toda ubicación puede tener una ubicación padre.
* Todo activo pertenece a una ubicación.
* Todo activo puede pertenecer a un sistema.
* Las estructuras jerárquicas no tienen límite de profundidad.
* Las estructuras deben mantenerse independientes.

---

# Integraciones

Este dominio se relaciona con:

* Organización.
* Activos.
* Mantenimiento.
* Inventario.
* Documentación.
* Eventos.
* Analítica.

Es consumido por prácticamente todos los módulos del sistema.

---

# Futuras ampliaciones

El diseño contempla la incorporación de:

* Georreferenciación (GIS).
* Planos interactivos.
* Gemelo digital.
* Modelos BIM.
* Visualización 3D.
* Navegación por mapas.
* Integración con sistemas SCADA.
* Integración con IoT.

Estas funcionalidades deberán incorporarse sin modificar la arquitectura principal del dominio.
