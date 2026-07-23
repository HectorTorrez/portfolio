## Problem

Home cooks often plan meals from what they already have, but browsing recipes still pushes shopping lists. Pantry answers “what can I cook now?” from ingredients, time, and dietary constraints.

## Role

Solo builder — product, UI, API Worker, auth, quotas, and Cloudflare deploy.

## Constraints

Interview challenge requiring a clear client/server split, plain CSS (no UI kit), and edge deploy with no external AI API keys.

## Decisions

### Separate API Worker for AI

TanStack Start owns the UI and SSR; a dedicated Worker handles Workers AI, validation, auth, and rate limits so the frontend never talks to the model directly.

### Prompt engineering over a recipe database

Constraints are injected into a structured Llama 3.1 prompt on Workers AI free tier, with a parser that validates fields — trading corpus coverage for zero external keys and an edge-native path.

## Outcome

Shipped a live Cloudflare Workers app (web + API) that generates three recipes per request, streams parsed results to the UI, and persists signed-in favorites, preferences, and history in D1 while keeping guest state local.
