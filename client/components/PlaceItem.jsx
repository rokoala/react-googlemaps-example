
const PlaceItem = ({title, description}) =>{

  let cssItem = {
    backgroundColor: 'slategrey',
    padding:'5px',
    borderBottom: '1px solid lightgray'
  }

  return(
    <li style={cssItem}>
      <h4>{title}</h4>
      <div>
      <p>
        {description}
      </p>
      </div>
    </li>
  )
}

export default PlaceItem