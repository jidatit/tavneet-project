import React from 'react';
import GoogleMapReact from 'google-map-react';

const APIKEY = "AIzaSyD5nj76yf6UkARehcTNWkpGPJtfgwYqOCU"

function MapContainer() {

  const defaultProps = {
    center: {
      lat: 37.7749, // Latitude of your center point
      lng: -122.4194, // Longitude of your center point
    },
    zoom: 14,
  };
  const makerProps = {
    center: {
      lat: 37.7749, // Latitude of your center point
      lng: -122.4194, // Longitude of your center point
    },
    zoom: 14,
  };

  return (
    <div className="map-container w-full" style={{ width: '100%', height: `100%` }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={makerProps.center}
        draggable={true}
      >
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;