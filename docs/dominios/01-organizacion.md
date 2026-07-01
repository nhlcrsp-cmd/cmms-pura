# Dominio 01 — Organización

**Estado:** En revisión

**Versión:** 2.0

---

# Objetivo

El dominio Organización representa la estructura organizacional y física de la empresa.

Su propósito es servir como base para todos los demás dominios del sistema.

Ningún activo, usuario, orden de trabajo o evento podrá existir fuera de esta estructura.

---

# Alcance

Este dominio administra:

* Empresas
* Sitios
* Plantas
* Departamentos
* Áreas
* Ubicaciones
* Calendarios laborales
* Turnos

---

# Modelo conceptual

```text
Empresa
   │
   ▼
Sitio
   │
   ▼
Planta
   ├──────────────► Departamento
   ├──────────────► Área
   ├──────────────► CalendarioLaboral
   └──────────────► Ubicación

Ubicación
   │
   ▼
Ubicación
   │
   ▼
Ubicación
```

La jerarquía física se representa exclusivamente mediante la entidad **Ubicación**.

---

# Entidades

## Empresa

Representa la organización propietaria del sistema.

Ejemplos:

* Pura
* Empresa Demo

---

## Sitio

Representa un establecimiento físico o complejo industrial.

Ejemplos:

* Bahía Blanca
* Córdoba

---

## Planta

Representa una planta productiva dentro de un sitio.

Ejemplos:

* Planta Leche UHT
* Planta Yogures
* Planta Quesos

---

## Departamento

Representa una unidad organizativa.

Ejemplos:

* Mantenimiento
* Producción
* Calidad
* Ingeniería
* Logística
* Recursos Humanos

Los departamentos organizan personas y responsabilidades.

No representan ubicaciones físicas.

---

## Área

Representa una división funcional dentro de una planta.

Ejemplos:

* Línea 1
* Línea 2
* Servicios
* Taller
* Depósito

Las áreas permiten clasificar ubicaciones y activos.

---

## Ubicación

Representa cualquier ubicación física dentro de la planta.

Las ubicaciones forman un árbol jerárquico ilimitado.

Ejemplo:

```text
Planta

Producción

Línea 2

Sala Esterilización

Sector Bombas

Bomba Producto
```

Una ubicación puede contener:

* activos;
* sububicaciones;
* documentación;
* eventos.

---

## CalendarioLaboral

Define los días laborables y no laborables de una planta.

Permitirá:

* cálculo de indicadores;
* programación de mantenimiento;
* disponibilidad de recursos.

---

## Turno

Representa un turno operativo.

Ejemplos:

* Mañana
* Tarde
* Noche

Los turnos pertenecen a un calendario laboral.

---

# Reglas de negocio

* Una empresa posee uno o más sitios.
* Un sitio pertenece a una única empresa.
* Un sitio posee una o más plantas.
* Una planta pertenece a un único sitio.
* Una planta posee múltiples departamentos.
* Una planta posee múltiples áreas.
* Una planta posee múltiples ubicaciones.
* Una ubicación puede tener una ubicación padre.
* No existe límite para la profundidad de la jerarquía de ubicaciones.
* Los departamentos no forman parte del árbol físico.
* Las áreas no forman parte del árbol físico.
* Toda ubicación pertenece a una planta.

---

# Relaciones con otros dominios

## Seguridad

Los usuarios pertenecen a un departamento.

---

## Activos

Los activos pertenecen a una ubicación.

---

## Mantenimiento

Las órdenes de trabajo pueden asignarse a departamentos.

---

## Inventario

Los depósitos son ubicaciones especializadas.

---

## Analítica

Los indicadores podrán agruparse por:

* empresa;
* sitio;
* planta;
* departamento;
* área;
* ubicación.

---

# Decisiones arquitectónicas

* El árbol físico se implementa únicamente mediante `Ubicación`.
* La estructura organizacional y la estructura física permanecen desacopladas.
* Las futuras expansiones (nuevas plantas o nuevos sitios) no requerirán cambios estructurales.

---

# Estado

Este dominio será considerado **congelado** una vez aprobado y registrado en `docs/FREEZE.md`.

Toda modificación posterior deberá documentarse mediante una ADR.
