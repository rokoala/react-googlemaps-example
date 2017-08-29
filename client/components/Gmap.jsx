import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    const pos = { lat: -23.533773, lng: -46.625290 }
    const pos2 = { lat: -23.553773, lng: -46.625290 }
    return (
      <div style={style}>
        <Map google={this.props.google}
          initialCenter={{
            lat: -23.533773,
            lng: -46.625290
          }}
        >
          <Marker onClick={this.onMarkerClick} name={'Dolores park'} position={pos} />
          <Marker onClick={this.onMarkerClick} name={'Teste 2'} position={ pos2 } />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
})(MapContainer)