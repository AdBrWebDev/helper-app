import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import '../../App.css'
import Health from '../Health'
import BikeRepair from '../../components/BikeRepair'

export default function BikeHelper(){
    const [openHelp, bikeHelp] = useState(false)

    return(<Box className="text-center align-middle">
        <Grid container>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '770px'}}>
                <Health />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '770px'}}>
                <Button id="card" className="align-middle position-relative" variant="outlined" onClick={() => openHelp(!bikeHelp)} color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
                    <i className="material-icons text-info">pedal_bike</i>
                </Button>
            </Grid>
        </Grid>
        {bikeHelp && <BikeRepair />}
    </Box>)
}