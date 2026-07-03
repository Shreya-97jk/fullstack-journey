import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const createBookSchema = z.object({
title: z.string().min(1),
author: z.string().min(1),
genre: z.string().optional(),
status: z.enum(['want-to-read', 'reading', 'finished']),
rating: z.number().min(1).max(5).optional(),
notes: z.string().optional(),
  finished_at: z.string().datetime().optional(),
});
export const updateBookSchema = createBookSchema.partial();
export function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ error: result.error.flatten() });
      return;
    }
    req.body = result.data;
    next();
  };
}