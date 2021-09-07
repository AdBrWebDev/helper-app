import React, {lazy} from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import '../App.css'
const Device = lazy(() => import('./Device'))

export default function AppInDevices(){

    const devices = [
        {icon: 'smartphone', typography: 'smartphone', terms: []},
        {icon: 'laptop', typography: 'PC', terms: []},
        {icon: 'tv', typography: 'android-tv', terms: [{'Operačný systém': 'android'}]},
        {icon: 'watch', typography: 'smartwatch', terms: []}
    ]

    return(<Box style={{"minHeight": 400}} className="container my-4 mt-5 mb-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5"><strong>Pathfinder</strong> už čoskoro aj v</Typography>
        <Grid container>
            {devices.map((device, index) => <Device terms={device.terms} index={index} icon={device.icon} text={device.typography}/>)}
        </Grid>
    </Box>)
}