import React, {lazy} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../App.css';
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
            <Typography data-aos="fade-up" className="text-center text-white">{CheckStatus()}</Typography>
            <Typography data-aos="fade-up" variant="h2" className="text-center text-white mt-5 mb-3">Partneri</Typography>
            <Sponsors />
            <Divider data-aos="fade-up" className="w-75 mx-auto my-2 mt-5" />
            <Box data-aos="fade-up" className="p-5">
            <Grid container className="container py-5">
                    <Grid container className="text-center">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Typography className="text-white mb-3" variant="h4">Sleduj nás na</Typography>
                            <Button id="footer-icons" variant="outlined" className="text-info"><i className="material-icons">facebook</i></Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Typography className="text-white mb-3" variant="h4">Appka aj v mobile</Typography>
                            <Button title="stiahnuť" id="footer-icons" variant="outlined" className="text-white my-auto" disabled="true"><i className="material-icons">shop</i></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}