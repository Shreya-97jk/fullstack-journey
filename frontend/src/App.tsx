import { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookEditForm from './components/BookEditForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [editingBookId, setEditingBookId] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showSignup, setShowSignup] = useState(false);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    if (showSignup) {
      return (
        <div>
          <SignupForm onSignupSuccess={() => setShowSignup(false)} />
          <p>
            Already have an account?{' '}
            <button onClick={() => setShowSignup(false)}>Log In</button>
          </p>
        </div>
      );
    }

    return (
      <div>
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
        <p>
          Need an account?{' '}
          <button onClick={() => setShowSignup(true)}>Sign Up</button>
        </p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
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