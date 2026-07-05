import Greeting from './scratch';
import { Counter, EffectDemo, LoadingDemo, BookList } from './scratch';

function App() {
  return (
    <div>
      <Greeting name="Shreya" />
      <Counter />
      <EffectDemo />
      <LoadingDemo />
      <BookList />
    </div>
  );
}

export default App;