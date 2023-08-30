import React, { useState } from 'react'
import './App.css'
import { Form, Info } from './components'

function App() {
  const [pokeData, setPokeData] = useState([])

  return (
    <>
      <h1>Search For a Pokemon</h1>
      <Form pokeData={pokeData} setPokeData={setPokeData} />
      <Info pokeData={pokeData} setPokeData={setPokeData} />
    </>
  )
}

export default App
