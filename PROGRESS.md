# Progress Log

## Week 1 — Day 1 (2026-06-07)
**Status:** Complete

### Topics
- [x] a. Terminal: cd / ls / pwd / mkdir / rm / cat / less / grep / pipe / redirect
- [x] b. Environment variables
- [x] c. What a Git repository is; git init; .git folder
- [x] d. Three-room model: workspace → staging → repo
- [x] e. First commit; commit messages
- [x] f. .gitignore
- [x] g. Claude Code basics

### Quiz
- [x] 20-question mixed quiz

### Deliverable
- [x] Draw three Git rooms on paper with arrows

---

## Week 1 — Day 2 (2026-06-09)
**Status:** Complete

### Topics
- [x] a. Git vs GitHub — analogy: notebook vs friend's house backup
- [x] b. gh auth login — authenticated as Shreya-97jk
- [x] c. git remote add origin — what remote and origin mean, HTTPS vs SSH
- [x] d. git push -u origin main — what -u (tracking) does
- [x] e. Branches — why they exist, protecting main
- [x] f. Practical: feature/learning-notes branch → commit → push → PR → merge
- [x] g. Merge conflicts — created one deliberately, resolved with markers
- [x] h. Commands reference: status, add, commit, log, diff, branch, switch, push, pull, clone

### Quiz
- [x] 20-question mixed quiz — Score: 18/20

### Deliverables
- [x] ASCII diagram 1: laptop <-> GitHub with push/pull/clone arrows
- [x] ASCII diagram 2: branch off main and merging back

---

## Week 1 — Day 3 (2026-06-10)
**Status:** Complete

### Topics
- [x] a. HTML tag tree idea — 10 tags, box-inside-box model
- [x] b. Common attributes: id, class, href, src, type, value
- [x] c. CSS selectors: element, .class, #id — specificity order
- [x] d. Box model — margin / border / padding / content, box-sizing: border-box
- [x] e. display: flex — flex-direction, justify-content, align-items, gap
- [x] f. Build: scratch.html with header, three flex cards, styled button

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

### Deliverable
- [x] scratch.html committed — header, 3-card flex row, button

---

## Week 1 — Day 4 (2026-06-11)
**Status:** Complete (deliverable carries over to Day 5)

### Topics
- [x] a. What HTTP is — client-server model, stateless fact
- [x] b. Anatomy of an HTTP request — method, path, headers, body
- [x] c. Anatomy of an HTTP response — status line, headers, body
- [x] d. GET, POST, PUT, PATCH, DELETE — one scenario each, all run with curl
- [x] e. Status code families — memorised: 200, 201, 204, 400, 401, 403, 404, 409, 500
- [x] f. Headers — Content-Type, Authorization, Accept
- [x] g. JSON vs XML — why JSON won
- [x] h. curl vs Postman — when to use each
- [x] i. Postman collection "jsonplaceholder practice" — 5 saved requests

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

### Deliverable
- [ ] Draw on paper: browser loads www.example.com — DNS, request, response, rendering (carries over to Day 5)

---

## Week 1 — Day 5 (2026-06-12)
**Status:** Complete

### Topics
- [x] a. const / let / var — default to const, let for reassignment, never var
- [x] b. === vs == — always use ===, checks type AND value
- [x] c. Arrow functions — single-line auto-return, multi-line needs {} and return
- [x] d. Template literals — backtick + ${} instead of Python f-strings
- [x] e. Array methods — map, filter, find, forEach, reduce (Python list comp equivalents)
- [x] f. Destructuring — array and object unpacking, also works in function params
- [x] g. async / await — same keywords as Python, forgetting await returns a Promise not a value
- [x] h. import / export — named exports use {}, default export has one per file
- [x] i. npm vs pip — npm install, package.json, node_modules (never commit)
- [x] j. TypeScript basics — interface, type, typing params/returns, optional fields with ?

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

### Deliverable
- [x] scratch.ts — all 10 concepts, runs cleanly with npx tsx scratch.ts

---

## Week 1 — Day 6 (2026-06-13)
**Status:** Complete

### Topics
- [x] a. What an entity is — blueprint vs row (interface vs instance analogy)
- [x] b. Relationships: one-to-many and many-to-many with join tables
- [x] c. REST endpoint design: 5 standard endpoints, METHOD /resource vs METHOD /resource/:id
- [x] d. Picked project: Reading Log / Tracker
- [x] e. Designed Book entity with all fields — id, title, author, genre, status, rating (nullable), notes, finished_at, created_at
- [x] f. Designed full endpoint list including query param filtering (?status=x)
- [x] g. UI sketches: list page, detail page, create form

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

### Deliverable
- [x] PROJECT.md committed — project name, description, Book entity with fields/types, full endpoint list, 3 UI sketches

---

## Week 2 — Day 1 (2026-06-14)
**Status:** Complete

### Topics
- [x] a. npm init -y — package.json fields: name, version, scripts, dependencies, devDependencies
- [x] b. Why TypeScript — TS source → tsc compiler → JS → Node runtime
- [x] c. Install deps: express (runtime), typescript + @types/* + ts-node + nodemon (dev)
- [x] d. tsconfig.json — target, module, rootDir, outDir, strict, esModuleInterop, skipLibCheck
- [x] e. Folder structure: src/index.ts, routes/, controllers/, services/, models/, middleware/
- [x] f. Wrote src/index.ts — minimal Express app, GET / returns { hello: "world" }
- [x] g. npm scripts: dev (nodemon + ts-node), build (tsc), start (node dist/index.js)
- [x] h. Ran npm run dev — hit GET / with curl and Postman, both returned { hello: "world" }

### Quiz
- [x] 20-question mixed quiz — Score: 16/20

### Deliverable
- [x] Express + TypeScript server running on localhost:3000
- [x] Folder structure in place (src/routes, controllers, services, models, middleware)
- [x] backend/README.md with setup and how-to-run instructions

---

## Week 2 — Day 2 (2026-06-15)
**Status:** Complete

### Topics
- [x] a. Big picture: route → controller → service → model. Drew ASCII flow for a POST request end-to-end
- [x] b. MODEL: wrote `src/models/book.ts` — Book interface with all fields, optional fields with `?`, union type for status
- [x] c. SERVICE: in-memory array, create/findAll/findById/update/remove
- [x] d. CONTROLLER: reads req, calls service, sends res — 400 for bad id, 404 for missing book, 204 for delete
- [x] e. ROUTE: defines URL + method, wired into index.ts via app.use('/books', bookRouter)
- [x] f. Tested all 5 endpoints with curl — POST, GET, GET/:id, PATCH/:id, DELETE/:id all working
- [x] g. Reflection: traced a POST through every file, function by function

### Key concepts understood
- Interface = shape/type only, not data — TypeScript is compile-time only, vanishes at runtime
- Layered architecture: each layer only knows one direction; controller never touches the array directly
- Why separation matters: business rules live in the service, HTTP concerns live in the controller
- Model layer defines shape only — service is responsible for storing and mutating data
- 204 No Content = success with no body (correct for DELETE)
- req.params.id is always a string — must parseInt() and check isNaN()

### Deliverable
- [x] `src/models/book.ts` committed
- [x] `src/services/bookService.ts` committed
- [x] `src/controllers/bookController.ts` committed
- [x] `src/routes/books.ts` committed
- [x] All 5 CRUD endpoints tested and working

---
_Updated at end of each session._

---

## Week 2 — Day 2-3 (2026-06-25)
**Status:** Complete

### Topics
- [x] a. Big picture: route → controller → service → model. ASCII flow for POST request
- [x] b. MODEL: Book interface in src/models/book.ts
- [x] c. SERVICE: in-memory array, create/findAll/findById/update/remove in src/services/bookService.ts
- [x] d. CONTROLLER: reads req, calls service, sends res in src/controllers/bookController.ts
- [x] e. ROUTE: defines URL + method, wired into src/index.ts via src/routes/books.ts
- [x] f. Postman: tested all 5 endpoints (POST, GET, GET/:id, PATCH/:id, DELETE/:id)
- [x] g. Reflection: traced POST request file by file, function by function

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

### Deliverable
- [x] Full CRUD working in Postman
- [x] 4+ commits showing layer-by-layer build

---

## Week 2 — Day 4 (2026-06-28)
**Status:** Complete

### Topics
- [x] a. What a skill IS vs asking Claude a direct question — ASCII diagram: CLAUDE.md vs .claude/skills/ vs MCP plugins
- [x] b. Where skills live — project-scoped (.claude/skills/) vs global (~/.claude/skills/) — decision rule: "would someone cloning this repo benefit?"
- [x] c. Anatomy of a skill — YAML frontmatter (description, allowed-tools) + markdown body (instructions). Annotated example. Vague vs specific instructions with real examples from the project
- [x] d. CLAUDE.md vs skill — CLAUDE.md = always active, skill = invoked on demand. parseInt() rule as concrete example of same rule in both places for different reasons
- [x] e. Drafted .claude/skills/new-endpoint/SKILL.md — all sections complete and reviewed:
  - [x] YAML frontmatter — description + allowed-tools (read, write, edit)
  - [x] What this skill does
  - [x] Before you start — collect entity name, fields, optionality
  - [x] Step 1 Model — export interface, PascalCase, id + created_at on every entity, ? for optional fields
  - [x] Step 2 Service — named types, in-memory array, five functions with correct signatures
  - [x] Step 3 Controller — namespace import, entity-named functions, two-line return pattern
  - [x] Step 4 Route — namespace import, five endpoints wired
  - [x] Step 5 Wire into index.ts — import router, app.use registration
  - [x] Rules section
- [x] f. Tested the skill — found 5 inconsistencies vs actual project code, edited skill to fix all of them

### Key concepts understood
- Skill vs direct question: skills encode decisions already made so Claude doesn't guess each session
- Vague instruction = Claude guesses. Specific instruction = consistent output every time
- allowed-tools: read (reference existing files), write (create new files), edit (modify index.ts)
- CLAUDE.md enforces the principle always; skill provides the exact implementation when invoked
- File path placeholders: use [entityLower] not a hardcoded name so the skill works for any entity
- id must be number not string — because parseInt() is used on it
- Optional fields: just ? — no need for undefined | null in this project
- Node.js is the runtime that executes the code and keeps the server listening on a port
- Postman is a client — it sends HTTP requests to test the running server
- Controller translates between HTTP world (req/res) and service world (plain values)
- PUT replaces the whole object, PATCH updates only the fields sent
- Each layer only knows the layer directly below it — never upward
- Testing a skill matters — when output is wrong, fix the skill not the generated code

### Deliverables
- [x] .claude/skills/new-endpoint/SKILL.md committed
- [x] Skill tested against real project files — 5 inconsistencies found and fixed
- [x] Updated skill committed

### Quiz
- [x] 20-question mixed quiz — Score: 20/20

---

## Week 2 — Day 5 (2026-06-30)
**Status:** Complete
### Topics
- [x] a. File walkthrough — every file in src/, what it is and why
- [x] b. TypeScript audit — grepped for `: any` and `as any`
- [x] c. Commit audit — reviewed git log, identified bad commit patterns
- [x] d. Folder hygiene — found and deleted stray files at home root
- [x] e. README — rewrote description and full endpoint list
### Key concepts understood
- **In-Place Mutation:** Objects are passed by reference in JavaScript, meaning `Object.assign(target, source)` updates the target object directly without needing to return or reassign a new variable.
- **TS Compilation Flow:** `ts-node` handles real-time execution in memory during development, while `tsc` compiles TypeScript down to production-ready JavaScript based on configurations like `target` and `outDir`.
- **Architectural Rules:** Dependency flow must strictly move downwards (Controller -> Service -> Repository). Lower layers are forbidden from calling higher layers.
- **Payload Validation:** `PUT` replaces a resource entirely while `PATCH` updates it partially. Forgetting data types or missing checks like `isNaN(id)` results in silent type bugs (looking for an ID of `NaN`) and misleading `404` errors instead of a clean `400 Bad Request`.
- **Asynchronous Execution:** Omitting `await` on an async function lets the runtime skip ahead immediately, returning a pending `Promise` object wrapper instead of the actual resolved value.
### Quiz
- [x] 20-question technical review — Score: 17.5/20
### Deliverables
- [x] Fixed `PUT` route partial-override object bug.
- [x] Cleaned root workspace: deleted stray `~/src` and `~/backend` directories.
- [x] Fixed function name mismatches across layers (`getBooks` $\rightarrow$ `getAllBooks`, `getBook` $\rightarrow$ `getBookById`).
- [x] Rewrote and committed updated `backend/README.md` with complete project documentation and endpoint references.

---

cat >> PROGRESS.md << 'EOF'

---

## Week 3 — Day 1 (2026-07-01)
**Status:** Complete

### Topics
- [x] a. What a relational database is — database → tables → rows → columns, ASCII diagram
- [x] b. Primary keys — why every table needs one, uniqueness + not-null, INT/SERIAL vs UUID
- [x] c. Foreign keys — tasks.user_id referencing users.id, ASCII diagram, REFERENCES keyword
- [x] d. What Docker does — container = pre-configured isolated process
- [x] e. Ran Postgres in Docker: `docker run --name pg-dev -e POSTGRES_PASSWORD=devpass -p 5432:5432 -d postgres:16` — every flag annotated, verified with `docker ps`
- [x] f. Connected via TablePlus (host localhost, port 5432, user postgres) — created `myapp` database
- [x] g. Hand-written SQL in GUI: CREATE TABLE, INSERT, SELECT, SELECT WHERE, UPDATE, DELETE
- [x] h. JOIN — created `users` table, added `tasks.user_id` via ALTER TABLE with REFERENCES, ran SELECT ... JOIN ... ON

### Key concepts understood
- Primary key = a role (uniqueness + not-null), not a specific data type — usually SERIAL, sometimes UUID
- Foreign key type must match the primary key it references
- Docker container = isolated process bundling an app with everything it needs, sealed off from the host machine
- `-p hostPort:containerPort` maps a container's internal port to the host machine
- `WHERE` scopes UPDATE/DELETE/SELECT — omitting it on UPDATE/DELETE affects every row
- JOIN combines rows from two tables using a matching column (`ON tasks.user_id = users.id`)
- Fixed WSL integration issue in Docker Desktop settings to get `docker` command working
- Cleaned up a stray top-level `~/backend` folder recreated by mistake — moved sql-practice.sql into the real project's backend/ folder

### Quiz
- [x] 20-question mixed quiz — Score: 19/20

### Deliverables
- [x] Postgres running in Docker (`pg-dev` container, verified with `docker ps`)
- [x] `myapp` test database created and connected via TablePlus
- [x] 10 SQL statements saved in `backend/sql-practice.sql` and committed
EOF

---

cat >> PROGRESS.md << 'EOF'

---

## Week 3 — Day 2 (2026-07-02)
**Status:** Complete

### Topics
- [x] a. Three Claude Code extension points — CLAUDE.md (always-loaded rules), .claude/skills/ (invokable recipes), MCP plugins (tools that read/write external systems). ASCII diagram + reanchored using the parseInt()/isNaN() rule as an example that lives in both CLAUDE.md and the new-endpoint skill for different reasons
- [x] b. What MCP is — Model Context Protocol, a standard for AI to talk to external systems. MCP client (the AI app, e.g. Claude Code) vs MCP server (wraps an external system, exposes tools/resources)
- [x] c. Installed Postgres MCP — `claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres "<connection-string>"`. Fixed Docker WSL integration (toggle in Docker Desktop Settings > Resources > WSL Integration) and restarted stopped `pg-dev` container along the way
- [x] d. Verified via MCP Inspector (`npx @modelcontextprotocol/inspector ...`) — connected, listed resources, got back `users` and `tasks` schema resources; also confirmed registered + connected inside Claude Code via `/mcp` (1 tool). Live "ask Claude in plain English" verification deferred due to API credits — carries over
- [x] e. Decision rule quiz (5 scenarios) — 4/5 correct, corrected the "always use const not var" scenario (CLAUDE.md, not skill — it's a standing rule with no trigger, not a numbered procedure)

### Key concepts understood
- MCP servers are the only one of the three extension points that can actually reach outside the conversation — CLAUDE.md and skills only ever produce text for Claude to reason with
- `claude mcp add` / `/mcp` status checks are local config and status reads — no API credits consumed; only a live natural-language request to Claude spends a turn
- `claude plugin add` (marketplace bundles) and `claude mcp add` (standalone MCP server) are different commands for different things
- MCP Inspector is a generic, LLM-free MCP client for testing a server directly — proves the server/connection work independent of Claude Code
- Resources (read-only data, e.g. table schema) vs tools (callable actions, e.g. a query) are two different capability types a single MCP server can expose
- Decision rule: "always behave X" → CLAUDE.md; "when asked to do X, follow these steps" → skill; "read/write an external system" → MCP plugin

### Quiz
- [x] 20-question mixed quiz — Score: 18/20

### Deliverables
- [x] Postgres MCP installed and connected in Claude Code (`postgres · connected · 1 tool`)
- [x] Verified end-to-end via MCP Inspector (resources listed: users, tasks schemas)
- [ ] Live "ask Claude directly" verification — carries over pending API credits

## Claude Code Features In Use
- **CLAUDE.md** — always-loaded standing rules with no trigger (e.g. never use `var`, always `parseInt()`/`isNaN()` on route params).
- **.claude/skills/** — invoked on demand for a specific multi-step procedure (e.g. `new-endpoint` scaffolding).
- **MCP plugins** — the only one that reaches outside the conversation to read/write a real external system (e.g. Postgres, Slack, GitHub).
EOF
---

## Week 3 — Day 3 (2026-07-02)
**Status:** Complete

### Topics
- [x] a. What an ORM is — JS code → Prisma Client → Postgres. Problem it solves: no hand-written SQL strings, no manual row-to-object mapping, type safety instead of a hand-maintained interface that can drift from the real table
- [x] b. Why Prisma — type-safe (generated types from schema, not hand-written), declarative schema (describe end state, Prisma computes the SQL), auto-migrations (every schema change becomes a timestamped, committed SQL file)
- [x] c. Installed `prisma` (devDependency — CLI, dev-time only) and `@prisma/client` (real dependency — runtime import). `npx prisma init` created `prisma/schema.prisma`, `prisma.config.ts`, `.env`. Learned current Prisma versions moved the datasource URL out of `schema.prisma` into `prisma.config.ts` (loaded via `dotenv/config`)
- [x] d. Wrote `schema.prisma` for the Book entity — decided camelCase fields + `@map` to snake_case columns (matches existing JS/TS convention while keeping SQL-style column names), converted `status` from a plain string to a Prisma `enum BookStatus` (enforces valid values at the DB level, not just in TypeScript which vanishes at runtime). Flagged that Prisma enforces shape/type only — the "rating must be 1–5" business rule still needs application-level validation
- [x] e. Set real `DATABASE_URL` in `backend/.env` — created a dedicated `reading_log_dev` database (separate from the `myapp` scratch DB used for Day 1 SQL practice)
- [x] f. First migration: `npx prisma migrate dev --name init` — generates real SQL into `prisma/migrations/<timestamp>_init/`, applies it, creates `_prisma_migrations` tracking table, regenerates the typed client. Verified via TablePlus (books table + BookStatus enum present, correct columns) and re-pointed the Postgres MCP server from `myapp` to `reading_log_dev` (`claude mcp remove` + `claude mcp add`), confirmed `connected` via `/mcp`. Live "ask Claude to list tables" verification deferred again — pending API credits

### Key concepts understood
- ORMs replace hand-written SQL + manual row mapping with typed function calls; Prisma generates SQL and typed objects from one schema definition
- devDependency vs dependency: CLI tools used only at dev time (`prisma`) vs code the running server actually imports (`@prisma/client`)
- Prisma schema enforces structure (types, nullability, enums) but never business rules (e.g. numeric ranges) — those still belong in service/controller validation
- Enums move a validation guarantee from "TypeScript hopes you're right" to "the database physically cannot store anything else"
- Migrations are a permanent, committed, timestamped history of every schema change — unlike Day 1's manual `ALTER TABLE`, which nothing tracked
- A dedicated database per project (vs reusing a scratch DB) keeps real app data separate from practice data

### Deliverables
- [x] Prisma installed and configured against real Postgres (`reading_log_dev`)
- [x] `schema.prisma` — Book model + BookStatus enum, camelCase + `@map` convention
- [x] First migration applied and verified (TablePlus + Postgres MCP re-registered and connected)
- [ ] Live "ask Claude directly" verification — still carries over pending API credits

---

## Week 3 — Day 4 (2026-07-03)
**Status:** Complete

### Topics
- [x] g. Converted every `bookService.ts` function from the in-memory array to real Prisma calls, one at a time: `findById` first (tested independently), then `create`, `findAll`, `update`, `remove`. Every controller function updated to `async`/`await` to match. Deleted the leftover `books`/`nextId` in-memory array entirely
- [x] Hit and resolved a real chain of environment issues along the way: Prisma client never generated (`npx prisma generate`), wrong import path for the generator's actual entry point (`../generated/prisma/client`, no `index.ts`/`package.json` in the output folder), `tsconfig.json` rejecting `prisma.config.ts` outside `rootDir` (fixed with explicit `"include": ["src/**/*"]`), and `PrismaClient` requiring a driver adapter (`@prisma/adapter-pg` + `PrismaPg`) rather than a bare connection string
- [x] Real architecture decision: hand-written `Book` interface vs Prisma-generated `Book` type diverged (camelCase vs snake_case, `Date` vs string, enum casing). Chose Option B — a translation layer (`toBook`/`toApiStatus`/`toPrismaStatus` mapper functions) in the service, keeping the public API contract stable and independent of the database schema, per the existing layered-architecture principle (business/shape logic lives in the service)
- [x] h. Confirmed `PROJECT.md` only defines one entity (`Book`) — no "remaining entities" to add today. Deferred adding a new entity to a future session (carryover)
- [x] Updated `.claude/skills/new-endpoint/SKILL.md` for Prisma — added a new Step 1 (Prisma schema model + manual migration reminder), rewrote Step 2/3 (TS model as stable public contract, Prisma-backed async service with mapper functions), updated the controller step and rules for async/await and enum mapping

### Key concepts understood
- Converting one function to `async` ripples to every caller — a real, live example of why layered architecture (each layer only knows the layer below it) matters when something changes
- A function can compile cleanly and still be silently broken — `Object.assign` on a Prisma-returned object never persists anything, because that object has no live connection to the database
- `findUnique` returns `null` on a miss; `update`/`delete` throw instead — always check existence first before calling either
- Driver adapters are a newer Prisma pattern: the client needs an explicit adapter object wrapping the real DB driver, not just an env var, depending on the generator
- A translation/mapper layer at the service boundary decouples the public API from the database schema — schema changes stop being breaking changes for API consumers
- Skills need updating whenever the underlying architecture they scaffold changes — an out-of-date skill would have kept generating in-memory code forever

### Quiz
- [x] 20-question mixed quiz — Score: 18.5/20

### Deliverables
- [x] All `Book` CRUD operations backed by real Postgres via Prisma — in-memory array fully removed
- [x] Every endpoint verified working in Postman against real Postgres (`POST`, `GET`, `GET/:id`, `PATCH/:id`, `DELETE/:id`)
- [x] `.claude/skills/new-endpoint/SKILL.md` updated for Prisma
- [ ] Add a second entity — carries over to a future session
- [ ] Live "ask Claude directly" MCP verification — still carries over pending API credits

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

---

## Week 3 — Day 6 (2026-07-04)
**Status:** Complete

### Topics
- [x] a. The secrets-in-source-code problem — bots scrape every public GitHub commit in real time, scanning for leaked secrets; a real AWS key can be found and exploited within minutes of being pushed, even if deleted moments later (it still lives in git history)
- [x] b. The 12-factor approach — config lives in the environment, not in code. ASCII diagram: source code reads from `process.env`, which is filled locally by a `.env` file or in production by a cloud secret manager. Distinguished `.env` (a file on disk) from `process.env` (in-memory, filled by `dotenv` at runtime) using a fridge/shopping-list analogy
- [x] c. Installed `dotenv` as an explicit dependency — discovered it was previously only present as an undeclared transitive dependency (pulled in silently by `prisma`), which was fragile. Moved `import 'dotenv/config'` to be the literal first line of `src/index.ts`, ahead of all other imports, so nothing can read `process.env` before it's filled
- [x] d. Added `PORT` and `JWT_SECRET` to `backend/.env` alongside existing `DATABASE_URL`. Generated `JWT_SECRET` with `openssl rand -base64 32`. Fixed a hardcoded `const PORT = 3000` to `const PORT = process.env.PORT || 3000`, actually wiring it to the environment
- [x] e. Verified `.env` does not appear in `git status` output — confirmed it's correctly gitignored
- [x] f. Created `backend/.env.example` with the same keys as `.env` but placeholder values and a header comment — this file IS committed, documenting required config for anyone cloning the repo
- [x] g. Verified fail behavior: renamed `.env` away and found the app did NOT fail loudly — it started normally and then hung indefinitely on any real request with zero error output on either side. Built a startup validation check (loops over required env vars right after `dotenv/config` loads, calls `process.exit(1)` with a clear message if any are missing) — confirmed it now crashes instantly and loudly with `Missing required environment variable: DATABASE_URL` instead of hanging. Restored `.env` and confirmed the app runs normally again

### Key concepts understood
- `.env` is a file on disk; `process.env` is in-memory data attached to the running process — `dotenv` is the bridge that copies one into the other at startup
- Relying on an undeclared transitive dependency (present in `node_modules` only because another package needs it) is fragile — always declare what your own code actually imports
- Import order matters for anything reading `process.env` at module load time — `dotenv/config` must run first, guaranteed
- The 12-factor principle: code stays identical across environments; only *where the environment variables come from* changes (`.env` locally, a cloud secret manager in production)
- `.env` (real secrets, gitignored) vs `.env.example` (placeholder values, committed) — the latter documents required config without exposing anything
- A missing required config value can fail in far worse ways than a clean error — in this case, a silent indefinite hang with no error on either the client or server side — which is why explicit startup validation matters more than assuming a dependency will "fail loudly" on its own
- Recurring lesson (again) from stale process debugging: always verify no old `nodemon`/`ts-node` processes are still bound to port 3000 before trusting a test result

### Quiz
- [x] 20-question mixed quiz — Score: 19/20

### Deliverables
- [x] All secrets (`DATABASE_URL`, `PORT`, `JWT_SECRET`) in `backend/.env`, confirmed gitignored
- [x] `backend/.env.example` created and committed with placeholder values
- [x] Startup environment-variable validation added to `src/index.ts` — app now fails immediately and loudly when required config is missing, instead of hanging

---

## Week 4 — Day 1 (2026-07-05)
**Status:** Complete

### Topics
- [x] a. Set up Vite + React + TS (`npm create vite@latest frontend -- --template react-ts`, ESLint as linter). Walked through the three core files: `index.html` (single real HTML page, empty `<div id="root">` as the injection point), `src/main.tsx` (`createRoot` + `.render(<App />)` bridges plain HTML to React, `<StrictMode>` is a dev-only double-invocation safety net with no visible UI), `src/App.tsx` (the root component)
- [x] b. What a component is — just a JavaScript function returning JSX. ASCII tree for the real project: `App → Header / TaskList → TaskItem` (repeated once per book), mirroring the same "each layer only knows the layer below it" principle from the backend's route → controller → service chain
- [x] c. JSX — looks like HTML, compiles to JavaScript. Key differences from real HTML: `className` instead of `class` (reserved word collision), camelCase attributes (`onClick`, not `onclick`), and `{}` for embedding live JavaScript expressions directly in markup
- [x] d. Props — parent-to-child data only, one direction, read-only from the child's side. Built a typed `Greeting` component (`GreetingProps` interface + destructured `{ name }` param) and rendered it with `<Greeting name="Shreya" />`
- [x] e. `useState` — `const [count, setCount] = useState(0)`: value + setter pair; calling the setter both updates the value and triggers a re-render. Built a `Counter` component in `src/scratch.tsx`, confirmed clicking updates the displayed count live in the browser
- [x] f. `useEffect` — runs side effects (fetching, logging, timers) after React draws the component, not during. Empty dependency array `[]` = run once on mount only. Built an `EffectDemo` component that logs on mount; observed it logging twice due to `<StrictMode>`'s intentional double-invocation in development (not a bug)
- [x] g. Conditional rendering — the ternary pattern `{condition ? <A /> : <B />}` inside JSX. Built a `LoadingDemo` component toggling between "Loading..." and "Data loaded!" via a boolean state flip (`setIsLoading(!isLoading)`)
- [x] h. List rendering — `array.map(item => <li key={item.id}>...)`. Connected directly back to Week 1 Day 5's array methods (`map`/`filter`/`find`/`forEach`/`reduce`) as the same underlying method, just producing JSX instead of transformed data. Discussed why `key` must be a stable unique ID (e.g. `book.id`) rather than array index — React uses it to track which specific item is which across re-renders, avoiding bugs when lists reorder or change

### Key concepts understood
- A component is a plain JavaScript function; JSX is what it returns, not real HTML — it compiles down to JavaScript function calls
- `className`/camelCase props exist specifically to avoid colliding with JavaScript's own reserved words and naming conventions
- Event handlers must be passed as function *definitions* (`() => doThing()`), not function *calls* (`doThing()`) — calling directly during render can cause infinite render loops if it also triggers a state update
- Props flow one direction (parent → child) and are read-only from the receiving component's side — matches the "each layer only knows what's below it" principle already used in the backend
- `useState`'s setter is what triggers a re-render — directly mutating the state variable does nothing, since React never finds out about it
- `useEffect`'s dependency array controls timing: `[]` = once on mount, `[value]` = on mount and whenever `value` changes, no array = every render (rarely desired)
- `<StrictMode>` intentionally double-invokes certain code in development only, to surface effects that aren't safe to run more than once — not a bug, no effect on production builds
- `key` in list rendering exists so React can track individual item identity across re-renders; using array index breaks this guarantee once a list can reorder or have items inserted/removed from the middle
- Caught and fixed a real mistake independently: a missing self-closing `/>` on `<BookList` caused a JSX syntax error, found via the Problems panel and console

### Quiz
- [x] 20-question mixed quiz — Score: 19.5/20

### Deliverable
- [x] Working Vite + React + TS project (`frontend/`) committed
- [x] Multiple custom components visible and functioning in the browser: `Greeting` (props), `Counter` (useState), `EffectDemo` (useEffect), `LoadingDemo` (conditional rendering), `BookList` (list rendering with keys)

---

## Week 4 — Day 2 (2026-07-06)
**Status:** Complete

### Topics
- [x] a. Two-terminal workflow — backend (Express, port 3000) and frontend (Vite/React, port 5173) run as separate simultaneous processes
- [x] b. `fetch` API basics — `fetch()` only rejects on network failure, not on HTTP error codes; must manually check `res.ok` and `throw` for non-2xx responses; `res.json()` parses the body
- [x] c. CORS — first real encounter. Browser blocked `fetch('http://localhost:3000/books')` from origin `localhost:5173` with "No 'Access-Control-Allow-Origin' header" even though the backend logged a real `200` response, proving the block is purely browser-side, not a server failure. Installed `cors`, wired `app.use(cors({ origin: 'http://localhost:5173' }))` into `src/index.ts`, deliberately allowlisting the exact frontend origin instead of using `origin: '*'`
- [x] d. Loading and error states — added `loading`/`error` state to `BookList.tsx` via `useState`, wrapped the fetch in `try/catch/finally`: `try` does the fetch and throws on `!res.ok`, `catch` sets a user-facing error message, `finally` always runs last and turns off loading regardless of outcome. States declared but not yet wired into JSX — deferred to Day 3 when building the real list page UI

### Key concepts understood
- `fetch` resolving on HTTP error codes (400s/500s) is a common gotcha — always check `res.ok` explicitly
- CORS is a browser-enforced security policy, not a server-side restriction — the server can respond fine while the browser still blocks JS from reading it
- Allowlisting an exact origin is safer than `origin: '*'`, which would let any website read the API's responses
- The loading/error/success pattern is a three-state state machine driven by `try/catch/finally`, not just a single boolean
- Hit and fixed a real environment bug: Node v24.16.0 (very new, non-LTS) crashed Vite/esbuild with "Illegal instruction" in WSL — fixed by switching to Node LTS v22 via `nvm install 22`, `nvm use 22`, and `nvm alias default 22` to persist it across all future terminals

### Deliverable
- [x] Frontend successfully fetches real data from the backend across origins, CORS correctly configured
- [x] Loading/error state scaffolding in place in `BookList.tsx` (JSX wiring carries over to Day 3)
- [ ] Full deliverable (view/create/edit from React UI) — carries over to Day 3

---

## Week 4 — Day 3 (2026-07-07)
**Status:** Complete

### Topics
- [x] e. List page — wired `loading`/`error` state into actual JSX using early returns: `if (loading) return <p>Loading books...</p>`, `if (error) return <p>{error}</p>`, otherwise render the real list. Loading is checked before error since the flow naturally progresses loading → error → success
- [x] f. Create form — built `BookForm.tsx` with controlled inputs (`value` + `onChange` tied to `useState` per field) and a `handleSubmit` that calls `e.preventDefault()` then POSTs to the backend. Hit and fixed a real 400 error: backend's `createBookSchema` requires `status` (no `.optional()`), which the form wasn't sending — added a `<select>` for status, also a controlled input
- [x] g. Edit page — introduced lifting state up: `editingBookId` lives in `App.tsx` (the shared parent), passed down to `BookList` as a setter function (`onEditBook={setEditingBookId}`) and to a new `BookEditForm` component as a prop. `BookEditForm` fetches the book's current data on mount via `useEffect` with `[bookId]` as its dependency (so it re-fetches whenever a different book is selected), pre-fills the form, and PATCHes on submit

### Key concepts understood
- Early returns let one component render entirely different UI depending on state, without nested ternaries — React stops at whichever `return` it hits first
- Controlled inputs: an `<input>`'s `value` is driven by React state, and `onChange` is what closes the loop — without it, the field is effectively read-only since React overrides any typed input back to the unchanged state value
- Zod schema requirements aren't visible from the frontend — a field missing `.optional()` on the backend will silently reject a request that looks complete from the form's perspective, surfaced only via the actual HTTP status code
- Lifting state up: when two sibling components need to share or coordinate data, the state has to live in their nearest common parent, which passes it down as props (including setter functions passed directly as callbacks)
- `useEffect`'s dependency array isn't just "run once vs. every render" — including a specific value like `[bookId]` means "re-run whenever this value changes," which matters when the same component is reused for different data
- Hit and resolved a second real environment issue: even after fixing Node 22 once, the exact same cached binary reappeared corrupted on a new terminal session (`Missing internal module` in Node's built-in `undici`). Fixed by clearing both `~/.nvm/.cache` and the installed `~/.nvm/versions/node/v22.23.1` folder to force a genuinely fresh download, rather than trusting nvm's cache

### Quiz
- [x] 20-question mixed quiz — Score: 18/20

### Deliverable
- [x] Full view/create/edit of `Book` entity working end-to-end through the React UI (`BookList`, `BookForm`, `BookEditForm`)
- [x] Loading and error states visibly working (early-return pattern in `BookList`)
- [x] Backend validation errors traced to root cause (missing required Zod field) and fixed on the frontend

---

## Week 4 — Day 4 (2026-07-08)
**Status:** In progress (topics h–j, quiz, and deliverable carry over to next session)

### Topics
- [x] a. The plaintext password problem — why storing real passwords is dangerous: a DB leak exposes every password directly, and since people reuse passwords across sites, one leak can compromise a user's accounts elsewhere. Responsibility for this sits with the developer, not the user
- [x] b. bcrypt — a one-way function: easy to hash forward, infeasible to reverse. Installed `bcrypt` + `@types/bcrypt`. Learned bcrypt automatically salts each hash, so identical passwords never produce identical hashes, defeating precomputed rainbow-table attacks. Login never reverses a hash — it re-hashes the login attempt and compares (`bcrypt.compare`)
- [x] c. JWTs — three parts (header.payload.signature), signed but NOT encrypted, meaning anyone can decode and read the payload; only the signature (made with a server-only secret) prevents forgery. Installed `jsonwebtoken` + `@types/jsonwebtoken`
- [x] d. Drew the full auth flow on paper before writing any code: signup (hash + store), login (compare + issue token), authenticated request (verify token → attach user → continue, or 401)
- [x] e. Added `User` model to `schema.prisma` (`id`, `email` with `@unique`, `password` mapped to `password_hash` column, `createdAt`), migrated successfully (`add_user`)
- [x] f. Built `POST /auth/signup` — service hashes the password with `bcrypt.hash(password, 10)`, stores the user, returns only `{ id, email }` (never the hash). Verified via Postman (`201 Created`) and confirmed directly in Postgres that the stored value is a real bcrypt hash (`$2b$10$...`), not plaintext
- [x] g. Built `POST /auth/login` — looks up user by email, compares password with `bcrypt.compare`, issues a JWT via `jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' })` on success. Both "no such user" and "wrong password" throw the same generic error, so the endpoint can't be used to discover which emails are registered. Verified via Postman (`200 OK` with a real token) and decoded the token at jwt.io to confirm the payload (`userId`, `iat`, `exp`) is fully readable without the secret — proving JWTs are signed, not encrypted

### Key concepts understood
- Storing plaintext passwords means a single database leak exposes not just your app, but potentially every other site where a user reused that password
- bcrypt's salting means the same password produces a different hash every time it's hashed, closing off rainbow-table lookups entirely
- JWTs are readable by anyone holding them but forgeable by no one without the signing secret — never put sensitive data in the payload
- Returning the same generic error for "no such user" and "wrong password" prevents account enumeration through the login endpoint
- Reused the project's existing shared Prisma client (`../lib/prisma`, with its driver adapter already configured) instead of creating a second, unconfigured `PrismaClient` instance — new files should plug into established patterns rather than reinvent them
- Hit two small environment snags: Postgres container needing a manual restart before migrating, and an incorrect import path for `AuthError` (traced with `grep` to its real location in `src/errors.ts`)

### Quiz
- [ ] 20-question mixed quiz — carries over to next session

### Deliverable
- [x] `POST /auth/signup` working end-to-end, passwords confirmed hashed in the database
- [x] `POST /auth/login` working end-to-end, issuing a valid, decodable JWT
- [ ] `requireAuth` middleware, frontend signup/login/logout, and full protected-route testing — carry over to next session