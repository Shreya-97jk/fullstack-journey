import { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookEditForm from './components/BookEditForm';

function App() {
  const [editingBookId, setEditingBookId] = useState<number | null>(null);

  return (
    <div>
      <BookForm />
      {editingBookId !== null && (
        <BookEditForm
          bookId={editingBookId}
          onDone={() => setEditingBookId(null)}
        />
      )}
      <BookList onEditBook={setEditingBookId} />
    </div>
  );
}

export default App;