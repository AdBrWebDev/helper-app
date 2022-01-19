import React, {useState, useEffect} from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap ,GoogleMap, Marker} from 'react-google-maps'
import GoogleMapReact from 'google-map-react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Map(){
  const [lat, setLat] = useState(11.847676)
  const [lon, setLon] = useState(109.095887)
  const [type, setType] = useState('restaurants')
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos)=> {
            setCoordinates({lat: pos.coords.latitude, lng: pos.coords.longitude})
    })}, []);

    /*useEffect(() => {
   fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary??bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "66557737b7msh9c3b3ea04efb717p1d1d66jsnc48da6576447"
	}
}).then(response => response.json())
.then(response => {
	console.log(response.data);
  setPlaces(response.data)
})
.catch(err => {
	console.error(err);
});
    }, [])*/

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

    console.log(coordinates)
  
      return(<Box><Grid container>
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
      </Grid></Box>
      )}