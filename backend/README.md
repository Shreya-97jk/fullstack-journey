# Reading Log — Backend

Express + TypeScript REST API for the Reading Log project.

## Requirements
- Node.js 18+
- npm

## Setup
```bash
npm install
```

## Running

### Development (live reload)
```bash
npm run dev
```
Server starts at http://localhost:3000

### Production
```bash
npm run build
npm run start
```

## Endpoints
- `GET /` — health check, returns `{ hello: "world" }`

More endpoints coming as the project progresses.

## Folder Structure
```
src/
├── index.ts        entry point
├── routes/         URL → handler mapping
├── controllers/    request/response handlers
├── services/       business logic
├── models/         TypeScript interfaces
└── middleware/     cross-cutting concerns
```
