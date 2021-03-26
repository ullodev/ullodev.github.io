import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Bootstrap from './Bootstrap'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
   

    return (
      <Bootstrap
        mapStylep={mapStyles}
        google={this.props.google}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCm7_wU1gpvDlirIaIiZxCOYc7ciIi9kkQ'
})(MapContainer);