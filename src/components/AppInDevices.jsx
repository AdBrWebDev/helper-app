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
        {icon: 'smartphone', typography: 'smartphone', os: 'Android', terms: []},
        {icon: 'laptop', typography: 'PC', os: 'Windows', terms: []},
        {icon: 'tv', typography: 'android-tv', os: 'Android-tv', terms: [{'Operačný systém': 'android'}]},
        {icon: 'watch', typography: 'smartwatch', os: 'Wear OS', terms: []}
    ]

    return(<Box style={{"minHeight": 400}} className="container my-4 mt-5 mb-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5">Pathfinder už čoskoro aj v</Typography>
        <Grid container className="mb-5">
            {devices.map((device, index) => <Device terms={device.terms} index={index} os={device.os} icon={device.icon} text={device.typography}/>)}
        </Grid>
        <Button variant="outlined" color="info" className="mt-5 p-4" onClick={() => openDownload(!download)}>stiahnuť pathfinder <i className="material-icons mx-1">download</i></Button>
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