import React, { useState } from 'react'

const Form = (props) => {
  const [inputText, setInputText] = useState('')

  function updateInput(e) {
    setInputText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Do something

    setInputText('')
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