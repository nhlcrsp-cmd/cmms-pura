# Patrón 000 — Base Entity

**Estado:** 🟢 APROBADO

**Versión:** 2.1

**RFC asociada:** RFC-005 Refactor Base Entity v1

---

# Objetivo

Este patrón define la estructura base que deberán seguir todas las entidades persistentes del CMMS.

Su finalidad es garantizar:

* Consistencia del modelo de datos.
* Escalabilidad.
* Trazabilidad.
* Auditoría uniforme.
* Facilidad de mantenimiento.
* Compatibilidad entre dominios.

Este patrón constituye la base arquitectónica de todo el sistema.

---

# Principios

Toda entidad persistente deberá implementar, total o parcialmente, los siguientes conceptos:

1. Identidad.
2. Estado.
3. Ciclo de vida.
4. Auditoría.
5. Relaciones.
6. Integridad.
7. Escalabilidad.

Las excepciones deberán documentarse mediante una ADR.

---

# Modelo Base

## Identidad

Toda entidad persistente deberá poseer:

| Campo | Tipo   | Obligatorio | Descripción                            |
| ----- | ------ | ----------- | -------------------------------------- |
| id    | Int    | Sí          | Identificador interno autoincremental. |
| uuid  | String | Sí          | Identificador público global.          |

### Reglas

* `id` nunca será expuesto por la API.
* `uuid` será utilizado por APIs, integraciones y sincronizaciones.
* El `uuid` nunca deberá modificarse.

---

## Estado

Las entidades deberán diferenciar claramente el estado operativo del ciclo de vida.

### Estado funcional

Campo recomendado:

```text
activo
```

Representa si la entidad puede utilizarse normalmente.

Ejemplos:

* Usuario habilitado.
* Rol activo.
* Equipo operativo.
* Documento vigente.

No representa eliminación.

---

### Soft Delete

Campo recomendado:

```text
eliminadoEn
```

Tipo:

```text
DateTime?
```

Representa la fecha de eliminación lógica.

Los registros eliminados:

* conservan relaciones;
* mantienen historial;
* no deben mostrarse por defecto.

No se realizará eliminación física salvo procesos excepcionales.

---

## Auditoría

Toda entidad deberá registrar como mínimo:

| Campo         |
| ------------- |
| creadoEn      |
| actualizadoEn |

Estos valores serán administrados automáticamente por la aplicación.

---

## Auditoría extendida

Las entidades transaccionales podrán incorporar:

| Campo                   |
| ----------------------- |
| creadoPorUsuarioId      |
| actualizadoPorUsuarioId |

Su implementación dependerá del dominio.

No forman parte del núcleo obligatorio del patrón.

---

# Convenciones de nombres

## Identidad

| Campo |
| ----- |
| id    |
| uuid  |

---

## Estado

| Campo       |
| ----------- |
| activo      |
| eliminadoEn |

---

## Auditoría

| Campo         |
| ------------- |
| creadoEn      |
| actualizadoEn |

---

## Presentación

Cuando una entidad posea atributos visuales deberán utilizarse los siguientes nombres:

| Campo       | Descripción                                 |
| ----------- | ------------------------------------------- |
| iconoNombre | Nombre del icono utilizado por el frontend. |
| colorHex    | Color en formato hexadecimal.               |
| ordenVisual | Orden de presentación.                      |

---

## Información

Cuando corresponda:

| Campo       |
| ----------- |
| codigo      |
| nombre      |
| descripcion |

---

# Catálogos

Las entidades catálogo deberán extender este patrón incorporando:

* codigo
* nombre
* descripcion
* iconoNombre
* colorHex
* ordenVisual

El detalle de esta especialización se encuentra en:

* `docs/patrones/001-entidad-catalogo.md`

---

# Entidades transaccionales

Las entidades transaccionales podrán incorporar además:

* observaciones
* fechaDesde
* fechaHasta
* estado específico del dominio

Estos campos no forman parte del patrón obligatorio.

---

# Exclusiones

Las siguientes estructuras pueden no implementar completamente este patrón:

* Tablas puente simples.
* Tablas temporales.
* Vistas materializadas.
* Tablas técnicas del framework.

Toda excepción deberá documentarse.

---

# Beneficios

La adopción de este patrón proporciona:

* Uniformidad en todos los dominios.
* Menor deuda técnica.
* APIs consistentes.
* Frontend reutilizable.
* Auditoría homogénea.
* Migraciones más simples.
* Mejor mantenibilidad.
* Escalabilidad del modelo.

---

# Dominios que implementan este patrón

* Organización
* Seguridad
* Catálogos
* Catálogo Técnico
* Activos
* Documentación
* Personalización
* Eventos
* Mantenimiento
* Inventario
* Analítica

---

# Reglas de arquitectura

Toda nueva entidad deberá:

1. Evaluar este patrón antes de su diseño.
2. Justificar cualquier excepción mediante una ADR.
3. Mantener la consistencia con las convenciones establecidas.
4. Evitar duplicación de información.
5. Favorecer la normalización del modelo.

---

# Estado

Este documento constituye el patrón arquitectónico base del CMMS.

Todos los dominios deberán alinearse con este patrón antes de ser congelados e implementados en Prisma.

Cualquier modificación futura deberá realizarse mediante una RFC y, una vez aprobada, registrarse mediante una ADR antes de aplicarse al modelo de datos.
