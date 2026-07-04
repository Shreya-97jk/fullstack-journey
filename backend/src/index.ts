import 'dotenv/config';

const requiredEnvVars = ['DATABASE_URL', 'PORT', 'JWT_SECRET'];
for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

import pinoHttp from 'pino-http';
import { errorHandler } from './middleware/errorHandler';
import express from 'express';
import bookRouter from './routes/books';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(pinoHttp());
app.use('/books', bookRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
