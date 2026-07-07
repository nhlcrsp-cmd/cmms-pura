# RFC-008
# Ajustes Finales del Dominio Activos

**Estado:** APROBADA

**Versión:** 2.1

**Fecha:** 2026-07-04

---

# Objetivo

Realizar los últimos ajustes de arquitectura sobre el dominio
**05-activos.prisma** antes de congelar oficialmente el dominio.

No se incorporan nuevas funcionalidades.

Las modificaciones buscan mejorar la consistencia, la escalabilidad
y mantener la uniformidad con el resto del proyecto.

---

# Motivación

Durante la revisión del Dominio Activos se detectaron pequeñas
inconsistencias de nomenclatura y oportunidades de mejora que
conviene resolver antes de considerar estable la arquitectura.

---

# Cambios aprobados

## 1. Convención de nombres de tablas

Se adopta la convención de utilizar nombres de tablas en plural.

### Antes

activo

activo_closure

### Después

activos

activos_closure

---

## 2. Organización de índices

Todos los modelos deberán declarar sus índices inmediatamente
antes de la directiva `@@map`.

Se evita declarar índices fuera del bloque de organización.

Ejemplo:

@@index(...)
@@index(...)
@@map("...")

---

## 3. Nuevos tipos de almacenamiento de valores

Se incorporan los siguientes campos en
`ValorAtributoActivo`:

```prisma
valorFechaHora DateTime?

valorHora DateTime?
```

Con esto el sistema podrá representar correctamente:

- Fecha
- Fecha y Hora
- Hora

sin reutilizar el mismo campo para conceptos distintos.

---

## 4. Revisión de `permiteMultiples`

El atributo:

```prisma
permiteMultiples
```

permanece en el modelo `TipoAtributo`.

Su utilización queda pendiente de evaluación durante el
desarrollo de formularios dinámicos.

No se elimina en esta versión.

---

## 5. UUID como estándar arquitectónico

Se confirma que todas las entidades persistentes del proyecto
utilizarán el siguiente patrón de identificación:

```prisma
id   BigInt @id @default(autoincrement())

uuid String @unique @default(uuid())
```

Este patrón pasa a formar parte del estándar definido en:

```
docs/patrones/000-base-entity.md
```

---

# Compatibilidad

Los cambios no modifican la filosofía del dominio.

No afectan la estructura conceptual de:

- Activo
- PlantillaTecnica
- TipoAtributo
- PlantillaTecnicaAtributo
- ValorAtributoActivo

Únicamente mejoran su implementación.

---

# Resultado

Una vez aplicados los cambios definidos por esta RFC,
el dominio **05-activos.prisma** quedará apto para ser
congelado como parte de la arquitectura Release 2.1.

---

# Estado

✅ APROBADA

Implementación obligatoria antes del Freeze del Dominio Activos.
