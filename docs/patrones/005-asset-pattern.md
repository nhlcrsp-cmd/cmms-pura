Estado

BORRADOR

Release 2.1

Objetivo

Definir el patrón oficial para representar cualquier activo físico dentro del CMMS.

El patrón debe permitir administrar el ciclo de vida completo del activo, su ubicación, su jerarquía, su documentación, sus eventos y su mantenimiento.

Definición de Activo

Un activo es un elemento físico con identidad propia que requiere seguimiento durante su vida útil.

Un activo:

tiene un identificador único;
puede tener historial;
puede tener órdenes de trabajo;
puede tener mantenimiento preventivo;
puede tener documentación;
puede contener otros activos.
Definición de Componente

Un componente forma parte de un activo.

No posee identidad propia dentro del CMMS.

Su reemplazo se registra como parte del mantenimiento del activo al que pertenece.

Ejemplos:

sello mecánico;
rodamiento;
retén;
junta;
impulsor.
Definición de Repuesto

Un repuesto pertenece al inventario.

Cuando se instala en un activo deja de ser stock y pasa a formar parte de ese activo como componente.

Jerarquía

Los activos utilizarán el mismo patrón que Organización:

Adjacency List
Closure Table

Esto permitirá representar estructuras como:

Esterilizador 2
└── Bomba de Producto
    ├── Motor
    ├── Acople
    └── Sensor de presión
Relación con Organización

Todo activo pertenece a una única Unidad Organizacional.

Nunca almacenará información propia de planta, línea o sector.

Relación con Catálogos

Todo activo podrá asociarse a:

Marca
Modelo

Otros catálogos específicos se incorporarán cuando el dominio los requiera.

Información técnica

Las características técnicas no forman parte del modelo Activo.

Se administrarán mediante un sistema de atributos configurable.

Ejemplos:

Potencia
Voltaje
RPM
Caudal
Presión
Temperatura máxima
Principios
Un activo representa un bien físico administrable.
Un componente no es un activo.
Un repuesto no es un activo.
El historial pertenece al activo.
Los atributos técnicos son configurables.
La jerarquía es independiente de la estructura organizacional.