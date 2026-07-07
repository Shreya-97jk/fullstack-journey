import { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('want-to-read');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, status }),
    });

    setTitle('');
    setAuthor('');
    setStatus('want-to-read');
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="want-to-read">Want to Read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;