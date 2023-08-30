import { useEffect } from "react"

function Info(props) {
  let name, id, height, weight = ''


  async function getInfo() {
    try {
      console.log(props)
      if (props.pokeData.species) {
        name = props.pokeData.species.name
        console.log(name)
        id = props.pokeData.id
        height = props.pokeData.height
        weight = props.pokeData.weight
        return [name, id, height, weight]
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
        <ul>
          <li>
            Name: {name}
          </li>
          <li>
            Number: {id}
          </li>
          <li>
            Weight: {weight}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Info