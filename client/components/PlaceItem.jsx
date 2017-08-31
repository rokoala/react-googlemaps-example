import { setItem } from '../actions/index.js'
import { connect } from 'react-redux'

let PlaceItem = ({title, description, dispatch}) =>{

  let cssItem = {
    backgroundColor: 'slategrey',
    padding:'5px',
    borderBottom: '1px solid lightgray'
  }

  let clickItem = (item,description) => {
    dispatch(setItem(0 , item))
  }

  return(
    <li onClick={()=>clickItem(title,description)} style={cssItem}>
      <h4>{title}</h4>
      <div>
      <p>
        {description}
      </p>
      </div>
    </li>
  )
}

PlaceItem = connect()(PlaceItem)

export default PlaceItem