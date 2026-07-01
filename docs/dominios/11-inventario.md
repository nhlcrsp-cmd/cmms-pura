# Dominio 11 - Inventario

## Objetivo

El dominio **Inventario** administra los materiales, repuestos, herramientas y consumibles utilizados durante las actividades de mantenimiento.

Su finalidad es garantizar la disponibilidad de los recursos necesarios, mantener la trazabilidad de los movimientos y controlar el costo de los materiales.

Este dominio constituye el soporte logístico del mantenimiento.

---

# Definición

El inventario representa el conjunto de recursos físicos administrados por el CMMS.

Cada movimiento debe quedar registrado y poder reconstruirse históricamente.

El sistema nunca deberá perder la trazabilidad de un material.

---

# Objetivos del dominio

* Administrar repuestos.
* Controlar existencias.
* Registrar movimientos.
* Gestionar depósitos.
* Asociar materiales a activos.
* Integrarse con las órdenes de trabajo.
* Calcular costos de mantenimiento.
* Facilitar compras futuras.

---

# Entidades principales

## Repuesto

Representa un material administrado por el sistema.

Ejemplos:

* Rodamiento
* Retén
* Correa
* Sensor
* Fusible
* Aceite
* Junta
* Válvula

Cada repuesto posee identidad propia.

---

## Modelo de Repuesto

Permite agrupar distintos repuestos iguales.

Ejemplo:

SKF 6205-2RS

Puede existir en múltiples depósitos.

---

## Fabricante

Representa el fabricante del repuesto.

Ejemplos:

* SKF
* FAG
* ABB
* Siemens
* WEG

---

## Proveedor

Empresa que suministra el repuesto.

Un mismo repuesto puede tener múltiples proveedores.

---

## Depósito

Representa un lugar físico donde se almacenan materiales.

Ejemplos:

* Almacén Central
* Taller Mecánico
* Pañol
* Depósito Eléctrico
* Stock de Emergencia

---

## Stock

Representa la cantidad disponible de un repuesto en un depósito.

Permite administrar múltiples ubicaciones físicas para un mismo material.

---

## Movimiento

Todo cambio de stock genera un movimiento.

Nunca se modifica el stock directamente.

El stock siempre surge de la suma de movimientos.

---

# Tipos de movimiento

Ejemplos:

* Compra
* Consumo
* Ajuste
* Transferencia
* Devolución
* Baja
* Inventario
* Producción
* Donación

Estos tipos serán administrados mediante catálogos.

---

# Reserva

Permite reservar materiales para una Orden de Trabajo.

Mientras un material esté reservado no podrá asignarse a otra intervención sin autorización.

---

# Consumo

Representa el uso efectivo de materiales durante una intervención.

Cada consumo deberá quedar asociado a:

* OT
* Activo
* Técnico (opcional)
* Fecha
* Cantidad

Todo consumo genera automáticamente un movimiento de inventario.

---

# Herramientas

El dominio podrá administrar herramientas críticas.

Ejemplos:

* Torquímetro
* Multímetro
* Calibrador
* Cámara Termográfica

Podrán asociarse a:

* Técnicos
* Órdenes de Trabajo
* Calibraciones

---

# Relación con Activos

Los repuestos podrán asociarse a:

* Modelos
* Activos

Esto permitirá identificar rápidamente los materiales compatibles con un equipo.

---

# Costos

El sistema deberá registrar:

* Costo unitario
* Costo promedio
* Último costo
* Moneda
* Fecha de actualización

Estos datos servirán para calcular el costo de mantenimiento.

---

# Indicadores

El dominio permitirá calcular:

* Valor del inventario
* Rotación de stock
* Consumo mensual
* Materiales críticos
* Stock inmovilizado
* Quiebres de stock
* Tiempo medio de reposición

Los indicadores se calcularán a partir de los movimientos registrados.

---

# Reglas de negocio

* Todo repuesto posee un código único.
* Todo movimiento debe conservarse históricamente.
* Ningún movimiento podrá eliminarse.
* El stock se calcula a partir de los movimientos.
* Un repuesto puede existir en múltiples depósitos.
* Toda salida de materiales debe quedar documentada.
* Todo consumo asociado a una OT actualizará automáticamente el inventario.

---

# Integraciones

Este dominio consume información de:

* Catálogos
* Activos
* Mantenimiento
* Documentación

Y proporciona información a:

* Analítica
* Dashboard
* Compras
* Reportes de costos

---

# Futuras ampliaciones

La arquitectura contempla incorporar:

* Gestión de compras.
* Solicitudes de abastecimiento.
* Órdenes de compra.
* Recepción de materiales.
* Control por lote.
* Número de serie.
* Fecha de vencimiento.
* Código QR.
* Código de barras.
* RFID.
* Integración con ERP.
* Reabastecimiento automático.
* Pronóstico de demanda mediante IA.

Estas funcionalidades deberán incorporarse sin modificar la estructura principal del dominio.
