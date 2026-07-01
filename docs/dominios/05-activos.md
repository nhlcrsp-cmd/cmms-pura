# Dominio 05 - Activos

## Objetivo

El dominio **Activos** representa cualquier elemento físico o lógico cuyo ciclo de vida sea administrado por el CMMS.

Un activo puede ser una máquina completa, un subconjunto, un componente, un instrumento, un edificio, un vehículo o cualquier otro elemento sobre el cual la organización necesite registrar información, ejecutar mantenimiento y conservar un historial.

Este dominio constituye el núcleo del sistema.

---

# Definición

Un **Activo** es una entidad administrable que posee identidad propia, ubicación, estado, historial y relaciones con otros elementos del sistema.

Un activo existe independientemente de las órdenes de trabajo, los preventivos o la documentación.

---

# Objetivos del dominio

* Centralizar la información técnica.
* Mantener la trazabilidad completa del ciclo de vida.
* Organizar los activos mediante estructuras jerárquicas.
* Relacionar activos con sistemas funcionales.
* Permitir análisis históricos.
* Servir como eje para mantenimiento preventivo y correctivo.
* Integrarse con inventario, documentación y analítica.

---

# Responsabilidades

El dominio Activos es responsable de:

* Identificación del activo.
* Clasificación.
* Ubicación física.
* Relación funcional.
* Estado operativo.
* Criticidad.
* Historial.
* Documentación.
* Relaciones técnicas.
* Campos personalizados.

No es responsable de ejecutar mantenimiento; esa responsabilidad pertenece al dominio Mantenimiento.

---

# Entidades principales

## Activo

Representa un elemento administrado por el sistema.

Ejemplos:

* Motor
* Bomba
* Válvula
* PLC
* Tablero
* Compresor
* Edificio
* Línea de producción
* Vehículo

---

## Modelo

Representa las características técnicas comunes de varios activos.

Ejemplo:

ABB M3BP160

Todos los motores de ese modelo compartirán:

* potencia
* tensión
* RPM
* peso
* documentación
* fabricante

---

## Fabricante

Empresa responsable de fabricar el modelo.

Ejemplo:

* ABB
* Siemens
* WEG
* Alfa Laval

---

## TipoActivo

Clasificación funcional.

Ejemplo:

* Motor
* Bomba
* Válvula
* Sensor
* PLC

Los tipos podrán organizarse jerárquicamente.

---

## ClaseActivo

Agrupa distintos tipos de activos según su naturaleza.

Ejemplos:

* Equipo Rotativo
* Equipo Estático
* Instrumentación
* Infraestructura
* Vehículo
* Herramienta

---

## Sistema

Agrupación funcional de activos.

No representa una ubicación física.

Ejemplos:

Sistema Producto

Sistema Vapor

Sistema Agua Caliente

Sistema Agua Fría

Sistema CIP

Sistema Aire

Un activo puede pertenecer a un sistema independientemente de su posición en la jerarquía física.

---

## Ubicación

Representa el lugar físico donde se encuentra instalado un activo.

Las ubicaciones forman un árbol independiente.

Ejemplo:

Planta

↓

Producción

↓

Línea 2

↓

Sala Esterilización

↓

Servicios

---

# Árbol de Activos

Los activos pueden organizarse jerárquicamente.

Ejemplo:

Esterilizador

↓

Circuito Agua Caliente

↓

Bomba Producto

↓

Motor

↓

Rodamiento

Cada activo posee un único padre físico.

---

# Relaciones entre activos

Además del árbol físico existirán relaciones funcionales.

Ejemplos:

Motor → acciona → Bomba

PLC → controla → Válvula

Sensor → mide → Tanque

Motor → alimenta → Reductor

Estas relaciones no modifican la estructura jerárquica.

---

# Información propia del activo

Cada activo posee información única.

Ejemplos:

* Código interno.
* Nombre.
* Alias.
* Número de serie.
* Fecha de instalación.
* Estado.
* Criticidad.
* Ubicación.
* Responsable.
* Observaciones.

---

# Información heredada del modelo

El modelo concentra información compartida.

Ejemplos:

* Potencia.
* Peso.
* Tensión.
* RPM.
* Manuales.
* Planos.
* Catálogos.
* Fabricante.

Esta información no debe duplicarse en los activos.

---

# Documentación

Los documentos no pertenecen directamente al activo.

Se administran mediante un repositorio documental común.

Un activo puede asociarse a:

* Manuales.
* Planos.
* Fotografías.
* Certificados.
* Videos.
* Procedimientos.
* Enlaces externos.

---

# Eventos

Todo cambio importante genera un evento.

Ejemplos:

* Creación.
* Cambio de ubicación.
* Cambio de estado.
* Cambio de responsable.
* Documento agregado.
* Ejecución de mantenimiento.
* Baja.

El historial nunca debe eliminarse.

---

# Campos personalizados

El sistema permitirá agregar atributos sin modificar la base de datos.

Ejemplos:

* Presión máxima.
* Caudal.
* Lubricante recomendado.
* Horas nominales.
* Clase de aislamiento.

Los campos personalizados serán administrados por un dominio específico.

---

# Reglas de negocio

* Todo activo posee un identificador único.
* Todo activo pertenece a un modelo.
* Todo activo pertenece a una ubicación.
* Todo activo puede pertenecer a un sistema.
* Todo activo puede tener un padre físico.
* Un activo puede tener múltiples relaciones funcionales.
* El historial nunca debe eliminarse.
* Los documentos se administran de forma centralizada.
* La información técnica compartida pertenece al modelo.
* La información operacional pertenece al activo.

---

# Integraciones

El dominio Activos se relaciona con:

* Organización
* Catálogos
* Documentación
* Eventos
* Inventario
* Mantenimiento
* Analítica
* Personalización

Es el punto central del modelo de dominio.

---

# Futuras ampliaciones

El diseño contempla la incorporación de:

* IoT.
* Sensores en tiempo real.
* Monitoreo de condición.
* IA para predicción de fallas.
* Gemelo digital.
* Realidad aumentada.
* BIM.
* Integraciones con ERP.

Estas funcionalidades deberán construirse sin modificar la arquitectura principal del dominio.
