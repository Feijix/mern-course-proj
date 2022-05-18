import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


import './Map.css'

const Map = withScriptjs(withGoogleMap((props) => {
  return <div className={`map ${props.className}`} style={props.style}>
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}
    >
      <Marker position={props.center} />
    </GoogleMap>
  </div>
}))

export default Map