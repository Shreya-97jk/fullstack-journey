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

## Week 2 — Day 4 (2026-06-27)
**Status:** In Progress — continuing tomorrow from Section 5 (Service)

### Topics
- [x] a. What a skill IS vs asking Claude a direct question — ASCII diagram: CLAUDE.md vs .claude/skills/ vs MCP plugins
- [x] b. Where skills live — project-scoped (.claude/skills/) vs global (~/.claude/skills/) — decision rule: "would someone cloning this repo benefit?"
- [x] c. Anatomy of a skill — YAML frontmatter (description, allowed-tools) + markdown body. Vague vs specific instructions with real examples from the project
- [x] d. CLAUDE.md vs skill — CLAUDE.md = always active, skill = invoked on demand
- [x] e. Drafting .claude/skills/new-endpoint/SKILL.md — sections completed:
  - [x] YAML frontmatter — description + allowed-tools (read, write, edit)
  - [x] Section 2: What this skill does
  - [x] Section 3: Before you start
  - [x] Section 4: Step 1 Model
- [ ] e. (continued tomorrow) Step 2 Service, Step 3 Controller, Step 4 Route, Step 5 Wire, Rules
- [ ] f. Test the skill — scaffold a second entity
- [ ] 20-question mixed quiz
- [ ] Deliverable: .claude/skills/new-endpoint/SKILL.md committed
- [ ] Deliverable: Second entity scaffolded via skill and working in Postman

### Key concepts understood
- Skill vs direct question: skills encode decisions already made so Claude doesn't guess each session
- Vague instruction = Claude guesses. Specific instruction = consistent output every time
- allowed-tools: read, write, edit — not bash, not run
- CLAUDE.md enforces the principle always; skill provides exact implementation when invoked
- File path placeholders: use [entityLower] not a hardcoded name
- id must be number not string
- Optional fields: just ? — no undefined | null needed

---
_Updated at end of each session._
