import React, {lazy, useState} from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
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
        <Button variant="outlined" color="secondary" className="mt-5 p-4" onClick={() => openDownload(!download)}>stiahnuť pathfinder <i className="material-icons mx-1">download</i></Button>
        {download && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-white container">
                    <CardActions>
                        <Button variant="outlined" color="secondary" style={{'top': -30, 'right': 0, 'position': 'relative', 'float': 'right'}} onClick={() => openDownload(!download)}>x</Button>
                    </CardActions>
                    <CardContent>
                    </CardContent>
                </Card>
            </Container>
            </Box>}
    </Box>)
}