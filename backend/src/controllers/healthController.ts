import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function checkHealth(req: Request, res: Response): Promise<void> {
  try {
    // Ping the database with a lightweight raw query
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('Health check failed:', error);

    res.status(503).json({ status: 'error' });
  }
}