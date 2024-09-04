import { useState } from 'react'
import './App.css'
import Button from './components/button'
import CEPInfo from './components/CEP-info'
import Input from './components/input'

function App() {

  const [inputValue, setInputValue] = useState('');

  function handleInputChange(value) {
    setInputValue(() => value)
  }

  function handleButtonClick() {
    alert(inputValue);
  };

  return (
    <>
      <h1>Buscador de CEP</h1>
      <Input onInputChange={handleInputChange} />
      <Button onClick={handleButtonClick} />
      <CEPInfo />
    </>
  )
}

export default App
