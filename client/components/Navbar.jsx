import NavItem from './NavItem.jsx'

const Navbar = () => {
  let css = {
    display:'flex',
    flexDirection:'row',
    listStyle: 'none',
    margin:0,
    height:'100%',
    backgroundColor:'lightgray',
    borderBottom:'1px solid rgba(0,0,0,0.09)'
  }

  var items = ["Home","Map"];

  return (
    <ul style={css}>
      { items.map((item) => <NavItem key={item} text={item}/> )}
    </ul>
  )
}

export default Navbar;