import React, {lazy, useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent'
import '../App.css'
const Device = lazy(() => import('./Device'))

export default function AppInDevices(){
    const [download, openDownload] = useState(false)
    let date = new Date('September 25 2022 00:00:00');

    const devices = [
        {icon: 'smartphone', typography: 'smartphone', terms: [{os: 'Android'}, {minVersion: '8.0'}, {ram: 2}, {memory: 32}, {cpu: 2}, {minDisplaySize: '5'}]},
        {icon: 'laptop', typography: 'PC', terms: [{os: 'Windows'}, {minVersion: 'Windows 10'}, {ram: 4}, {memory: 120}, {cpu: 2}]},
        {icon: 'tv', typography: 'android-tv', terms: [{os: 'Android'}]},
        {icon: 'watch', typography: 'smartwatch', terms: [{os: 'Wear OS'}]}
    ]

    return(<Box style={{"minHeight": 400}} className="container mt-5 mb-5 py-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5">Pathfinder už čoskoro aj v</Typography>
        <Grid container className="mb-5">
            {devices.map((device, index) => <Device terms={device.terms} index={index} icon={device.icon} text={device.typography}/>)}
        </Grid>
        <Button variant="outlined" color="info" className="my-5 p-4" onClick={() => openDownload(!download)}>stiahnuť pathfinder <i className="material-icons mx-1">download</i></Button>
        {download && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-center text-white container border border-info">
                        <Box><Button variant="outlined" color="error" onClick={() => openDownload(!download)}>x</Button></Box>
                    <CardContent>
                    <Box className="message is-info">
                        <Typography className="message-body">Aplikacie budú dostupné od: 11.11.2022</Typography>
                    </Box>
                        <Grid container>
                            <Grid className="my-4" item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <Box>
                                <i className="material-icons py-5" id="devices">smartphone</i>
                                </Box>
                                <Button color="info" variant="outlined" className="mt-3">Stiahnuť Pathfinder</Button>
                            </Grid>
                            <Grid className="my-4" item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <Box>
                                <i className="material-icons py-5" id="devices">laptop</i>
                                </Box>
                                <Button color="info" variant="outlined" className="mt-3">Stiahnuť Pathfinder</Button>
                            </Grid>
                            <Grid className="my-4" item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <Box>
                                <i className="material-icons py-5" id="devices">tv</i>
                                </Box>
                                <Button color="info" variant="outlined" className="mt-3">Stiahnuť Pathfinder</Button>
                            </Grid>
                            <Grid className="my-4" item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <Box>
                                <i className="material-icons py-5" id="devices">watch</i>
                                </Box>
                                <Button color="info" variant="outlined" className="mt-3">Stiahnuť Pathfinder</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
            </Box>}
    </Box>)
}