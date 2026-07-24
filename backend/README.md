# Reading Log — Backend
This API provides a backend service to manage a digital bookshelf by allowing me to create, view, update, and delete books in a reading tracker application.


## Requirements
- Node.js 18+
- npm

## Running with Docker (recommended)
This is the fastest way to get the whole stack — backend + Postgres — running from a fresh clone, with no local Node.js or Postgres installation required.

1. Clone the repo and enter the project root.
2. Copy the example environment file and fill in real values:
```bash
   cp backend/.env.example backend/.env
```
   Edit `backend/.env` and set `JWT_SECRET` to a real generated value (e.g. via `openssl rand -base64 32`). `DATABASE_URL` and `PORT` can stay as-is if you're not changing the defaults.
3. Start everything:
```bash
   docker-compose up
```
This builds the backend image, starts Postgres with a persistent volume, and starts the backend — both networked together automatically.

The first time you run this, apply the database migrations:
```bash
docker-compose exec backend npx prisma migrate deploy
```

The API will be available at `http://localhost:3000`.

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
`GET /books` — Get all books.
`GET /books/:id` — Get a single book by ID.
`POST /books` — Add a new book.
`PATCH /books/:id` — Update a book's status, rating, or notes.
`DELETE /books/:id` — Remove a book from the system.

## Folder Structure
```
src/
├── index.ts        entry point
├── routes/         URL → handler mapping
├── controllers/    request/response handlers
├── services/       business logic
├── models/         TypeScript interfaces

```
