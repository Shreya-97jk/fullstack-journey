import { useEffect, useState } from 'react';
import type { Book } from '../../../backend/src/models/book';
interface BookListProps {
  onEditBook: (id: number) => void;
}

function BookList({ onEditBook }: BookListProps) {

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

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}
          <button onClick={() => onEditBook(book.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}
export default BookList;