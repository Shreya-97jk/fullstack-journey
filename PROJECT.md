# Project: My Reading Log

## Description
A personal reading tracker where you can log books across three statuses: want-to-read (Backlog), reading, and finished. For each book you record the title, author, genre, a 1–5 star rating (optional), personal notes or review (optional), and the date you finished it. The app lets you filter your library by status, view full details for any book, and create, edit, or delete entries.

---

## Entities

### Book
| Field        | Type      | Required | Notes                                      |
|--------------|-----------|----------|--------------------------------------------|
| id           | integer   | yes      | Primary key, auto-generated                |
| title        | text      | yes      |                                            |
| author       | text      | yes      |                                            |
| genre        | text      | no       |                                            |
| status       | text      | yes      | `want-to-read` / `reading` / `finished`    |
| rating       | integer   | no       | 1–5, nullable (unread books have no rating)|
| notes        | text      | no       | Personal review or breakdown               |
| finished_at  | date      | no       | Nullable — only set when status=finished   |
| created_at   | timestamp | yes      | Auto-set on creation                       |

---

## API Endpoints

```
METHOD   PATH                      WHAT IT DOES
─────────────────────────────────────────────────────────────────
POST     /books                    Create a new book entry
GET      /books                    List all books
GET      /books?status=want-to-read  List books filtered by status
GET      /books?status=reading       List books filtered by status
GET      /books?status=finished      List books filtered by status
GET      /books/:id               Get full details for one book
PATCH    /books/:id               Update one or more fields on a book
DELETE   /books/:id               Delete a book from the library
```

---

## UI Sketches

### Page 1 — List Page (`/books`)
```
┌─────────────────────────────────────────────┐
│  My Reading Log                          [+] │
├─────────────────────────────────────────────┤
│ [All] [Reading] [Finished] [Backlog]         │
├──────────────────┬────────┬────────┬────────┤
│ Title            │ Author │ Status │ Rating │
├──────────────────┼────────┼────────┼────────┤
│ The Hobbit       │Tolkien │  ● done│ ★★★★☆ │
│ Dune             │Herbert │  ◌ rdng│ --    │
│ Project Hail Mary│Weir    │  ○ bklg│ --    │
└──────────────────┴────────┴────────┴────────┘
```

### Page 2 — Detail Page (`/books/:id`)
```
┌─────────────────────────────────────────────────────┐
│  ← Back to list                                      │
├───────────────────────────┬─────────────────────────┤
│                           │                         │
│  The Hobbit               │  [Mark as Finished]     │
│  J.R.R. Tolkien           │  [Edit Details]         │
│                           │  [Delete Book]  (red)   │
│  ● FINISHED               │                         │
│  ★★★★☆                    │                         │
│  Genre: Fantasy           │                         │
│  Finished: 2026-05-10     │                         │
│                           │                         │
├───────────────────────────┴─────────────────────────┤
│  Notes                                               │
│  ┌───────────────────────────────────────────────┐  │
│  │ A classic. The world-building is incredible   │  │
│  │ but the pacing drags in chapter 3...          │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```
Note: "Mark as Finished" is context-aware — shows "Start Reading" if status is
want-to-read, "Mark as Finished" if reading, greyed out if already finished.

### Page 3 — Create Form
```
┌─────────────────────────────────────┐
│  Add New Book                       │
├─────────────────────────────────────┤
│                                     │
│  Title *                            │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  Author *                           │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  Genre  (optional)                  │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  Status                             │
│  ┌─────────────────────────────┐    │
│  │ Backlog                   ▾ │    │
│  └─────────────────────────────┘    │
│                                     │
│  Rating  (optional)                 │
│  ☆ ☆ ☆ ☆ ☆                         │
│                                     │
│  Notes  (optional)                  │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│              [Cancel] [Save Book]   │
└─────────────────────────────────────┘
```
* = required field. Rating sends NULL to the database if left unselected.
