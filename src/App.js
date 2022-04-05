import { useState } from 'react';
import './App.css';
import Stars from './components/Stars';

function App() {
  const [count, setCount] = useState(5);
  return (
    <div className="App">
      <Stars count={count} />
    </div>
  );
}

export default App;
