import { useEffect, useState } from 'react';

interface BookEditFormProps {
  bookId: number;
  onDone: () => void;
}

function BookEditForm({ bookId, onDone }: BookEditFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('want-to-read');

  useEffect(() => {
    async function loadBook() {
      const res = await fetch(`http://localhost:3000/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      setTitle(data.title);
      setAuthor(data.author);
      setStatus(data.status);
    }

    loadBook();
  }, [bookId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, author, status }),
    });

    onDone();
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="want-to-read">Want to Read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

export default BookEditForm;