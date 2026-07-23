import 'dotenv/config';
import cors from 'cors';
import pinoHttp from 'pino-http';
import { errorHandler } from './middleware/errorHandler';
import express from 'express';
import bookRouter from './routes/books';
import authRouter from './routes/auth';

const requiredEnvVars = ['DATABASE_URL', 'PORT', 'JWT_SECRET'];
for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(pinoHttp());
app.use('/books', bookRouter);
app.use('/auth', authRouter);
app.use(errorHandler);

export default app;