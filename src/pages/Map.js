import React, {useState} from 'react'
import {withScriptjs, withGoogleMap ,GoogleMap, Marker} from 'react-google-maps'
import Box from '@mui/material/Box'

export default function Map(){

    window.addEventListener('load', getLocation)

    function getLocation() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((cords)=> {
            console.log(cords.latitude, cords.longitude)
        })
      }
      else{
        alert('I cannot find your location.')
      }
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        </GoogleMap>
      ))
      
      return(<Box>
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAclgJeVn1JwTJjNzeMB559-HGUkTHR-Eo&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /></Box>
      )}