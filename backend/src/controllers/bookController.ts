import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export function createBook(req: Request, res: Response) {
  const book = bookService.create(req.body);
  res.status(201).json(book);
}

export function getBooks(req: Request, res: Response) {
  const { status } = req.query as { status?: string };
  res.json(bookService.findAll(status));
}

export function getBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const book = bookService.findById(id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  res.json(book);
}

export function updateBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const book = bookService.update(id, req.body);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  res.json(book);
}

export function deleteBook(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }
  const deleted = bookService.remove(id);
  if (!deleted) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  res.status(204).send();
}