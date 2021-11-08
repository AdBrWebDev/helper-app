import React, {lazy, useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import '../App.css'
const Device = lazy(() => import('./Device'))

export default function AppInDevices(){
    const [download, openDownload] = useState(false)

    const devices = [
        {icon: 'smartphone', typography: 'smartphone', terms: [{os: 'Android'}, {minVersion: '8.0 Oreo'}, {ram: 2}, {memory: 32}, {cpu: 1}, {minDisplaySize: '5'}, {gps: true}, {bluetooth: true}]},
        {icon: 'laptop', typography: 'PC', terms: [{os: 'Windows'}, {minVersion: '7 a vyššie'}, {ram: 4}, {memory: 120}, {cpu: 1}]},
        {icon: 'tv', typography: 'android-tv', os: 'Android-tv', terms: [{'Operačný systém': 'android'}, {}]},
        {icon: 'watch', typography: 'smartwatch', os: 'Wear OS', terms: [{'': ''}]}
    ]

    return(<Box style={{"minHeight": 400}} className="container mt-5 mb-5 py-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5">Pathfinder už čoskoro aj v</Typography>
        <Grid container className="mb-5">
            {devices.map((device, index) => <Device terms={device.terms} index={index} icon={device.icon} text={device.typography}/>)}
        </Grid>
        <Button variant="outlined" color="info" className="my-5 p-4" onClick={() => openDownload(!download)}>stiahnuť pathfinder <i className="material-icons mx-1">download</i></Button>
        {download && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-white container border border-info">
                    <CardActions>
                        <Button variant="outlined" color="error" style={{'top': -30, 'right': 0, 'position': 'relative', 'float': 'right'}} onClick={() => openDownload(!download)}>x</Button>
                    </CardActions>
                    <CardContent>
                    </CardContent>
                </Card>
            </Container>
            </Box>}
    </Box>)
}