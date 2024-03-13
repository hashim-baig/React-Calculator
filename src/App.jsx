import React, { useState } from 'react';
import Number from './components/Number';
import Operations from './components/Operations';
import './App.css';

function App() {
  const [displayedValue, setDisplayedValue] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');

  const handleClick = (value) => {
    switch (value) {
      case '.':
        if (displayedValue === '0') {
          setDisplayedValue(displayedValue + value);
          return;
        };
        if (displayedValue.includes('.')) return;
        break;
      case '0':
        if (displayedValue === '0') return;
        break;
      case 'Reset':
        setDisplayedValue('0');
        setCurrentOperator('');
        return;
      case '=':
        handleCalculate();
        return;
      case 'Del':
        if (displayedValue === '0') return;
        setDisplayedValue(prevValue => prevValue.slice(0, -1) || '0');
        return;
      default:
        break;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      if (displayedValue === '0') {
        setDisplayedValue('0');
        return;
      }
      if (['+', '-', '*', '/'].includes(displayedValue.slice(-1))) {
        setDisplayedValue(prevValue => prevValue.slice(0, -1) + value);
        setCurrentOperator(value);
        return;
      }
      setCurrentOperator(value);
    }

    setDisplayedValue(prevValue => prevValue === '0' ? value : prevValue + value);
  };

  const handleCalculate = () => {
    if (!currentOperator) return;

    const expression = displayedValue.split(/([+\-*\/])/).filter(token => token.trim() !== '');
    let result = parseFloat(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
      const operator = expression[i];
      const operand = parseFloat(expression[i + 1]);

      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          if (operand === 0) {
            setDisplayedValue('0');
            setCurrentOperator('');
            return;
          }
          result /= operand;
          break;
        default:
          return;
      }
    }

    setDisplayedValue(result.toString());
    setCurrentOperator('');
  };

  return (
    <main>
      <p id='display'>{displayedValue}</p>
      <section className='input-section'>
        <Number onButtonClick={handleClick} />
        <Operations onButtonClick={handleClick} />
      </section>
    </main>
  );
}

export default App;
