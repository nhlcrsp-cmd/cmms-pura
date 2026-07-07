# 003 - Catalog Pattern

## Estado

CONGELADO

Release 2.1

---

# Objetivo

Definir la estructura, reglas y convenciones que deben seguir todos los
catálogos del CMMS.

Este documento garantiza consistencia entre los distintos dominios y evita
duplicación de criterios de diseño.

---

# Definición

Un catálogo representa un conjunto administrable de valores reutilizables
por uno o más dominios del sistema.

Ejemplos:

- Marca
- Modelo
- Familia
- Criticidad
- Especialidad
- TipoActivo
- EstadoActivo
- Prioridad
- TipoDocumento

Los catálogos NO representan entidades operativas.

---

# Estructura obligatoria

Todo catálogo debe contener como mínimo:

id

uuid

codigo

nombre

descripcion

iconoNombre

colorHex

ordenVisual

activo

eliminadoEn

creadoEn

actualizadoEn

---

# Reglas generales

## 1.

Todo catálogo posee un identificador técnico.

```
id
```

---

## 2.

Todo catálogo posee UUID.

```
uuid
```

---

## 3.

Todo catálogo debe tener un código único.

```
codigo
```

---

## 4.

Todo catálogo debe tener un nombre.

```
nombre
```

---

## 5.

La descripción es opcional.

```
descripcion
```

---

## 6.

Todos los catálogos admiten configuración visual.

```
iconoNombre

colorHex

ordenVisual
```

---

## 7.

Todos los catálogos soportan borrado lógico.

```
activo

eliminadoEn
```

---

## 8.

Todos los catálogos son auditables.

```
creadoEn

actualizadoEn
```

---

# Relaciones entre catálogos

Los catálogos pueden depender de otros catálogos.

Ejemplo:

Marca

↓

Modelo

La dependencia debe representar una relación de negocio real.

No deben agregarse relaciones únicamente por conveniencia técnica.

---

# Información técnica

Los catálogos NO almacenan características técnicas.

Ejemplo incorrecto:

Modelo

Potencia

Voltaje

RPM

Peso

Esas propiedades pertenecen a la entidad operativa (Activo), no al catálogo.

---

# Convenciones

Nombre del modelo:

PascalCase

Ejemplo:

Marca

Modelo

TipoActivo

---

Nombre de tabla:

snake_case

singular

Ejemplo:

marca

modelo

tipo_activo

---

# Índices

Indexar únicamente:

- claves foráneas
- código
- nombre

No indexar:

- booleanos
- descripciones
- campos visuales

---

# Restricciones

Todo catálogo debe tener:

codigo único

nombre único cuando corresponda

Las restricciones compuestas deberán responder a reglas de negocio y no a necesidades de implementación.

---

# Jerarquías

Los catálogos son planos por defecto.

Sólo podrán implementar jerarquías cuando exista una RFC aprobada.

---

# Internacionalización

Los nombres almacenados corresponden al idioma base del sistema.

Las traducciones deberán implementarse mediante un mecanismo específico y nunca duplicando registros del catálogo.

---

# Extensión

Si un catálogo requiere información específica de negocio, ésta deberá implementarse agregando únicamente los campos necesarios sin romper la estructura base definida en este documento.

---

# Catálogos aprobados (Release 2.1)

Marca

Modelo

Familia

Fabricante

TipoActivo

Criticidad

Especialidad

Prioridad

EstadoActivo

TipoDocumento

---

# Modificaciones

Cualquier cambio a este patrón deberá realizarse mediante RFC.

No modificar directamente este documento.