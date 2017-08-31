import { setItem } from '../actions'
import { connect } from 'react-redux'
import PlaceItem from './PlaceItem.jsx'

let PlaceMenu = ({ dispatch }) => {

  let itemClick = (item) => {
    dispatch(setItem(item.id, item.text))
  }

  let asideCss = {
    flex: '1 20%',
    order: 1,
    textAlign: 'center',
  };

  let listCss = {
    listStyle: 'none',
    padding: 0
  }

  var items = [{
    id: 0,
    text: 'item 1',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, nibh sed malesuada maximus, leo arcu iaculis tortor, vel elementum turpis quam eget nibh. ",
  },
  {
    id: 1,
    text: 'item 2',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, nibh sed malesuada maximus, leo arcu iaculis tortor, vel elementum turpis quam eget nibh. "
  },
  {
    id: 2,
    text: 'item 3',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, nibh sed malesuada maximus, leo arcu iaculis tortor, vel elementum turpis quam eget nibh. "
  }]

  return (
    <aside style={asideCss}>
      <h3>Places</h3>
      <ul style={listCss}>
        {items.map((item) => <PlaceItem key={item.id} title={item.text} description={item.description}/>)}
      </ul>
    </aside>
  )

}

PlaceMenu = connect()(PlaceMenu)

export default PlaceMenu