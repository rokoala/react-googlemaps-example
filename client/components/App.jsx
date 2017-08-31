import Gmap from './Gmap.jsx'
import Navbar from './Navbar.jsx'
import PlaceMenu from './PlaceMenu.jsx'
import DisplayStore from './DisplayStore.jsx'

export default class App extends React.Component {
  render() {

    let wrapperCss = {
      display: 'flex',
      flexFlow: 'column',
      height: '100%'
    }

    let headerCss = {
      flex: '1 5%'
    }

    let wrapMapCss = {
      flex: '1 80%',
      order: 1
    }

    let contentCss = {
      flex: '1 95%',
      display: 'flex',
      flexFlow: 'row'
    }

    return (
      <div style={wrapperCss}>
        <header style={headerCss}>
          <Navbar />
        </header>
        <div style={contentCss}>
          <PlaceMenu />
          <div style={wrapMapCss}>
            <Gmap />
          </div>
        </div>
      </div>
    )
  }
}