## Problem

Event organizers need a catalog, reserved checkout that does not double-sell a seat, QR tickets at the gate, and a live view of what is left. A brochure site cannot do that.

## Role

Solo builder. TanStack Start frontend, NestJS API, PostgreSQL, Socket.IO inventory.

## Constraints

Payments are mocked. A real processor comes later. Inventory still has to stay correct when two people checkout at once.

## Decisions

### Reserve, then pay

An order holds seats in PostgreSQL with a TTL. If payment never lands, the hold expires and the seats go back.

### Live inventory over Socket.IO

The catalog does not poll. The API pushes ticket updates so two people looking at the same event see the same remaining count.

### A typed API on the other side

Zod validates every response. Auth is JWT with refresh. Admin and customer routes use separate guards.

## Outcome

A platform you can run locally: public events, reserved checkout, QR tickets, organizer dashboard, and a gate scanner. The frontend and API repos are public. There is no production URL yet.
