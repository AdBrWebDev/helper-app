import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../App.css';

export default function ForecastCard(props){
    const [showWeather, openWeather] = useState(false);
    const conditionIcon = props.forecast.day.condition.icon;
    console.log(props);
    return(<Grid key={props.index}>
        <Paper elevation={3} className="p-5 m-4" onClick={() => openWeather(!showWeather)}>
        <Typography variant="h6" className="mb-1">{props.forecast.date}</Typography>
        <img src={conditionIcon} alt="icon" />
        <Typography>{props.forecast.day.condition.text}</Typography>
        <Typography><i className="material-icons text-danger">thermostat</i>{props.forecast.day.maxtemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">thermostat</i>{props.forecast.day.mintemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">opacity</i>{props.forecast.day.totalprecip_mm} mm</Typography>
        </Paper>
        {(showWeather) ? <Paper id="dark-layer" className="bg-dark text-white mt-5 p-5 shadow-lg rounded" style={{height: '90%', overflow: 'auto'}}>
        <Button variant="contained" color="secondary" onClick={()=> openWeather(!showWeather)} style={{position: 'relative', float: 'right' ,top: -30, right: -30}}>x</Button>
        <Typography variant="h6" className="mb-1">{props.forecast.date}</Typography>
        <img src={conditionIcon} alt="icon" />
        <Typography>{props.forecast.day.condition.text}</Typography>
        <Typography><i className="material-icons text-danger">thermostat</i>{props.forecast.day.maxtemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">thermostat</i>{props.forecast.day.mintemp_c} °C</Typography>
        <Typography><i className="material-icons text-info">opacity</i>{props.forecast.day.totalprecip_mm} mm</Typography>
        <Grid container>
            <Grid>
                <Typography variant="h4"><i className="material-icons">north</i><i className="material-icons">nightlight</i>{props.forecast.astro.moonrise}</Typography>
                <Typography variant="h4"><i className="material-icons">south</i><i className="material-icons">wb_sunny</i>{props.forecast.astro.sunrise}</Typography>
            </Grid>
            <Grid>
                <Typography variant="h4"><i className="material-icons">north</i><i className="material-icons">nightlight</i>{props.forecast.astro.moonset}</Typography>
                <Typography variant="h4"><i className="material-icons">south</i><i className="material-icons">wb_sunny</i>{props.forecast.astro.sunset}</Typography>
            </Grid>
        </Grid>
        </Paper>: null}
    </Grid>)
}