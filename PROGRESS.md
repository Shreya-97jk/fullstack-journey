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
**Status:** In Progress — continuing Day 3

### Topics
- [x] a. Big picture: route → controller → service → model. Drew ASCII flow for a POST request end-to-end
- [x] b. MODEL: wrote `src/models/book.ts` — Book interface with all fields, optional fields with `?`, union type for status
- [ ] c. SERVICE: in-memory array, create/findAll/findById/update/remove — starting Day 3
- [ ] d. CONTROLLER: reads req, calls service, sends res
- [ ] e. ROUTE: defines URL + method, wires into index.ts
- [ ] f. Postman: test all 5 endpoints, save collection to backend/postman/
- [ ] g. Reflection: trace a POST through every file, function by function

### Key concepts understood
- Interface = shape/type only, not data — TypeScript is compile-time only, vanishes at runtime
- Layered architecture: each layer only knows one direction; controller never touches the array directly
- Why separation matters: business rules live in the service, HTTP concerns live in the controller

### Deliverable
- [x] `src/models/book.ts` committed

---
_Updated at end of each session._
