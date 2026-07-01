# ADR-001 — Modelo Técnico Desacoplado

**Estado:** Aceptada

**Versión:** 2.0

**Fecha:** 2026-06-29

---

# Contexto

Durante el diseño del CMMS PURA se evaluó cómo representar la información técnica de los equipos industriales.

Una primera alternativa consistía en almacenar todas las características técnicas directamente en la entidad `Modelo`, mediante columnas específicas (potencia, voltaje, caudal, presión, RPM, etc.).

Sin embargo, este enfoque presenta importantes limitaciones:

* Cada tipo de equipo posee atributos diferentes.
* Obliga a modificar el esquema de la base de datos para incorporar nuevas tecnologías.
* Genera numerosas columnas sin uso para la mayoría de los registros.
* Reduce la flexibilidad y la escalabilidad del sistema.

---

# Decisión

Se adopta un **Modelo Técnico Desacoplado**, donde la identidad comercial de un equipo se separa completamente de sus especificaciones técnicas.

La arquitectura quedará organizada de la siguiente manera:

```text
Fabricante
      │
      ▼
LineaProducto
      │
      ▼
SerieModelo
      │
      ▼
Modelo
      │
      ▼
PlantillaTecnica
      │
      ▼
DefinicionCampo
      │
      ▼
ValorCampo
```

Cada `Modelo` estará asociado a una única `PlantillaTecnica`.

La plantilla define qué características son válidas para ese tipo de equipo.

Los valores concretos se almacenan mediante el mecanismo de `DefinicionCampo` y `ValorCampo`, reutilizando la infraestructura de campos personalizados del sistema.

---

# Ejemplos

## Motor eléctrico

Plantilla:

* Potencia
* Voltaje
* Corriente
* RPM
* Frecuencia
* Clase de aislamiento
* Protección IP
* Peso

---

## Bomba

Plantilla:

* Caudal
* Altura manométrica
* Presión máxima
* Tipo de impulsor
* Material del cuerpo
* Sentido de giro

---

## PLC

Plantilla:

* CPU
* Firmware
* Entradas digitales
* Salidas digitales
* Entradas analógicas
* Comunicación

---

# Beneficios

La decisión proporciona:

* Flexibilidad para nuevos tipos de activos.
* Reutilización del motor de campos personalizados.
* Eliminación de columnas innecesarias.
* Escalabilidad sin modificaciones estructurales.
* Menor acoplamiento entre el modelo de datos y la tecnología de los equipos.

---

# Consecuencias

Las entidades `Modelo` y `Activo` permanecerán livianas.

Las especificaciones técnicas serán administradas mediante plantillas y campos definidos.

Las futuras incorporaciones (sensores, instrumentos, robots, vehículos, etc.) utilizarán exactamente el mismo mecanismo sin requerir cambios en la estructura principal de la base de datos.

---

# Impacto en la arquitectura

Esta decisión afecta principalmente a los dominios:

* Activos.
* Personalización.
* Documentación.
* Inventario.

Y servirá como base para futuras funcionalidades como:

* Comparación automática de modelos.
* Búsqueda por especificaciones técnicas.
* Compatibilidad de repuestos.
* Generación automática de planes preventivos.
* Recomendaciones mediante inteligencia artificial.

---

# Estado de implementación

Pendiente.

Será implementada durante la construcción del `schema_v2.prisma`, comenzando por el dominio del Catálogo Técnico.
