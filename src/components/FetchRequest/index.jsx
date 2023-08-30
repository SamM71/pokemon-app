function FetchRequest(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            {props.pokeData.id}
          </li>
          <li>
            {props.pokeData.weight}
          </li>
        </ul>
      </div>
    </>
  )
}

export default FetchRequest