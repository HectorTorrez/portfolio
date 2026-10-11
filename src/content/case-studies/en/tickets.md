## Problem

Event organizers need a catalog, reserved checkout that does not double-sell a seat, QR tickets at the gate, and a live view of what is left. A brochure site cannot do that.

## Role

Solo builder. TanStack Start frontend, NestJS API, PostgreSQL, Socket.IO inventory. Designed for AWS (load balancer, RDS, S3); runs locally today.

## Constraints

Payments are mocked. A real processor comes later. Inventory still has to stay correct when two people check out at once.

## Decisions

### Reserve, then pay

An order holds seats in PostgreSQL with a TTL. If payment never lands, the hold expires and the seats go back.

### Live inventory over Socket.IO

The catalog does not poll. The API pushes ticket updates so two people looking at the same event see the same remaining count.

### End-to-end typed API contract

Zod validates every response. Auth is JWT with refresh. Admin and customer routes use separate guards.

### Designed for AWS

The target deployment puts the API behind a load balancer, with PostgreSQL on RDS and event banners in S3. Docker Compose mirrors that setup locally.

## Outcome

A platform you can run locally: public events, reserved checkout, QR tickets, organizer dashboard, and a gate scanner. The frontend and API repos are public, with Jest unit and end-to-end tests, Playwright specs, a concurrent-checkout test script, and CI on both.
