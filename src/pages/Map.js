import React, {useState, useEffect} from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap ,GoogleMap, Marker} from 'react-google-maps'
import Box from '@mui/material/Box'

export default function Map(){
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos)=> {
            setLat(pos.coords.latitude)
            setLon(pos.coords.longitude)
    })});

    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAclgJeVn1JwTJjNzeMB559-HGUkTHR-Eo&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `90vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: lat, lng: lon }}
      >
        {props.isMarkerShown && <Marker position={{ lat: lat, lng: lon }} />}
      </GoogleMap>
    )
      
      return(<Box>
        {<MyMapComponent isMarkerShown />
      }</Box>
      )}