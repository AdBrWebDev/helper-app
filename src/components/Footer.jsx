import React, {lazy} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../App.css';
import LinearProgress from '@mui/material/LinearProgress'
import Divider from '@mui/material/Divider';
const Sponsors = lazy(() => import('./Sponsors')) 

export default function Footer(){
    let status;
    window.addEventListener('offline', () => CheckStatus())
    window.addEventListener('online', () => CheckStatus())
    function CheckStatus(){
        if(navigator.onLine){
            status = <Box className='py-1 notification is-success'><i className="material-icons my-auto mx-1">wifi</i>online</Box>;
        }else{
            status = <Box className='py-1 notification is-danger'><i className="material-icons my-auto">wifi_off</i>offline</Box>;
        }
        return status;
    }

    return(
        <Box className="bg-dark" style={{'bottom': 0}}>
            <LinearProgress className="container bg-transparent" data-aos="zoom-in" />
            <Box className="container my-5" data-aos="fade-up">
            <article class="message is-info">
                <Box class="message-body">
                    <Typography><strong>Pathfinder bude dostupný v týchto krajinách:</strong> Slovensko, Bulharsko, Česká republika, Dánsko, Maďarsko, Grécko, Fínsko, Francúzsko, Taliansko, Chorvátsko, Nemecko, Poľsko, Holandsko, Slovinsko, Španielsko, Rakúsko</Typography>
                </Box>
            </article>
            </Box>
            <Typography data-aos="fade-up" data-aos-offset="50" className="text-white text-center my-5" variant="h2">Súťaž s nami</Typography>
            <Grid container className="my-5" spacing={2}>
                <Grid data-aos="fade-up" data-aos-offset="100" className="text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <a target="_blank" rel="noreferrer" href="https://www.strava.com/"><Button variant="contained" className="p-4 px-5" style={{'backgroundColor': '#FFDEAD'}}><img style={{'maxHeight': '80px'}} src="sponsors/strava.png" alt="strava" /></Button></a>
                </Grid>
                <Grid data-aos="fade-up" data-aos-offset="200" className="text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <a target="_blank" rel="noreferrer" href="https://www.mtbiker.sk/kalendar"><Button variant="contained" className="p-4" style={{'backgroundColor': '#000000'}}><img style={{'maxHeight': '80px'}} src="sponsors/mtbiker.png" alt="strava" /></Button></a>
                </Grid>
            </Grid>
            <Typography data-aos="fade-up" className="text-center text-white mt-5 pt-5">{CheckStatus()}</Typography>
            <Typography data-aos="fade-up" variant="h2" className="text-center text-white mt-5 mb-3">Partneri</Typography>
            <Sponsors />
            <Divider data-aos="fade-up" className="w-75 mx-auto my-2 mt-5" />
            <Box className="p-5">
            <Grid container className="container py-5">
                    <Grid container className="text-center">
                        <Grid data-aos="fade-right" item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Typography className="text-white mb-3" variant="h4">Sleduj nás na</Typography>
                            <Button id="footer-icons" variant="outlined" className="text-info"><i className="material-icons">facebook</i></Button>
                        </Grid>
                        <Grid data-aos="fade-left" item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Typography className="text-white mb-3" variant="h4">Appka aj v mobile</Typography>
                            <Button title="stiahnuť" id="footer-icons" variant="outlined" className="text-white my-auto" disabled={true}><i className="material-icons">shop</i></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}