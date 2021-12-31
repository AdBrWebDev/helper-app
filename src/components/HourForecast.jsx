import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../App.css';

export default function HourForecast(props){
    console.log(props);
    return(
        <Paper id="forItem" className="card shadow-lg w-25 text-center p-4">
        <Typography>{(props.forecast.time).slice(11)}</Typography>
        <amp-img src={props.forecast.condition.icon} alt={props.forecast.condition.text} style={{height: '40px', width: '40px', margin: 'auto'}} />
        <Typography><i className="material-icons">cloud</i>{props.forecast.cloud}</Typography>
        <Typography><i className="material-icons text-info">air</i>{props.forecast.wind_kph} km/h</Typography>
        <Typography><i className="material-icons">UV</i>{props.forecast.uv}</Typography>
        <Typography><i className="material-icons">visibility</i>{props.forecast.vis_km} km</Typography>
        <Typography><i className="material-icons">thermostat</i>{props.forecast.temp_c} °C</Typography>
        <Typography><i className="material-icons text-info">opacity</i>{props.forecast.precip_mm} mm</Typography>
        </Paper>
    );
}