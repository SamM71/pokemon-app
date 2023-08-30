import { useEffect } from "react"

function Info(props) {
  let name, id, height, weight, image = ''
  let types = []
  let data = props.pokeData

  function getInfo() {
    try {
      if (data.species) {
        name = data.species.name
        id = data.id
        height = data.height
        weight = data.weight
        
        
        types = data.types[0].type.name

        if (data.types.length > 1) {
          types += `, ${data.types[1].type.name}`
        }

        image = data.sprites.front_default

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