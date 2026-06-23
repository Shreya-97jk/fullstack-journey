import express from 'express';
import bookRouter from './routes/books';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/books', bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});