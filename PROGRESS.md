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