import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid'
import '../App.css';
import React, {useState, lazy} from 'react';
import Modal from '@mui/material/Modal'
const ForecastCard = lazy(() => import('../components/ForecastCard'))
const WeatherCharts = lazy(() => import('../components/WeatherCharts'))

export default function Weather(){
    const [weather, openWeather] = useState(false);
    const [details, showDetails] = useState(false);
    const [town, setTown] = useState('');
    const [curWeather, setCurrentWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState([]);
    const [condition, setCondition] = useState([]);
    const [day24hours, set24Hours] = useState([]);

    async function searchWeather(){
       await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${town}&days=3`, {
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
        set24Hours(data.forecast.forecastday[0].hour)
    })
    showDetails(true)
    }

    console.log(day24hours)

    return(
        <>
        <Button variant="contained" className="btn-floating pulse btn-info btn-waves waves-light" onClick={() => openWeather(!weather)} style={{bottom: 30, right: 30, position: 'fixed'}}><i className="material-icons">wb_sunny</i></Button>
    <Modal open={weather} onClose={() => openWeather(false)}>
            <Container className="text-white mt-3 p-5 shadow-lg border border-dark border-2" id="card" style={{height: '90%', overflow: 'auto'}}>
            
                <Box noValidate autoComplete="off" className="p-5 mt-5 text-center" >
                    <InputBase className="mx-3 text-center text-white" value={town} onChange={(e) => setTown(e.target.value)} />
                    <Button disabled={town.length === 0} onClick={() => searchWeather()} variant="contained" color="info"><i className="material-icons">search</i></Button>
                </Box>
                {(details) ?
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
                            <Typography><i className="material-icons mx-2 text-info">water_drop</i>{curWeather.precip_mm} mm</Typography>
                            <Typography><i className="material-icons mx-2">public</i>{curWeather.pressure_mb} kPa</Typography>
                            <Typography><i className="material-icons mx-2 text-info">air</i>{curWeather.wind_kph} km/h</Typography>
                        </Grid>
                    </Grid>
                    <Box className="mx-auto mt-3">
                    <Typography variant="h3">3-dňová predpoveď</Typography>
                        <Grid container className="text-center">
                        {forecast.map((forecast) => <ForecastCard forecast={forecast} />)}
                        </Grid>
                    </Box>
                    <Box>
                        <WeatherCharts hours={day24hours} />
                    </Box>
                    <Typography className="pt-2">GPS: {location.lat}, {location.lon}</Typography>
                    <Typography className="pt-2">Naposledy aktualizované: {curWeather.last_updated}</Typography>
                    </Box>): null}
            </Container>
        </Modal>)
        </>
    )
}