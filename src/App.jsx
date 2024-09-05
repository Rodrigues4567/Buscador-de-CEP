import { useState } from 'react'
import './App.css'
import Button from './components/button'
import CEPInfo from './components/CEP-info'
import Input from './components/input'
import api from './services/api'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [cep, setCep] = useState({})

  function handleInputChange(value) {
    setInputValue(() => value)
  }

  async function handleButtonClick() {
    if (inputValue == '') {
      alert('Valor inválido!')
      return
    }
    
    try {
      const response = await api.get(`${inputValue}/json/`)
      setCep(() => response.data)
    }
    catch {
      alert('CEP inválido!')
    }
  };

  return (
    <>
      <h1>Buscador de CEP</h1>
      <Input onInputChange={handleInputChange} />
      <Button onClick={handleButtonClick} />
      
      {Object.keys(cep).length > 0 && (
        <CEPInfo cep={cep.cep} logradouro={cep.logradouro} bairro={cep.bairro} cidade={cep.localidade} uf={cep.uf} />
      )}
    </>
  )
}

export default App
