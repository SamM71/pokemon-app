import React, { useState } from 'react'
import './App.css'
import { Form, FetchRequest } from './components'

function App() {
  const [pokeData, setPokeData] = useState([])

  return (
    <>
      <h1>Search For a Pokemon</h1>
      <Form pokeData={pokeData} setPokeData={setPokeData} />
      <FetchRequest pokeData={pokeData} setPokeData={setPokeData} />
    </>
  )
}

export default App
