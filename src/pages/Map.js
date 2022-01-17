import React, {useState, useEffect} from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap ,GoogleMap, Marker} from 'react-google-maps'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Map(){
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [type, setType] = useState('restaurants')

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
      
      return(<Grid container>
        <Grid item xs={12} sm={12} md={12} xl={3} lg={3}>
          <Card id="card" className="m-3 p-3 py-5 border border-dark">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel className="text-white" id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={'restaurants'}>Reštaurácie</MenuItem>
          <MenuItem value={'hotels'}>Hotely</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={9} lg={9}>
          <MyMapComponent isMarkerShown />
        </Grid>
      </Grid>
      )}