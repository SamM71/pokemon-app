import { useState, useEffect } from "react";

function FetchRequest() {
  const [pokeData, setPokeData] = useState([])

  async function getPokemon() {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/ditto"
      const response = await fetch(url)
      const data = await response.json()
      setPokeData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <div>
        <ul>
          <li>
            {pokeData.id}
          </li>
          <li>
            {pokeData.weight}
          </li>
        </ul>
      </div>
    </>
  )
}

export default FetchRequest