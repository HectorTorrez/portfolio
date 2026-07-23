## Problema

Quien cocina en casa suele partir de lo que ya tiene, pero buscar recetas termina empujando una lista de compras. Pantry responde “¿qué puedo cocinar ahora?” con ingredientes, tiempo y restricciones dietéticas.

## Rol

Construcción en solitario — producto, UI, Worker de API, auth, cuotas y despliegue en Cloudflare.

## Restricciones

Reto de entrevista con separación clara cliente/servidor, CSS plano (sin kit de UI) y despliegue en el edge sin claves externas de IA.

## Decisiones

### Worker de API aparte para la IA

TanStack Start maneja la UI y el SSR; un Worker dedicado se encarga de Workers AI, validación, auth y rate limits para que el frontend no hable con el modelo directamente.

### Ingeniería de prompts en lugar de una base de recetas

Las restricciones se inyectan en un prompt estructurado con Llama 3.1 en el free tier de Workers AI, con un parser que valida campos — se prioriza cero claves externas y un camino nativo en el edge.

## Resultado

Aplicación en vivo en Cloudflare Workers (web + API) que genera tres recetas por solicitud, envía resultados parseados a la UI y persiste favoritos, preferencias e historial en D1 para usuarios autenticados, manteniendo el estado de invitado en local.
