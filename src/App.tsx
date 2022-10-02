import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');

  useEffect(() => {
    // TODO: generate a random color here
    setColor('#FF00DD')
  }, []);

  return (
    <div className="App">
      <div className="guess-me" style={{ background: color }}></div>
    </div>
  );
}

export default App;
