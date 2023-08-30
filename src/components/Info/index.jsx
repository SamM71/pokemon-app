function Info(props) {
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

export default Info