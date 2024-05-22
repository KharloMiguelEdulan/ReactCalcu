import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const deleteLast = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (e) {
      alert("Invalid expression");
      clearDisplay();
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input id="display" type="text" readOnly value={display} />
      </div>
      <div className="buttons">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={() => appendToDisplay('/')}>/</button>

        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>*</button>

        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>

        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>

        <button onClick={() => appendToDisplay('00')}>00</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
