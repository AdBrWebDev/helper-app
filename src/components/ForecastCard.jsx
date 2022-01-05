import React, {useState, lazy} from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
const HourForecast = lazy(() => import('./HourForecast'));

export default function ForecastCard(props){
    const [showWeather, openWeather] = useState(false);
    const conditionIcon = props.forecast.day.condition.icon;
    console.log(props);
    return(<Grid key={props.index} xs={12} sm={12} md={6} xl={4} lg={4}>
        <Paper id="forItem" elevation={3} className="p-5 m-3 text-center" onClick={() => openWeather(!showWeather)}>
        <Typography variant="h6" className="mb-1">{props.forecast.date}</Typography>
        <img src={conditionIcon} alt="icon" />
        <Typography>{props.forecast.day.condition.text}</Typography>
        <Typography><i className="material-icons text-danger">thermostat</i>{props.forecast.day.maxtemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">thermostat</i>{props.forecast.day.mintemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">opacity</i>{props.forecast.day.totalprecip_mm} mm</Typography>
        </Paper>
        {(showWeather) ? <Box id="dark-background" className="position-fixed">
            <Card style={{'height': '90%', 'overflowY': 'scroll'}} id="card" className="text-white mt-5 p-5 border border-dark text-center">
        <Button variant="contained" color="info" onClick={()=> openWeather(!showWeather)} style={{position: 'relative', float: 'right'}}>x</Button>
        <Typography variant="h6" className="mb-1">{props.forecast.date}</Typography>
        <img style={{transform: "scale(1.8)"}} src={conditionIcon} alt="icon" />
        <Typography>{props.forecast.day.condition.text}</Typography>
        <Grid container className="mt-2">
        <Grid item xs={6}>
        <Typography><i className="material-icons">cloud</i>{props.forecast.day.maxtemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">air</i>{props.forecast.day.maxwind_kph} km/h</Typography>
        <Typography><i className="material-icons">UV</i>{props.forecast.day.uv}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography><i className="material-icons text-danger">thermostat</i>{props.forecast.day.maxtemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">thermostat</i>{props.forecast.day.mintemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">opacity</i>{props.forecast.day.totalprecip_mm} mm</Typography>
        </Grid>
        </Grid>
        <Grid container className="my-5">
            <Grid item xs={6}>
                <Typography variant="h4"><i className="material-icons">north</i><i className="material-icons mr-3">nightlight</i>{props.forecast.astro.moonrise}</Typography>
                <Typography variant="h4"><i className="material-icons">north</i><i className="material-icons">wb_sunny</i>{props.forecast.astro.sunrise}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4"><i className="material-icons">south</i><i className="material-icons">nightlight</i>{props.forecast.astro.moonset}</Typography>
                <Typography variant="h4"><i className="material-icons">south</i><i className="material-icons">wb_sunny</i>{props.forecast.astro.sunset}</Typography>
            </Grid>
        </Grid>
        <Grid>
            {props.forecast.hour.map((hourF) => <HourForecast forecast={hourF} />)}
        </Grid>
        </Card>
        </Box>: null}
        </Grid>)
}