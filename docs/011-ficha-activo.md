# 011 - Ficha del Activo

Versión: 1.0

Estado: En diseño

---

# Objetivo

La Ficha del Activo es el núcleo funcional del CMMS Pura.

Su propósito es concentrar toda la información técnica, operativa e histórica de un activo en una única vista, permitiendo a cualquier usuario comprender rápidamente el estado del equipo y acceder a toda la información relacionada durante su ciclo de vida.

La ficha representa el "Gemelo Digital Ligero" del activo.

---

# Objetivos funcionales

La ficha debe permitir:

* Identificar el activo.
* Conocer su ubicación.
* Comprender su función.
* Consultar su historial.
* Acceder a documentación técnica.
* Ejecutar acciones de mantenimiento.
* Analizar indicadores.
* Preservar el conocimiento generado.

---

# Identificación

Información principal visible al abrir la ficha.

## Datos básicos

* Código interno
* Código QR
* Nombre
* Descripción
* Tipo de activo
* Estado
* Criticidad
* Modelo
* Fabricante
* Número de serie
* Fecha de alta
* Fecha de instalación
* Responsable
* Etiquetas

---

# Ubicación

Debe mostrar la ubicación completa dentro de la planta.

Ejemplo:

Empresa

↓

Planta

↓

Pura 3

↓

Línea 2

↓

Sala Esterilización

↓

Esterilizador 2

---

# Árbol del activo

La ficha debe permitir navegar por la jerarquía del activo.

Ejemplo:

Esterilizador 2

└── Sistema Agua Caliente

    └── Bomba P-201

        └── Motor M-201

        └── Acople

        └── Sello Mecánico

No existirá límite de profundidad.

---

# Estado operativo

Debe mostrar:

* Disponible
* Produciendo
* En mantenimiento
* Detenido
* Fuera de servicio
* Baja

Además podrá mostrar observaciones del estado.

---

# Datos técnicos

Información propia del activo.

Ejemplos:

Motor

* Potencia
* RPM
* Voltaje
* Corriente
* Frecuencia
* Protección IP

Bomba

* Caudal
* Presión
* Tipo de sello
* Material

Intercambiador

* Cantidad de tubos
* Longitud
* Diámetro
* Superficie de intercambio

Caldera

* Potencia
* Presión máxima
* Combustible

Estos datos serán obtenidos mediante Campos Personalizados.

---

# Documentación

La ficha deberá listar toda la documentación asociada.

Tipos de documentos:

* Manuales
* Fotografías
* Videos
* Planos
* Diagramas eléctricos
* Diagramas neumáticos
* Diagramas hidráulicos
* Procedimientos
* LOP
* Certificados
* Fichas técnicas

Cada documento deberá poder visualizarse o descargarse.

---

# Historial

La ficha mostrará una línea de tiempo cronológica.

Ejemplo:

* Alta del activo.
* Cambio de ubicación.
* Cambio de motor.
* Preventivo ejecutado.
* Cambio de rodamiento.
* Aviso generado.
* Orden de trabajo cerrada.
* Documento agregado.
* Modificación técnica.

Todo quedará registrado como Eventos.

---

# Órdenes de trabajo

Listado completo.

Mostrar:

* Número
* Fecha
* Prioridad
* Estado
* Responsable
* Tiempo invertido
* Costos

Permitir acceso directo a cada OT.

---

# Preventivos

Mostrar:

* Plan asociado
* Frecuencia
* Última ejecución
* Próxima ejecución
* Cumplimiento

---

# Repuestos

Mostrar los repuestos asociados al activo.

Información mínima:

* Código
* Descripción
* Stock disponible
* Último reemplazo
* Consumo anual

---

# Indicadores

La ficha deberá calcular automáticamente indicadores relevantes.

Inicialmente:

* MTBF
* MTTR
* Disponibilidad
* Tiempo detenido
* Horas trabajadas
* Cantidad de fallas
* Cantidad de OT
* Costos acumulados

---

# Conocimiento

Esta sección concentrará la experiencia acumulada sobre el activo.

Debe incluir:

* Fallas frecuentes
* Causas raíz
* Lecciones aprendidas
* Mejoras implementadas
* Recomendaciones
* Observaciones técnicas

Este conocimiento deberá permanecer disponible para futuras intervenciones.

---

# Relaciones

La ficha deberá mostrar:

## Activo padre

## Activos hijos

## Equipos relacionados

## Instrumentos asociados

## Servicios asociados

---

# Auditoría

Registrar:

* Usuario creador
* Fecha de creación
* Última modificación
* Historial de modificaciones

---

# Acciones rápidas

Desde la ficha será posible:

* Crear Aviso
* Crear Orden de Trabajo
* Registrar Preventivo
* Adjuntar Documento
* Cargar Fotografía
* Registrar Medición
* Registrar Cambio de Repuesto
* Generar Código QR
* Imprimir Ficha Técnica
* Exportar información
* Consultar historial completo

---

# Diseño de la interfaz

La información deberá organizarse en pestañas.

## General

Identificación y estado.

## Técnica

Datos técnicos y campos personalizados.

## Documentación

Archivos asociados.

## Historial

Línea de tiempo.

## Órdenes de Trabajo

OT del activo.

## Preventivos

Planes y ejecuciones.

## Repuestos

Componentes asociados.

## Indicadores

KPIs del activo.

## Conocimiento

LOP, procedimientos, fallas frecuentes y lecciones aprendidas.

---

# Evolución futura

La ficha del activo deberá evolucionar hasta convertirse en el punto central del sistema, integrando información proveniente de mantenimiento, inventario, documentación, indicadores, monitoreo e inteligencia artificial.

Su objetivo final es representar digitalmente el ciclo de vida completo del activo y facilitar la toma de decisiones basada en información técnica confiable y trazable.
