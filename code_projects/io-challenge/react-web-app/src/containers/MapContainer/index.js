import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
render() {
    return (
        <Map
            google={this.props.google}
            style={{width: '100vw', height: '100vh'}}
            initialCenter={{
                lat: -34.623164,
                lng: -58.365047
            }}
            zoom={15}
        />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer)