import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from "react"

// const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDTebYqBmNCsEP0lCmyTKfpfDwK_kErNvY"

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
));

export default class Gmap extends React.Component {
  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    )
  }
}