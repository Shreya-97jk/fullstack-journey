import { Book as PrismaBook } from '../generated/prisma/client';
import { prisma } from '../lib/prisma';
import { Book } from '../models/book';
function toApiStatus(status: PrismaBook['status']): Book['status'] {
  switch (status) {
    case 'WANT_TO_READ': return 'want-to-read';
    case 'READING': return 'reading';
    case 'FINISHED': return 'finished';
  }
}
function toPrismaStatus(status: Book['status']): PrismaBook['status'] {
  switch (status) {
    case 'want-to-read': return 'WANT_TO_READ';
    case 'reading': return 'READING';
    case 'finished': return 'FINISHED';
    default: throw new Error(`Invalid status: ${status}`);
  }
}
function toBook(row: PrismaBook): Book {
  return {
    id: row.id,
    title: row.title,
    author: row.author,
    genre: row.genre ?? undefined,
    status: toApiStatus(row.status),
    rating: row.rating ?? undefined,
    notes: row.notes ?? undefined,
    finished_at: row.finishedAt ? row.finishedAt.toISOString() : undefined,
    created_at: row.createdAt.toISOString(),
  };
}
type CreateBookData = Omit<Book, 'id' | 'created_at'>;
type UpdateBookData = Partial<Omit<Book, 'id' | 'created_at'>>;


export async function create(data: CreateBookData): Promise<Book> {
  const row = await prisma.book.create({
    data: {
      title: data.title,
      author: data.author,
      genre: data.genre,
      status: toPrismaStatus(data.status),
      rating: data.rating,
      notes: data.notes,
      finishedAt: data.finished_at ? new Date(data.finished_at) : undefined,
    },
  });
  return toBook(row);
}

export async function findAll(status?: string): Promise<Book[]> {
  const rows = await prisma.book.findMany({
    where: status ? { status: toPrismaStatus(status as Book['status']) } : undefined,
  });
  return rows.map(toBook);
}

export async function findById(id: number): Promise<Book | null> {
 const row = await prisma.book.findUnique({ where: { id } });
  return row ? toBook(row) : null;
}

export async function update(id: number, data: UpdateBookData): Promise<Book | undefined> {
  const existing = await findById(id);
  if (!existing) return undefined;

  const row = await prisma.book.update({
    where: { id },
    data: {
      title: data.title,
      author: data.author,
      genre: data.genre,
      status: data.status ? toPrismaStatus(data.status) : undefined,
      rating: data.rating,
      notes: data.notes,
      finishedAt: data.finished_at ? new Date(data.finished_at) : undefined,
    },
  });
  return toBook(row);
}

export async function remove(id: number): Promise<boolean> {
  const existing = await findById(id);
  if (!existing) return false;
  await prisma.book.delete({ where: { id } });
  return true;
}
