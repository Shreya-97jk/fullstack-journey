---
description: "Scaffolds a complete CRUD endpoint — Prisma schema model, service, controller, route — and wires it into index.ts following the project's 4-layer architecture, backed by real Postgres via Prisma"
allowed-tools:
  - read
  - write
  - edit
---
## What this skill does
Scaffolds a complete CRUD endpoint for any new entity in the reading-log
project, backed by a real Postgres table via Prisma — not an in-memory
array. Follows the project's 4-layer architecture — Prisma schema → TS
model → service → controller → route. Result: 5 CRUD endpoints, backed
by Postgres, testable immediately in Postman.
## Before you start
Before generating any files, ask the user for:
1. The specific name of the entity being scaffolded
2. A list of fields belonging to that entity, including the specific
   name and data type for each field
3. Whether any of those fields are optional
4. Whether any field is an enum — a fixed set of allowed string values
   (e.g. a status field)
## Step 1 — Prisma schema model
In prisma/schema.prisma, below the existing models:
- Add `model [EntityName] { ... }` using camelCase field names
- Always include:
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
- Map every camelCase field to its snake_case column with @map(),
  e.g. finishedAt DateTime? @map("finished_at")
- If a field is an enum, declare it above the model in
  SCREAMING_SNAKE_CASE:
    enum [EntityName][FieldName] {
      VALUE_ONE
      VALUE_TWO
    }
- Add `@@map("[entityPlural]")` to map the model to a plural
  snake_case table name
- After writing the schema, tell the user to run this themselves —
  never run it automatically:
    npx prisma migrate dev --name add_[entityLower]
## Step 2 — TS model (the stable public API shape)
Create src/models/[entityLower].ts — this is the contract the outside
world sees, independent of whatever Prisma generates.
- Use export interface, not a separate export statement
- Name the interface in PascalCase matching the entity name
- Every entity must always include:
    id: number;
    created_at: string;
- Add the user-provided fields after these
- Enum fields use a hyphenated-lowercase string union matching the
  enum's meaning, e.g. status: 'want-to-read' | 'reading' | 'finished';
- Mark optional fields with ? after the field name
- End every field with a semicolon
## Step 3 — Service (Prisma-backed, not in-memory)
Create src/services/[entityLower]Service.ts
- Import the shared client: import { prisma } from '../lib/prisma'
- Import the public interface:
    import { [EntityName] } from '../models/[entityLower]'
- Import the Prisma-generated type under an alias to avoid a name
  collision with the interface above:
    import { [EntityName] as Prisma[EntityName] } from '../generated/prisma/client'
- For every enum field, write two small mapper functions — one
  converting Prisma's SCREAMING_SNAKE_CASE to the API's hyphenated
  format, one for the reverse:
    function to[FieldName]Api(v: Prisma[EntityName]['[field]']): [EntityName]['[field]'] { switch (v) { ... } }
    function to[FieldName]Prisma(v: [EntityName]['[field]']): Prisma[EntityName]['[field]'] { switch (v) { ... } }
- Write one mapper converting a full Prisma row into the public shape:
    function to[EntityName](row: Prisma[EntityName]): [EntityName] {
      return {
        id: row.id,
        // every field: nullable fields use `?? undefined`,
        // Date fields use `.toISOString()`,
        // enum fields run through the to[FieldName]Api mapper
        created_at: row.createdAt.toISOString(),
      };
    }
- Declare named types:
    type Create[EntityName]Data = Omit<[EntityName], 'id' | 'created_at'>
    type Update[EntityName]Data = Partial<Omit<[EntityName], 'id' | 'created_at'>>
- Implement and export these five async functions — every one calls
  Prisma, then maps the result with to[EntityName] before returning:
  create(data: Create[EntityName]Data): Promise<[EntityName]>
    - const row = await prisma.[entityLower].create({ data: { ... } })
      (omit id/createdAt — Prisma generates them; run enum fields
      through the reverse mapper)
    - return to[EntityName](row)
  findAll(status?): Promise<[EntityName][]>
    - const rows = await prisma.[entityLower].findMany({ where: status ? { ... } : undefined })
    - return rows.map(to[EntityName])
  findById(id: number): Promise<[EntityName] | null>
    - const row = await prisma.[entityLower].findUnique({ where: { id } })
    - return row ? to[EntityName](row) : null
  update(id: number, data: Update[EntityName]Data): Promise<[EntityName] | undefined>
    - const existing = await findById(id); if (!existing) return undefined
      (Prisma's update throws on a missing id rather than returning
      null, so always pre-check with findById)
    - const row = await prisma.[entityLower].update({ where: { id }, data: { ... } })
      (every field may be undefined — Prisma leaves untouched fields
      alone, matching PATCH semantics)
    - return to[EntityName](row)
  remove(id: number): Promise<boolean>
    - const existing = await findById(id); if (!existing) return false
    - await prisma.[entityLower].delete({ where: { id } })
    - return true
## Step 4 — Controller
Create src/controllers/[entityLower]Controller.ts
- Import Request, Response from 'express'
- Import the service as a namespace:
    import * as [entityLower]Service from '../services/[entityLower]Service'
- Every function must be `async function`, and every call into the
  service must be `await`ed — the service is Prisma-backed now, every
  function returns a Promise
- Name every function with the entity name appended:
    create[EntityName], get[EntityPlural], get[EntityName],
    update[EntityName], delete[EntityName]
- Always separate response and return onto two lines:
    res.status(400).json({ error: 'Invalid id' })
    return
Export these five handler functions:
  get[EntityPlural](req: Request, res: Response)
    - await [entityLower]Service.findAll()
    - Return res.json(result)
  get[EntityName](req: Request, res: Response)
    - Parse: const id = parseInt(req.params.id as string)
    - If isNaN(id): res.status(400).json({ error: 'Invalid id' }); return
    - await [entityLower]Service.findById(id)
    - If null: res.status(404).json({ error: '[EntityName] not found' }); return
    - Else: res.json(result)
  create[EntityName](req: Request, res: Response)
    - await [entityLower]Service.create(req.body)
    - Return res.status(201).json(result)
  update[EntityName](req: Request, res: Response)
    - Parse id — same pattern as get[EntityName]
    - await [entityLower]Service.update(id, req.body)
    - If undefined: res.status(404).json({ error: '[EntityName] not found' }); return
    - Else: res.json(result)
  delete[EntityName](req: Request, res: Response)
    - Parse id — same pattern as get[EntityName]
    - await [entityLower]Service.remove(id)
    - If false: res.status(404).json({ error: '[EntityName] not found' }); return
    - Else: res.status(204).send()
## Step 5 — Route
Create src/routes/[entityPlural].ts
- Import Router from 'express'
- Import the controller as a namespace:
    import * as [entityLower]Controller from '../controllers/[entityLower]Controller'
- Declare: const router = Router()
- Wire the five endpoints:
    router.post('/',      [entityLower]Controller.create[EntityName])
    router.get('/',       [entityLower]Controller.get[EntityPlural])
    router.get('/:id',    [entityLower]Controller.get[EntityName])
    router.patch('/:id',  [entityLower]Controller.update[EntityName])
    router.delete('/:id', [entityLower]Controller.delete[EntityName])
- Export default router
## Step 6 — Wire into index.ts
In src/index.ts:
- Import the new router:
    import [entityLower]Router from './routes/[entityPlural]'
- Register it below the existing routes:
    app.use('/[entityPlural]', [entityLower]Router)
- Do not remove or modify any existing route registrations
## Rules
- Never use var — only const and let
- Never use type for entity shapes — always export interface
- Prisma schema fields use camelCase, mapped to snake_case columns
  with @map(); the table itself is mapped to plural snake_case with
  @@map()
- The TS model (Step 2) is the stable public contract — it never
  changes shape just because the Prisma schema changes
- Every service function is async and returns a Promise; never return
  a raw Prisma row directly — always pass it through the to[EntityName]
  mapper first
- Enum fields always get two mapper functions and are never exposed
  to the API in Prisma's SCREAMING_SNAKE_CASE form
- update and remove must call findById first and return
  undefined/false on a miss — Prisma throws on a missing id rather
  than returning null
- Every controller function that calls the service must be async and
  await the call
- Always parseInt() on req.params.id and always cast as string
- Always check isNaN() before using the parsed id
- id is always number — never string
- 204 responses use res.status(204).send() — never res.json() with a body
- Optional fields use ? only — do not write undefined | null
- Always separate response and return onto two lines — never return res.status()
- Do not add validation beyond id parsing unless the user explicitly asks
- After writing the Prisma schema, tell the user to run the migration
  themselves — never run it automatically
- Commit after each layer: schema+migration → model → service →
  controller → route + wire
