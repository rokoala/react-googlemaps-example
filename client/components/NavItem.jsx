
const NavItem = ({text, style}) =>{

  let itemCss = Object.assign({},
    {
      flex: '0 1 20px',
      padding: '5px',
      lineHeight: 2,
      cursor:'pointer'
    },
    style
  )

  return(
    <li style={itemCss}>{text}</li>
  )
}

export default NavItem