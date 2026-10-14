## Problema

Las notas rápidas deberían capturarse en segundos, pero la mayoría de apps de notas piden una ventana completa, un documento o iniciar sesión antes de escribir. Cuando la app abre, la idea ya se fue.

## Rol

Construcción en solitario — producto, interfaz en SwiftUI, persistencia local, flujo de teclado, empaquetado y el ícono de la app.

## Restricciones

Una app nativa de macOS (macOS 15+, Apple Silicon e Intel), sin backend ni cuenta. Las notas viven en un único archivo JSON en la Mac del usuario, así que tiene que mantenerse legible y no perder datos en silencio.

## Decisiones

### Un panel flotante, no una app de documentos

Blink es una ventana pequeña y translúcida que no estorba hasta que la necesitas. La abres, escribes, la cierras y vuelves al trabajo.

### Un solo archivo JSON, con red de seguridad

Cada espacio de trabajo y sus notas viven en `~/Library/Application Support/Blink/notes.json`. Si el archivo deja de ser legible, Blink lo aparta como `notes.corrupt-<timestamp>.json` en lugar de sobrescribirlo, para que un parseo fallido no destruya notas reales.

### Espacios de trabajo para conjuntos separados de notas

Las notas se agrupan por espacio de trabajo, y las existentes empiezan en Personal, para que lo personal y lo laboral no se mezclen.

### Orientado al teclado y con autoguardado

`⌘K` abre un panel de acciones para crear, explorar, copiar, borrar y restaurar notas. Las notas se guardan mientras escribes, así que no hay botón de guardar que recordar.

## Resultado

Una app de macOS lista para usar: espacios de trabajo, búsqueda rápida y cambio entre notas, color de acento, tamaño de fuente y opacidad de fondo ajustables, y notas que persisten en JSON local. Se distribuye como release universal `Blink.zip`, con un script de instalación que compila desde el código y copia la app a Aplicaciones.
