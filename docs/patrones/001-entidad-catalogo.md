# Patrón 001 — Entidad Catálogo

**Estado:** Aprobado

**Versión:** 1.0

---

# Objetivo

Este patrón define la estructura estándar que deberán seguir todas las entidades de catálogo del sistema.

Su finalidad es garantizar consistencia en el modelo de datos, simplificar el desarrollo y facilitar el mantenimiento.

---

# ¿Qué es una entidad catálogo?

Una entidad catálogo representa un conjunto de valores administrables por el sistema.

No almacena información transaccional.

Su propósito es clasificar, configurar o parametrizar otros dominios.

Ejemplos:

* Rol
* Permiso
* Fabricante
* Familia Técnica
* Estado de Activo
* Prioridad
* Criticidad
* Unidad de Medida

---

# Estructura estándar

Toda entidad catálogo deberá implementar la siguiente estructura lógica.

## Identidad

* id
* uuid

---

## Información

* codigo
* nombre
* descripcion

---

## Presentación

* icono
* color
* orden

---

## Estado

* activo

---

## Auditoría

* creadoEn
* actualizadoEn

---

# Convenciones

## id

Identificador interno de la base de datos.

Nunca será expuesto por la API.

---

## uuid

Identificador público.

Será utilizado por la API y las integraciones externas.

---

## codigo

Código único de negocio.

Debe ser corto, estable y legible.

Ejemplos:

```text
ADM
TEC
MNT
INV
SKF
WEG
```

---

## nombre

Nombre visible para el usuario.

---

## descripcion

Información opcional.

---

## icono

Nombre del icono utilizado por el frontend.

No almacena imágenes.

Ejemplos:

```text
settings
factory
build
inventory
engineering
```

---

## color

Color utilizado por la interfaz.

Formato recomendado:

```text
#1976D2
```

El backend no interpreta este valor.

Es únicamente información de presentación.

---

## orden

Permite controlar el orden de visualización.

No debe utilizarse como identificador.

---

## activo

Permite habilitar o deshabilitar registros sin eliminarlos.

Nunca se realizará borrado físico de catálogos.

---

# Restricciones

Toda entidad catálogo deberá cumplir:

* codigo único.
* uuid único.
* nombre indexado.
* activo indexado.

---

# Relaciones

Los catálogos podrán ser referenciados desde cualquier dominio.

Nunca deberán contener lógica de negocio.

---

# Exclusiones

No deberán implementarse mediante este patrón:

* Activos
* Usuarios
* Órdenes de Trabajo
* Avisos
* Documentos
* Mediciones
* Eventos

Estas entidades poseen ciclo de vida propio.

---

# Beneficios

La adopción de este patrón proporciona:

* consistencia en todo el modelo;
* menor esfuerzo de desarrollo;
* menor curva de aprendizaje;
* reutilización de componentes del frontend;
* simplificación de la administración de datos;
* reducción de deuda técnica.

---

# Catálogos que implementarán este patrón

Entre otros:

* Rol
* DominioSistema
* RecursoSistema
* AccionSistema
* AlcancePermiso
* Fabricante
* FamiliaTecnica
* UnidadMedida
* EstadoActivo
* Criticidad
* Prioridad
* TipoDocumento
* TipoEvento
* EstadoOrdenTrabajo
* EstadoAviso

---

# Estado

Este patrón queda aprobado y podrá ser reutilizado por cualquier dominio del sistema.

Las modificaciones futuras deberán registrarse mediante una ADR.

