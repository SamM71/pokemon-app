import React, { useState } from 'react'

const Form = (props) => {
  const [inputText, setInputText] = useState('')

  function updateInput(e) {
    setInputText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Do something
    props.setPokeData(getPokemon(inputText))
    setInputText('')
  }

  async function getPokemon(name) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const response = await fetch(url)
      const data = await response.json()
      props.setPokeData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemon">Pokemon</label>
      <input type="text"
        className='pokemon-input'
        value={inputText}
        onChange={updateInput} 
      />
      <input type="submit" value="Search"/>
    </form>
  )
}

export default Form