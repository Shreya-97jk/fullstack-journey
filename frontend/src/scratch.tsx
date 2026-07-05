import { useState, useEffect } from 'react';
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <p>Hello, {name}!</p>;
}

export default Greeting;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}

export { Counter };

function EffectDemo() {
  useEffect(() => {
    console.log('EffectDemo mounted!');
  }, []);

  return <p>Check your browser console.</p>;
}

export { EffectDemo };

function LoadingDemo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data loaded!</p>}
      <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
    </div>
  );
}

export { LoadingDemo };

function BookList() {
  const books = [
    { id: 1, title: 'Dune' },
    { id: 2, title: 'Project Hail Mary' },
    { id: 3, title: 'The Hobbit' },
  ];

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export { BookList };