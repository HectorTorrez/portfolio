## Problema

Quien organiza un evento necesita catálogo, un checkout que reserve el asiento sin venderlo dos veces, tickets QR en la puerta y un conteo en vivo de lo que queda. Una landing no alcanza.

## Rol

Construcción en solitario. Frontend en TanStack Start, API en NestJS, PostgreSQL e inventario por Socket.IO. Diseñada para AWS (load balancer, RDS, S3); hoy corre en local.

## Restricciones

Los pagos van mockeados. El procesador real llega después. El inventario igual tiene que quedar bien si dos personas compran a la vez.

## Decisiones

### Reservar, luego pagar

Un pedido retiene asientos en PostgreSQL con un TTL. Si el pago no llega, la reserva caduca y los asientos vuelven.

### Inventario en vivo por Socket.IO

El catálogo no hace polling. La API empuja cambios de tickets para que dos personas vean el mismo cupo.

### Contrato de API tipado de punta a punta

Zod valida cada respuesta. Auth es JWT con refresh. Rutas de admin y de cliente usan guards distintos.

### Diseñada para AWS

El despliegue objetivo pone la API detrás de un load balancer, con PostgreSQL en RDS y los banners de eventos en S3. Docker Compose replica ese entorno en local.

## Resultado

Una plataforma que corre en local: eventos públicos, checkout reservado, tickets QR, dashboard de organizador y escáner en puerta. Los repos de frontend y API son públicos, con tests unitarios y end-to-end en Jest, specs de Playwright, un script de prueba de checkout concurrente y CI en ambos.
