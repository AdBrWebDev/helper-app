import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid'
import '../App.css';
import React, {useState} from 'react';
import ForecastCard from '../components/ForecastCard';

export default function Weather(){
    const [weather, openWeather] = useState(false);
    const [town, setTown] = useState('');
    const [curWeather, setCurrentWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState([]);
    const [condition, setCondition] = useState([]);

    function searchWeather(){
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${town}&days=3`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "759d3832c5msh709ed715aa8fe85p19ce62jsn5a971bf5878d",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
    })
    .then(res => res.json())
    .then(data => {
	    console.log(data);
        setCurrentWeather(data.current);
        setForecast(data.forecast.forecastday);
        setLocation(data.location);
        setCondition(data.current.condition);
    })
    }
    return(
        <>
        <Button variant="contained" className="btn-floating pulse cyan" onClick={() => openWeather(!weather)} style={{bottom: 30, right: 30, position: 'fixed'}}><i className="material-icons">wb_sunny</i></Button>
      {(weather) ? 
        (<Box id="dark-layer">
            <Container className="bg-dark text-white mt-5 p-5 shadow-lg rounded" style={{height: '90%', overflow: 'auto'}}>
            <Button variant="contained" color="secondary" onClick={()=> openWeather(!weather)} style={{position: 'relative', float: 'right' ,top: -30, right: -30}}>x</Button>
                <Box noValidate autoComplete="off" className="p-5 mt-5 text-center" >
                    <InputBase className="mx-3 text-center text-white" value={town} onChange={(e) => setTown(e.target.value)} />
                    <Button disabled={town.length === 0} onClick={() => searchWeather()} variant="contained" color="secondary"><i className="material-icons" on>search</i></Button>
                </Box>
                {(town) ?
                (<Box className="text-center">
                    <Typography variant="h2">{town}</Typography>
                    <img src={condition.icon} className="my-4" style={{transform: "scale(1.8)"}} alt={condition.text} />
                    <Typography>{condition.text}</Typography>
                    <Typography variant="h2">{curWeather.temp_c} °C</Typography>
                    <Grid container className="text-left">
                        <Grid item xs={6}>
                            <Typography><i className="material-icons mx-2">cloud</i>{curWeather.cloud} %</Typography>
                            <Typography><i className="material-icons mx-2">visibility</i>{curWeather.vis_km} km</Typography>
                            <Typography><i className="material-icons mx-2">UV</i>{curWeather.uv}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography><i className="material-icons mx-2">water_drop</i>{curWeather.precip_mm} mm</Typography>
                            <Typography><i className="material-icons mx-2">public</i>{curWeather.pressure_mb} kPa</Typography>
                            <Typography><i className="material-icons mx-2">air</i>{curWeather.wind_kph} km/h</Typography>
                        </Grid>
                    </Grid>
                    <Box className="mx-auto mt-3">
                    <Typography variant="h3">3-dňová predpoveď</Typography>
                        <Grid container>
                        {forecast.map((forecast) => <ForecastCard forecast={forecast} />)}
                        </Grid>
                    </Box>
                    <Typography className="pt-2">GPS: {location.lat}, {location.lon}</Typography>
                </Box>) : null}
            </Container>
        </Box>) : null}
        </>
    )
}