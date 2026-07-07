# 006 - Asset Template Pattern

## Estado

CONGELADO

Release 2.1

---

# Objetivo

Definir el patrón oficial para reutilizar información técnica,
planes de mantenimiento, documentación y configuraciones comunes
entre activos del mismo tipo.

Una PlantillaTecnica representa la definición técnica de una
familia de activos, independientemente de cada equipo físico.

---

# Definición

Una PlantillaTecnica describe cómo es un tipo de equipo.

No representa un equipo físico.

No posee historial.

No posee eventos.

No posee órdenes de trabajo.

No posee costos.

---

# Responsabilidad

La PlantillaTecnica concentra toda la información reutilizable.

Ejemplos:

- atributos técnicos
- planes de mantenimiento
- checklists
- inspecciones
- procedimientos
- documentación estándar
- repuestos recomendados

---

# Ejemplo

PlantillaTecnica

Motor Eléctrico

↓

Atributos

Potencia

Voltaje

RPM

Frecuencia

↓

Planes

Lubricación

Inspección

Vibraciones

↓

Checklists

Arranque

Parada

Inspección Visual

---

# Relación con Marca

La PlantillaTecnica NO pertenece a una marca.

Una misma PlantillaTecnica puede utilizarse con distintos fabricantes.

Ejemplo

PlantillaTecnica

Motor Eléctrico

↓

ABB

WEG

SIEMENS

SEW

---

# Relación con Modelo

Los modelos físicos pueden reutilizar una misma PlantillaTecnica.

Ejemplo

ABB M2BAX

↓

PlantillaTecnica Motor Eléctrico

WEG W22

↓

PlantillaTecnica Motor Eléctrico

---

# Relación con Activo

Cada Activo utiliza una única PlantillaTecnica.

La PlantillaTecnica define:

- atributos disponibles
- planes preventivos
- documentación estándar
- checklists
- inspecciones
- procedimientos
- repuestos recomendados

El Activo únicamente almacena:

- identidad
- ubicación
- número de serie
- historial
- eventos
- costos

---

# Beneficios

## Evita duplicación

Los planes no se copian entre activos.

Se definen una sola vez.

---

## Consistencia

Todos los activos que utilizan la misma PlantillaTecnica
comparten exactamente la misma configuración técnica.

---

## Escalabilidad

Actualizar una PlantillaTecnica mejora la configuración
para futuros activos sin alterar el historial de los existentes.

---

## Reutilización

Una PlantillaTecnica puede ser utilizada por cientos
o miles de activos.

---

# Información permitida

Una PlantillaTecnica puede contener:

- atributos técnicos
- documentación
- procedimientos
- planes de mantenimiento
- inspecciones
- checklists
- repuestos recomendados
- parámetros operativos

---

# Información prohibida

Una PlantillaTecnica nunca almacenará:

- número de serie
- ubicación
- costos
- eventos
- averías
- historial
- órdenes de trabajo
- fecha de instalación
- fecha de puesta en servicio

Toda esa información pertenece al Activo.

---

# Arquitectura

Marca
    │
    ▼
Modelo
    │
    ▼
PlantillaTecnica
    │
    ├── TipoAtributo
    ├── PlanMantenimiento
    ├── Checklist
    ├── Documento
    ├── RepuestoRecomendado
    └── Procedimiento
    │
    ▼
Activo
    │
    ├── ValorAtributoActivo
    ├── Evento
    ├── OrdenTrabajo
    ├── Historial
    └── Costos

---

# Principios

Una PlantillaTecnica representa conocimiento.

Un Activo representa un bien físico.

La PlantillaTecnica es reutilizable.

El Activo es único.

Toda información reutilizable pertenece a la PlantillaTecnica.

Toda información histórica pertenece al Activo.

---

# Modificaciones

Toda modificación de este patrón deberá realizarse mediante RFC.

No modificar directamente este documento.