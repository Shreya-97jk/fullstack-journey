import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { NotFoundError, AuthError } from '../errors';

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ZodError) {
    res.status(400).json({ error: err.flatten() });
    return;
  }

  if (err instanceof NotFoundError) {
    res.status(404).json({ error: err.message });
    return;
  }

  if (err instanceof AuthError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  req.log.error(err);
  res.status(500).json({ error: 'Internal server error' });
}