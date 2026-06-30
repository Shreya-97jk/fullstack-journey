# Reading Log — Backend
This API provides a backend service to manage a digital bookshelf by allowing me to create, view, update, and delete books in a reading tracker application.


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
