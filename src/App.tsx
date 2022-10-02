import { useEffect, useState } from 'react';
import './App.css';

const getRandomColor = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join('');
  return `#${color}`;
}

function App() {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [isWrongSelection, setIsWrongSelection] = useState<boolean>(false);

  const generateColors = () => {
    getRandomColor();
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()));
  }

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setIsWrongSelection(false);
      generateColors();
    } else {
      setIsWrongSelection(true);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map(answer => (
          <button key={answer} onClick={() => handleAnswerClicked(answer)}>{answer}</button>
        ))}
        {isWrongSelection && <div className="wrong">Wrong Answer</div>}
      </div>
    </div>
  );
}

export default App;
