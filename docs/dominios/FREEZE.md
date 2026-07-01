# CMMS PURA - Registro de Congelamiento de Dominios

Este documento registra los dominios cuya arquitectura ha sido aprobada y congelada.

Una vez que un dominio se encuentra en estado **CONGELADO**, cualquier modificación estructural deberá justificarse mediante una **ADR (Architecture Decision Record)** antes de implementarse.

---

# Dominio 01 — Organización

**Estado:** 🟢 CONGELADO

**Versión:** 2.0

**Fecha de aprobación:** 2026-06-30

---

# Dominio 02 — Seguridad

**Estado:** 🟢 CONGELADO

**Versión:** 2.0

**Fecha de aprobación:** 2026-06-30

## Documentación asociada

* `docs/dominios/02-seguridad.md`

## Entidades aprobadas

* Usuario
* Rol
* Permiso
* UsuarioRol
* RolPermiso
* Sesion
* RefreshToken

## Decisiones congeladas

### Modelo de autorización

```text
Usuario
    │
    ▼
UsuarioRol
    │
    ▼
Rol
    │
    ▼
RolPermiso
    │
    ▼
Permiso
```

### Principios aprobados

* Un usuario puede tener múltiples roles.
* Un usuario debe tener al menos un rol activo.
* Solo puede existir un rol principal por usuario.
* Los permisos se asignan únicamente mediante roles.
* Los permisos nunca se asignan directamente a usuarios.
* El sistema queda preparado para múltiples sesiones y renovación de tokens.

## Política de cambios

Toda modificación futura deberá documentarse mediante una ADR antes de implementarse.


## Documentación asociada

* `docs/dominios/01-organizacion.md`
* `docs/003-modelo-de-datos.md`
* `docs/004-entidad-relacion.md`
* `docs/006-diccionario-de-datos.md`

## Entidades aprobadas

* Empresa
* Sitio
* Planta
* Departamento
* Área
* Ubicación
* CalendarioLaboral
* Turno

## Decisiones congeladas

### Organización administrativa

```
Empresa
    ↓
Sitio
    ↓
Planta
```

### Organización funcional

Cada Planta podrá contener:

* Departamentos
* Áreas
* Calendarios laborales
* Ubicaciones

### Organización física

La estructura física será representada exclusivamente mediante la entidad `Ubicación`, utilizando una jerarquía ilimitada padre/hijo.

Los Departamentos y las Áreas **no forman parte del árbol físico**.

### Principios aprobados

* Separación entre estructura organizacional y estructura física.
* Escalabilidad para múltiples empresas, sitios y plantas.
* Soporte para crecimiento sin cambios estructurales.
* Uso de identificadores internos (`id`) y públicos (`uuid`).
* Uso de códigos de negocio para la operación diaria.

## Impacto

Este dominio constituye la base sobre la que se implementarán los siguientes dominios:

* Seguridad
* Catálogo Técnico
* Activos
* Documentación
* Personalización
* Eventos
* Mantenimiento
* Inventario
* Analítica

## Política de cambios

A partir de esta fecha:

* No se modificará la estructura del dominio directamente.
* Toda propuesta de cambio deberá registrarse mediante una ADR.
* La documentación deberá actualizarse antes que la implementación.
* El `schema_v2.prisma` deberá reflejar exactamente este dominio.

---

## Historial

| Versión | Fecha      | Estado    | Observaciones                                      |
| ------- | ---------- | --------- | -------------------------------------------------- |
| 2.0     | 2026-06-30 | CONGELADO | Primera versión aprobada del dominio Organización. |
