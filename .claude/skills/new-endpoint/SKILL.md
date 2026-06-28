---
description: "Scaffolds a complete CRUD endpoint — model, service, controller,
route — and wires it into index.ts following the project's 4-layer architecture"
allowed-tools:
  - read
  - write
  - edit
---

## What this skill does
This skill scaffolds a complete CRUD endpoint for any new entity in the
reading-log project. It follows the project's 4-layer architecture —
model → service → controller → route. The end result is a fully wired
set of 5 CRUD endpoints, testable immediately in Postman.

## Before you start
Before generating any files, ask the user for:
1. The specific name of the entity being scaffolded
2. A list of fields belonging to that entity, including
   the specific name and data type for each field
3. Information on whether any of those fields are optional

## Step 1 — Model
Create src/models/[entityLower].ts
- Use a TypeScript interface, never type
- Name the interface in PascalCase matching the entity name
  e.g. Author, Review, Tag
- Every entity must always include these fields:
    id: number
    created_at: string
- Add the user-provided fields after these
- Mark optional fields with ? after the field name
  e.g. bio?: string

## Step 2 — Service
Create src/services/[entityLower]Service.ts
- Import the interface from ../models/[entityLower]
- Declare a private in-memory array:
    const [entityPlural]: [EntityName][] = []
- Declare an id counter:
    let nextId = 1
- Implement and export these five functions:

  create([entityLower]: Omit<[EntityName], 'id' | 'created_at'>): [EntityName]
    - Build the new object: spread the input, add id: nextId++,
      add created_at: new Date().toISOString()
    - Push to the array, return the new object

  findAll(): [EntityName][]
    - Return the array

  findById(id: number): [EntityName] | undefined
    - Return array.find(item => item.id === id)

  update(id: number, data: Partial<Omit<[EntityName], 'id' | 'created_at'>>): [EntityName] | undefined
    - Find the item by id — if not found, return undefined
    - Mutate in place with Object.assign(found, data)
    - Return the mutated object

  remove(id: number): boolean
    - Find index with findIndex
    - If -1, return false
    - Splice it out, return true

## Step 3 — Controller
Create src/controllers/[entityLower]Controller.ts
- Import Request, Response from 'express'
- Import all five functions from the service

Export these five handler functions:

  getAll(req: Request, res: Response)
    - Call findAll()
    - Return res.json(result)

  getOne(req: Request, res: Response)
    - Parse: const id = parseInt(req.params.id)
    - If isNaN(id) → res.status(400).json({ error: 'Invalid id' })
    - Call findById(id)
    - If undefined → res.status(404).json({ error: '[EntityName] not found' })
    - Else → res.json(result)

  create(req: Request, res: Response)
    - Pass req.body to the service create function
    - Return res.status(201).json(result)

  update(req: Request, res: Response)
    - Parse id — same pattern as getOne
    - Call update(id, req.body)
    - If undefined → res.status(404).json({ error: '[EntityName] not found' })
    - Else → res.json(result)

  remove(req: Request, res: Response)
    - Parse id — same pattern as getOne
    - Call remove(id)
    - If false → res.status(404).json({ error: '[EntityName] not found' })
    - Else → res.status(204).send()

## Step 4 — Route
Create src/routes/[entityPlural].ts
- Import Router from 'express'
- Import all five controller functions
- Declare: const router = Router()
- Wire the five endpoints:

    router.get('/',       getAll)
    router.get('/:id',    getOne)
    router.post('/',      create)
    router.patch('/:id',  update)
    router.delete('/:id', remove)

- Export default router

## Step 5 — Wire into index.ts
In src/routes/[entityPlural].ts:
- Import the new router:
    import [entityLower]Router from './routes/[entityPlural]'
- Register it below the existing routes:
    app.use('/[entityPlural]', [entityLower]Router)
- Do not remove or modify any existing route registrations

## Rules
- Never use var — only const and let
- Never use type for entity shapes — always interface
- Always parseInt() on req.params.id and always check isNaN() before using it
- id is always number — never string
- 204 responses use res.status(204).send() — never res.json() with a body
- Optional fields use ? only — do not write undefined | null
- Do not add validation beyond id parsing unless the user explicitly asks
- Commit after each layer: model → service → controller → route + wire