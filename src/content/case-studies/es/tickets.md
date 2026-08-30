## Problema

Quien organiza un evento necesita catálogo, un checkout que reserve el asiento sin venderlo dos veces, tickets QR en la puerta y un conteo en vivo de lo que queda. Una landing no alcanza.

## Rol

Construcción en solitario. Frontend en TanStack Start, API en NestJS, PostgreSQL e inventario por Socket.IO. La arquitectura corre en AWS.

## Restricciones

Los pagos van mockeados. El procesador real llega después. El inventario igual tiene que quedar bien si dos personas compran a la vez.

## Decisiones

### Reservar, luego pagar

Un pedido retiene asientos en PostgreSQL con un TTL. Si el pago no llega, la reserva caduca y los asientos vuelven.

### Inventario en vivo por Socket.IO

El catálogo no hace polling. La API empuja cambios de tickets para que dos personas vean el mismo cupo.

### Una API tipada al otro lado

Zod valida cada respuesta. Auth es JWT con refresh. Rutas de admin y de cliente usan guards distintos.

### Alojarlo en AWS

La API vive en AWS detrás de un load balancer. PostgreSQL y S3 quedan en el mismo footprint. Los banners de eventos van a S3.

## Resultado

Una plataforma que corre en local: eventos públicos, checkout reservado, tickets QR, dashboard de organizador y escáner en puerta. Los repos de frontend y API son públicos. Todavía no hay URL de producción.
