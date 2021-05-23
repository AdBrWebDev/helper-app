import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import '../App.css';
import React, {useState} from 'react';

export default function Weather(){
    const [weather, openWeather] = useState(false);
    const [town, setTown] = useState('');

    function searchWeather(){
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${town}&days=3`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "759d3832c5msh709ed715aa8fe85p19ce62jsn5a971bf5878d",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
    })
    .then(res => res.json())
    .then(response => {
	    console.log(response);
    })
    }
    return(
        <>
        <Button variant="contained" className="btn-floating pulse cyan" onClick={() => openWeather(!weather)} style={{bottom: 30, right: 30, position: 'absolute'}}><i className="material-icons">wb_sunny</i></Button>
      {(weather) ? 
        (<Box id="dark-layer">
            <Container className="bg-white mt-5 p-5 shadow-lg rounded" style={{height: '90%'}}>
            <Button variant="contained" color="secondary" onClick={()=> openWeather(!weather)} style={{position: 'relative', float: 'right' ,top: -30, right: -30}}>x</Button>
                <Box noValidate autoComplete="off" className="p-5 mt-5 text-center" >
                    <InputBase value={town} onChange={(e) => setTown(e.target.value)} />
                    <Button disabled={town.length === 0} onClick={() => searchWeather()} variant="contained" color="secondary"><i className="material-icons" on>search</i></Button>
                </Box>
                <Box>
                
                </Box>
            </Container>
        </Box>) : null}
        </>
    )
}