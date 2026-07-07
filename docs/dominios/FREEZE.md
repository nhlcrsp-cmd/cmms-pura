# CMMS PURA
# FREEZE DE ARQUITECTURA

Versión: 2.1

Última actualización: 2026-07-03

---

# DOMINIOS CONGELADOS

## 01 - Organización

Estado:
CONGELADO

Incluye:

- Empresa
- TipoUnidadOrganizacional
- UnidadOrganizacional
- UnidadOrganizacionalClosure

Patrones:

- Árbol mediante Adjacency List + Closure Table

---

## 02 - Seguridad

Estado:
CONGELADO

Incluye:

- Usuario
- Rol
- Permiso
- UsuarioRol
- RolPermiso
- SesionUsuario

---

## 03 - Catálogos

Estado:
CONGELADO

Incluye:

- Marca
- Modelo

Decisiones:

- Los catálogos de negocio se incorporarán únicamente cuando un dominio los requiera.
- Marca y Modelo constituyen el catálogo base de Activos.

---

## 04 - Catálogo Técnico

Estado:
ARQUITECTURA CONGELADA

Implementación pendiente.

Catálogos aprobados:

- UnidadMedida
- TipoArchivo

No se crearán nuevos catálogos sin necesidad comprobada.

---

## 05 - Activos

Estado:
EN CONSTRUCCIÓN

Congelado hasta el momento:

- Activo
- ActivoClosure
- Patrón de jerarquía mediante Closure Table

Pendiente:

- PlantillaTecnica
- TipoAtributo
- ActivoTipoAtributo
- ValorAtributoActivo

---

# PATRONES CONGELADOS

000-base-entity.md

001-entidad-catalogo.md

002-prisma-style-guide.md

003-catalog-pattern.md

005-asset-pattern.md

006-asset-template-pattern.md

---

# RFC APROBADAS

RFC-005
Refactor BaseEntity

RFC-006
Catálogos con código funcional

RFC-007
Dominio Activos

---

Toda modificación sobre un dominio congelado deberá realizarse mediante una RFC.