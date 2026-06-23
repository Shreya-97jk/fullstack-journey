import { Book } from '../models/book';

type CreateBookData = Omit<Book, 'id' | 'created_at'>;
type UpdateBookData = Partial<Omit<Book, 'id' | 'created_at'>>;

const books: Book[] = [];
let nextId = 1;

export function create(data: CreateBookData): Book {
  const book: Book = {
    ...data,
    id: nextId++,
    created_at: new Date().toISOString(),
  };
  books.push(book);
  return book;
}

export function findAll(status?: string): Book[] {
  if (status) {
    return books.filter(b => b.status === status);
  }
  return books;
}

export function findById(id: number): Book | undefined {
  return books.find(b => b.id === id);
}

export function update(id: number, data: UpdateBookData): Book | undefined {
  const book = findById(id);
  if (!book) return undefined;
  Object.assign(book, data);
  return book;
}

export function remove(id: number): boolean {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
}
