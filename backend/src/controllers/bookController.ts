import { NotFoundError } from '../errors';
import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export async function createBook(req: Request, res: Response) {
  const book = await bookService.create(req.body);
  res.status(201).json(book);
}

export async function getBooks(req: Request, res: Response) {
  const { status } = req.query as { status?: string };
  res.json(await bookService.findAll(status));
}

export async function getBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const book = await bookService.findById(id);
  if (!book) {
    throw new NotFoundError('Book not found');
  }
  res.json(book);
}

export async function updateBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const book = await bookService.update(id, req.body);
  if (!book) {
    throw new NotFoundError('Book not found');
  }
  res.json(book);
}

export async function deleteBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const deleted = await bookService.remove(id);
  if (!deleted) {
    throw new NotFoundError('Book not found');
  }
  res.status(204).send();
}