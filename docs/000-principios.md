# 000 - Principios del Proyecto

Versión: 1.0

Estado: Vigente

---

# Propósito

Este documento define los principios fundamentales que rigen el desarrollo del CMMS Pura.

Toda decisión técnica o funcional deberá respetar estos principios.

---

# 1. El activo es el centro del sistema

Toda la información del sistema gira alrededor de un activo.

Los módulos de órdenes de trabajo, preventivos, inventario, documentación, indicadores y conocimiento deberán relacionarse directa o indirectamente con un activo.

---

# 2. El historial nunca se elimina

No se realizarán eliminaciones físicas de información operativa.

Las bajas serán lógicas mediante estados o indicadores de actividad.

El historial constituye uno de los activos más importantes del sistema.

---

# 3. El conocimiento pertenece a la organización

Toda solución aplicada, mejora implementada, procedimiento, LOP, análisis de causa raíz o lección aprendida deberá quedar registrada para futuras intervenciones.

El sistema debe contribuir a preservar el conocimiento técnico de la empresa.

---

# 4. Configuración separada de la operación

El sistema se divide en dos grandes áreas:

Configuración

* Empresas
* Plantas
* Usuarios
* Roles
* Catálogos
* Modelos
* Campos personalizados

Operación

* Avisos
* Órdenes de trabajo
* Preventivos
* Inventario
* Indicadores
* Documentación

---

# 5. Diseño modular

Cada módulo debe ser independiente.

La incorporación de nuevos módulos no deberá afectar el funcionamiento de los existentes.

---

# 6. Configuración antes que programación

Siempre que sea posible, una nueva funcionalidad deberá implementarse mediante configuración y no mediante modificaciones del código fuente.

---

# 7. Arquitectura jerárquica

Las ubicaciones y los activos deberán admitir una jerarquía de profundidad ilimitada.

No se impondrá una estructura fija de planta.

---

# 8. Auditoría

Toda operación importante deberá registrar:

* Usuario
* Fecha
* Acción realizada

El sistema deberá garantizar trazabilidad completa.

---

# 9. Escalabilidad

El sistema deberá permitir administrar múltiples empresas y múltiples plantas sin cambios estructurales.

---

# 10. Simplicidad para el usuario

La complejidad técnica deberá resolverse en la arquitectura del sistema.

La experiencia del usuario deberá ser simple, clara y rápida.

---

# Objetivo final

Construir una plataforma de gestión de mantenimiento industrial moderna, escalable y orientada al conocimiento, capaz de administrar el ciclo de vida completo de los activos y facilitar la toma de decisiones mediante información confiable y trazable.
