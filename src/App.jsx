import { useState } from 'react'

import Number from './components/Number'
import Operations from './components/Operations'

import './App.css'

function App() {
  const [displayedValue, setDisplayedValue] = useState('0')

  const handleClick = (value) => {
    switch (value) {
      case 'Del':
        setDisplayedValue(displayedValue.slice(0, -1));
        break;
      case 'Reset':
        setDisplayedValue('0')
        break;
      default:
        setDisplayedValue(displayedValue + value);
    }

  }

  return (
    <main>
      <p id='result'></p>
      <p id='display'>{displayedValue}</p>
      <section>
        <Number onButtonClick={handleClick} />
        <Operations onButtonClick={handleClick} />
      </section>
    </main>
  )
}

export default App
