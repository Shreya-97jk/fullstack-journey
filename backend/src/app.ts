import 'dotenv/config';
import cors from 'cors';
import pinoHttp from 'pino-http';
import { errorHandler } from './middleware/errorHandler';
import express from 'express';
import bookRouter from './routes/books';
import authRouter from './routes/auth';
import healthRouter from './routes/health';

const requiredEnvVars = ['DATABASE_URL', 'PORT', 'JWT_SECRET', 'CORS_ALLOWED_ORIGINS'];
for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const app = express();
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS!.split(',');
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use(pinoHttp());
app.use('/books', bookRouter);
app.use('/health', healthRouter);
app.use('/auth', authRouter);
app.use(errorHandler);

export default app;