import { useState } from 'react'

import Number from './components/Number'
import Operations from './components/Operations'

import './App.css'

function App() {
  const [displayedValue, setDisplayedValue] = useState('0')
  const [currentOperator, setCurrentOperator] = useState('');

  const handleClick = (value) => {

    if (value === '.' && displayedValue.includes('.')) return; // Prevent multiple decimal points
    if (value === '0' && displayedValue === '0') return; // Prevent numbers starting with multiple zeros
    if (displayedValue === '0') {
      console.log('Setting single zero');
      if (value === 'Del' || value === 'Reset' || value === '+' || value === "-" || value === "*" || value === "/") {
        setDisplayedValue('0')
        return;
      }
      setDisplayedValue(value)
      return;
    };
    if (value === 'Reset') {
      setDisplayedValue('0');
      setCurrentOperator('');
      return;
    }
    if (value === '+' || value === "-" || value === "*" || value === "/") {
      if (['+', '-', '*', '/'].includes(displayedValue[displayedValue.length - 1])) {
        let updatedValue = displayedValue.slice(0, -1) + value;
        setDisplayedValue(updatedValue);
        setCurrentOperator(value);
        console.log(currentOperator);
        return
      }
      setDisplayedValue(displayedValue + value)
      setCurrentOperator(value);
      console.log(currentOperator);
      return;
    }
    if (value === "Del" && displayedValue !== '0') {
      setDisplayedValue(displayedValue.slice(0, -1));
      console.log(displayedValue.length)
      if (displayedValue.length < 2) {
        setDisplayedValue('0');
      }
      return;
    }

    if (value === '=') {
      handleCalculate()
      return;
    }
    setDisplayedValue(displayedValue + value)
  }


  const handleCalculate = () =>  {
    if (displayedValue === '') return;
    const numbers = displayedValue.split(/[+\-*\/]/);
    console.log(numbers);
    const operand1 = parseFloat(numbers[0]);
    const operand2 = parseFloat(numbers[1]);
    let result;
    switch (currentOperator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0) {
          setDisplayedValue('0');
          setCurrentOperator('');;
          document.getElementById('display').textContent = 'Error';
          return;
        }
        result = operand1 / operand2;
        break;
    }
    setDisplayedValue(result.toString());
    setCurrentOperator('');
    console.log(result)
  }


  return (
    <main>
      <p id='display'>{displayedValue}</p>
      <section>
        <Number onButtonClick={handleClick} />
        <Operations onButtonClick={handleClick} />
      </section>
    </main>
  )
}

export default App
