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
- Use export interface, not a separate export statement
  e.g. export interface Review {
- Name the interface in PascalCase matching the entity name
  e.g. Author, Review, Tag
- Every entity must always include these fields:
    id: number;
    created_at: string;
- Add the user-provided fields after these
- Mark optional fields with ? after the field name
  e.g. bio?: string;
- End every field with a semicolon

## Step 2 — Service
Create src/services/[entityLower]Service.ts
- Import the named interface from ../models/[entityLower]:
    import { [EntityName] } from '../models/[entityLower]'
- Declare named types before the functions:
    type Create[EntityName]Data = Omit<[EntityName], 'id' | 'created_at'>
    type Update[EntityName]Data = Partial<Omit<[EntityName], 'id' | 'created_at'>>
- Declare a private in-memory array:
    const [entityPlural]: [EntityName][] = []
- Declare an id counter:
    let nextId = 1
- Implement and export these five functions:

  create(data: Create[EntityName]Data): [EntityName]
    - Build the new object:
        const [entityLower]: [EntityName] = { ...data, id: nextId++, created_at: new Date().toISOString() }
    - Push to the array, return the new object

  findAll(): [EntityName][]
    - Return the array
    - Accept an optional status filter if the entity has a status field

  findById(id: number): [EntityName] | undefined
    - Return array.find(item => item.id === id)

  update(id: number, data: Update[EntityName]Data): [EntityName] | undefined
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
- Import the service as a namespace:
    import * as [entityLower]Service from '../services/[entityLower]Service'
- Name every function with the entity name appended:
    create[EntityName], get[EntityPlural], get[EntityName],
    update[EntityName], delete[EntityName]
- Always separate response and return onto two lines:
    res.status(400).json({ error: 'Invalid id' })
    return

Export these five handler functions:

  get[EntityPlural](req: Request, res: Response)
    - Call [entityLower]Service.findAll()
    - Return res.json(result)

  get[EntityName](req: Request, res: Response)
    - Parse: const id = parseInt(req.params.id as string)
    - If isNaN(id):
        res.status(400).json({ error: 'Invalid id' })
        return
    - Call [entityLower]Service.findById(id)
    - If undefined:
        res.status(404).json({ error: '[EntityName] not found' })
        return
    - Else: res.json(result)

  create[EntityName](req: Request, res: Response)
    - Pass req.body to [entityLower]Service.create()
    - Return res.status(201).json(result)

  update[EntityName](req: Request, res: Response)
    - Parse id — same pattern as get[EntityName]
    - Call [entityLower]Service.update(id, req.body)
    - If undefined:
        res.status(404).json({ error: '[EntityName] not found' })
        return
    - Else: res.json(result)

  delete[EntityName](req: Request, res: Response)
    - Parse id — same pattern as get[EntityName]
    - Call [entityLower]Service.remove(id)
    - If false:
        res.status(404).json({ error: '[EntityName] not found' })
        return
    - Else: res.status(204).send()

## Step 4 — Route
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

## Step 5 — Wire into index.ts
In src/index.ts:
- Import the new router:
    import [entityLower]Router from './routes/[entityPlural]'
- Register it below the existing routes:
    app.use('/[entityPlural]', [entityLower]Router)
- Do not remove or modify any existing route registrations

## Rules
- Never use var — only const and let
- Never use type for entity shapes — always export interface
- Always parseInt() on req.params.id and always cast as string
- Always check isNaN() before using the parsed id
- id is always number — never string
- 204 responses use res.status(204).send() — never res.json() with a body
- Optional fields use ? only — do not write undefined | null
- Always separate response and return onto two lines — never return res.status()
- Do not add validation beyond id parsing unless the user explicitly asks
- Commit after each layer: model → service → controller → route + wire