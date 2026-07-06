import { useEffect, useState } from 'react';
import type { Book } from '../../../backend/src/models/book';

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch('http://localhost:3000/books');
        if (!res.ok) throw new Error('Failed to fetch books');
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        setError('Could not load books.');
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default BookList;