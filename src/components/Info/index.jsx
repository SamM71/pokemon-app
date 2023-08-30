import { useEffect } from "react"

function Info(props) {
  let name, id, height, weight, image = ''
  let types = []


  async function getInfo() {
    try {
      console.log(props)
      if (props.pokeData.species) {
        name = props.pokeData.species.name
        console.log(name)
        id = props.pokeData.id
        height = props.pokeData.height
        weight = props.pokeData.weight
        
        
        types = props.pokeData.types[0].type.name

        if (props.pokeData.types.length > 1) {
          types += `, ${props.pokeData.types[1].type.name}`
        }

        image = props.pokeData.sprites.front_default

      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getInfo()
  }, [getInfo()])

  return (
    <>
      <div>
        <a><img src={image} alt="" /></a>
        <p>Name: {name}</p>
        <p>Number: {id}</p>
        <p>Height: {height/10}m</p>
        <p>Weight: {weight/10}kg</p>
        <p>Type(s): {types}</p>
      </div>
    </>
  )
}

export default Info