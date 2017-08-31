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

  return (
    <ul style={css}>
      <NavItem text="Home"/>
      <NavItem text="Map"/>
    </ul>
  )
}

export default Navbar;