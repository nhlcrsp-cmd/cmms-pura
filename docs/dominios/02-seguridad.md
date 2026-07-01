# Dominio 02 — Seguridad

**Estado:** En revisión

**Versión:** 2.0

---

# Objetivo

El dominio Seguridad administra la identidad de los usuarios, la autenticación, la autorización y el control de acceso al sistema.

Su objetivo es garantizar que cada usuario pueda acceder únicamente a los recursos para los que posee autorización.

---

# Alcance

Este dominio administra:

* Usuarios
* Roles
* Permisos
* Asignación de permisos
* Sesiones (futuro)
* Tokens (futuro)
* Auditoría de acceso (futuro)

---

# Modelo conceptual

```text
Usuario
    │
    ▼
UsuarioRol
    │
    ├──────────────► Rol
    │                   │
    │                   ▼
    │              RolPermiso
    │                   │
    ▼                   ▼
Departamento       Permiso
```

---

# Entidades

## Usuario

Representa una persona que utiliza el sistema.

Ejemplos:

* Técnico
* Supervisor
* Planificador
* Jefe de Mantenimiento
* Administrador

Cada usuario pertenece a un único departamento.

Cada usuario puede poseer uno o más roles mediante la entidad UsuarioRol. Uno de ellos puede marcarse como rol principal.

---
## UsuarioRol
Representa la asignación de un rol a un usuario.

Permite:

- múltiples roles por usuario;
- definir un rol principal;
- asignar vigencia;
- registrar quién realizó la asignación;
- mantener historial.


## Rol

Representa un perfil funcional dentro del sistema.

Ejemplos:

* Administrador
* Jefe de Mantenimiento
* Planificador
* Supervisor
* Técnico
* Consulta

Los roles agrupan permisos.

---

## Permiso

Representa una capacidad específica del sistema.

Ejemplos:

* Activo.Ver
* Activo.Crear
* Activo.Editar
* OT.Crear
* OT.Cerrar
* Inventario.Mover
* Usuario.Administrar

Los permisos son independientes de los usuarios.

---

## RolPermiso

Tabla de asociación entre Roles y Permisos.

Permite construir perfiles reutilizables.

---

# Relaciones
Usuario

1 ---- N UsuarioRol

Rol

1 ---- N UsuarioRol
## Usuario

* pertenece a un Departamento.
* pertenece a un Rol.

---

## Rol

* posee muchos Permisos.

---

## Permiso

* puede pertenecer a muchos Roles.

---

# Reglas de negocio

* Todo usuario debe tener al  menos un rol activo.
* Todo usuario debe pertenecer a un departamento.
* Un rol puede utilizarse en múltiples usuarios.
* Un permiso puede pertenecer a múltiples roles.
* Un usuario puede tener multiples roles.
* Solo puede existir un rol principal por usuario.
* Los roles pueden tener vigencia temporal.
* Los permisos nunca se asignarán directamente a los usuarios (versión 2.0).
* Los usuarios inactivos no podrán autenticarse.
* Las contraseñas nunca se almacenarán en texto plano.
* Se almacenará únicamente el hash de la contraseña.

---

# Convenciones

Todos los permisos utilizarán la siguiente nomenclatura:

```
Dominio.Acción
```

Ejemplos:

```
Activo.Ver

Activo.Editar

OT.Crear

OT.Cerrar

Inventario.Consumir

Usuario.Administrar
```

---

# Integración con otros dominios

## Organización

Los usuarios pertenecen a un Departamento.

---

## Activos

Los permisos determinan quién puede crear, modificar o eliminar activos.

---

## Mantenimiento

Los permisos controlan la creación, planificación, ejecución y cierre de órdenes de trabajo.

---

## Inventario

Los permisos controlan movimientos de stock, reservas y consumos.

---

## Analítica

Los permisos controlan el acceso a indicadores y reportes.

---

# Futuras ampliaciones

Este dominio queda preparado para incorporar:

* Múltiples roles por usuario.
* Permisos temporales.
* Inicio de sesión mediante Active Directory o LDAP.
* Inicio de sesión mediante OAuth2.
* Inicio de sesión mediante OpenID Connect.
* Autenticación de dos factores (2FA).
* API Keys.
* Refresh Tokens.
* Gestión de sesiones.
* Registro de auditoría de accesos.

Estas funcionalidades no forman parte del alcance de la versión 2.0, pero el modelo deberá permitir incorporarlas sin cambios estructurales importantes.

---

# Decisiones arquitectónicas

* Los permisos se asignan a través de roles.
* Los roles representan funciones organizacionales.
* Los permisos representan capacidades del sistema.
* La autenticación y la autorización permanecen desacopladas.
* El dominio Seguridad no contendrá lógica de negocio de otros dominios.

---

# Estado

Este dominio será considerado **CONGELADO** una vez aprobado y registrado en `docs/FREEZE.md`.

Toda modificación posterior requerirá una ADR.
