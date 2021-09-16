import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import '../../App.css'
import Health from '../Health'
import BikeRepair from '../../components/BikeRepair'

export default function BikeHelper(){
    const [openHelp, bikeHelp] = useState(false)
    const [openHealth, health] = useState(false)

    return(<Box className="text-center align-middle" style={{'minHeight': '650px'}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Button className="align-middle position-relative" onClick={() => openHealth(!health)} variant="contained" color="secondary" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
                    <i className="material-icons text-white">health_and_safety</i>
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Button className="align-middle position-relative" variant="contained" onClick={() => openHelp(!bikeHelp)} color="secondary" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
                    <i className="material-icons text-white">pedal_bike</i>
                </Button>
            </Grid>
        </Grid>
        {health && <Health />}
        {bikeHelp && <BikeRepair />}
    </Box>)
}