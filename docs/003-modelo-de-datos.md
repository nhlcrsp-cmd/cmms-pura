# Documento 003 - Modelo de Datos

Versión: 1.0

Estado: En diseño

---

# Objetivo

Definir la estructura conceptual del CMMS antes de implementar la base de datos.

Este documento representa la arquitectura funcional del sistema y servirá como referencia para el desarrollo del `schema.prisma`.

---

# Principios del modelo

## 1. El activo es el centro del sistema.

Todo sucede alrededor del activo.

No alrededor de la OT.

No alrededor del usuario.

No alrededor del inventario.

El activo concentra toda la información histórica, técnica y operativa.

---

## 2. El historial nunca se elimina.

Todos los registros deberán conservarse.

Las bajas serán lógicas.

Nunca físicas.

---

## 3. La información técnica pertenece al modelo.

Un modelo define:

* fabricante
* especificaciones
* documentación
* imágenes
* manuales

El activo solamente almacena la información propia de la unidad instalada.

---

## 4. La estructura física es jerárquica.

Empresa

↓

Planta

↓

Ubicación

↓

Ubicación

↓

Ubicación

↓

Activo

↓

Activo

↓

Activo

No existe un límite de niveles.

Cada empresa podrá organizar su infraestructura según sus necesidades.

---

## 5. Todo puede documentarse.

Cualquier entidad del sistema podrá tener asociados:

* documentos
* fotografías
* planos
* procedimientos
* videos
* LOP

---

## 6. Todo cambio importante será auditable.

Las operaciones relevantes registrarán:

* usuario
* fecha
* modificación realizada

---

# Dominios del sistema

## Organización

Empresa

Planta

Calendario

Turnos

---

## Seguridad

Usuarios

Roles

Permisos

---

## Infraestructura

Ubicaciones

Jerarquía de ubicaciones

---

## Catálogo técnico

Tipos de activo

Fabricantes

Modelos

Especificaciones

Campos personalizados

---

## Activos

Activos

Jerarquía de activos

Estados

Criticidades

Etiquetas

Historial

---

## Operación

Avisos

Órdenes de trabajo

Preventivos

Inspecciones

Eventos

Paradas

---

## Inventario

Repuestos

Stock

Movimientos

Consumos

Proveedores

---

## Documentación

Documentos

Imágenes

LOP

Procedimientos

Planos

---

## Indicadores

MTBF

MTTR

Disponibilidad

Backlog

Costos

Horas hombre

KPIs

---

## Conocimiento

Lecciones aprendidas

Fallas típicas

Causas raíz

Mejoras implementadas

Procedimientos internos

---

# Filosofía de desarrollo

El sistema deberá ser:

* Modular
* Escalable
* Configurable
* Auditable
* Reutilizable
* Orientado al activo

Toda funcionalidad nueva deberá respetar estos principios antes de incorporarse al proyecto.
