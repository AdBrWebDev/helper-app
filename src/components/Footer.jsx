import React, {lazy} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../App.css';
import Avatar from '@mui/material/Avatar'
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
            <Typography className="text-center text-white">{CheckStatus()}</Typography>
            <Sponsors />
            <Box className="p-5">
            <Grid container className="container py-5">
                <Grid item className=" my-4 text-center container" xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box className="d-flex container">
                    <Avatar src="/images/strava.svg" style={{"marginRight": "20px"}} />
                    <Avatar src="/images/xiaomi.png" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Grid container className="text-center">
                        <Grid item xs={6}>
                            <Typography className="text-white mb-3" variant="h4">Sleduj nás na</Typography>
                            <Button id="footer-icons" variant="outlined" className="text-info"><i className="material-icons">facebook</i></Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="text-white mb-3" variant="h4">Appka aj v mobile</Typography>
                            <Button title="stiahnuť" id="footer-icons" variant="outlined" className="text-white my-auto" disabled="true"><i className="material-icons">shop</i></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}