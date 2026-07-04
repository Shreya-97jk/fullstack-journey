
---

## Week 3 — Day 5 (2026-07-04)
**Status:** Complete

### Topics
- [x] a. The validation problem — ASCII diagram showing bad data reaching the database with no gatekeeper
- [x] b. Installed Zod, wrote `createBookSchema` (title/author required strings, genre/notes optional, status enum, rating 1-5, finished_at ISO datetime)
- [x] c. Added `validateBody` middleware wired into `books.ts` on POST; refactored `updateBookSchema` via `.partial()` and wired it onto PATCH
- [x] d. The error handling problem — why scattered `res.status()` calls in every controller function don't scale
- [x] e. Built global error-handling middleware: `errors.ts` (`NotFoundError`, `AuthError` extending `Error`) + `errorHandler.ts` (4-param signature, maps `ZodError`→400, `NotFoundError`→404, `AuthError`→401/403, default→500). Refactored `getBook`/`updateBook`/`deleteBook` to `throw new NotFoundError(...)` instead of manual 404 responses
- [x] f. Installed `pino` + `pino-http`, wired `pinoHttp()` into `index.ts` after `express.json()` and before the router. Hit and diagnosed a real bug: multiple stale `nodemon`/`ts-node` processes left running across several terminal sessions, all competing for port 3000 — killed all of them via `ps aux | grep node` + `kill -9`, confirmed clean process list, restarted one server, logging worked
- [x] g. Deliberate breakage testing — 5 scenarios, since `Book` has no `@unique` field besides `id` so scenario 5 was substituted:
  1. Missing required field (`title`) → 400, Zod field error
  2. Wrong data type (`rating` as string) → 400, Zod field error
  3. Nonexistent ID (`/books/9999`) → 404 via `NotFoundError` (also surfaced a real infra bug: `pg-dev` container was stopped, causing a 500 first — fixed with `docker start pg-dev`, then retested to the expected 404)
  4. Non-numeric ID (`/books/abc`) → 400, "Invalid id"
  5. Out-of-range ID (`/books/99999999999`) → 500, generic fallback (valid JS number passes `isNaN` check, but exceeds Postgres's 32-bit integer range — a genuine database-level error correctly caught by the safety net)

### Key concepts understood
- Zod validates shape and type only — it can't guarantee database-level success (e.g. a valid number can still exceed a Postgres integer column's range)
- `.safeParse()` returns a result object instead of throwing; `.parse()` throws directly
- `.partial()` turns a schema's required fields optional — needed for PATCH so clients don't have to resend the whole object
- Extending `Error` + `instanceof` checks is what lets one central error handler branch behavior per error type
- Error-handling middleware is identified by Express purely by its 4-parameter signature `(err, req, res, next)`
- Express 5 automatically catches rejected promises from `async` route handlers — no manual `try/catch` + `next(err)` needed
- `pino` is the logging library; `pino-http` is the Express middleware wrapper that actually hooks into requests/responses
- `pino-http` must run early (before routes) because it needs to attach its "log on finish" listener before a response is sent — placing it too late means it never gets the chance to log anything, which is exactly what caused zero log output initially (compounded by multiple stale server processes)
- A 500 fallback for unrecognized error types is correct design, not a gap — you can't anticipate every possible failure (infra outages, DB-level constraints), so the safety net exists to catch unknowns without crashing or leaking internals
- Two different requests can both produce a 500 for entirely different underlying reasons (database unreachable vs. integer overflow) — the status code alone doesn't tell the whole story, which is why structured logs matter

### Quiz
- [x] 20-question mixed quiz — Score: 18/20

### Deliverables
- [x] Zod validation wired on POST and PATCH `/books`
- [x] `errors.ts` and `errorHandler.ts` committed, global error handling working across all endpoints
- [x] `pino` + `pino-http` structured logging verified working end-to-end
- [x] All 5 breakage scenarios tested and confirmed correct behavior
