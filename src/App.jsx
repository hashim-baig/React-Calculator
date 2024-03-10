import { useState } from 'react'

import Number from './components/Number'
import Operations from './components/Operations'

import './App.css'

function App() {
  const [displayedValue, setDisplayedValue] = useState('0')
  const [result, setResult] = useState('0')

  const handleClick = (value) => {

    if (value === '.' && displayedValue.includes('.')) return; // Prevent multiple decimal points
    if (value === '0' && displayedValue === '0') return; // Prevent numbers starting with multiple zeros
    setDisplayedValue(displayedValue + value);
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
