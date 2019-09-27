import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = `AIzaSyCKZorfWUWNBsdAANO1bwwF7ZMla6wEbiQ`
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
    
  static defaultProps = {
    center: {
      lat: 31.771959,
      lng: 35.217018
    },
    zoom: 11
  };
 
  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;