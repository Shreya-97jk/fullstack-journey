import pinoHttp from 'pino-http';
import { errorHandler } from './middleware/errorHandler';
import 'dotenv/config';
import express from 'express';
import bookRouter from './routes/books';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(pinoHttp());
app.use('/books', bookRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
