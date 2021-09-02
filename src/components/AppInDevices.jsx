import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import '../App.css'

export default function AppInDevices(){
    const [smartphone, openSmartphone] = useState(false)
    const [laptop, openLaptop] = useState(false)
    const [watch, openWatch] = useState(false)

    const PhoneHardware = [
        {part: 'Operačný systém', content: 'android 8.0'},
        {part: 'Operačná pamäť (RAM)', content: '2 GB'},
        {part: 'Uložný priestor', content: '10 GB'}
    ]

    const PCHardware = []

    const SmartWatchHardware = []

    return(<Box style={{"minHeight": 400}} className="container my-4 mt-5 mb-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5"><strong>Pathfinder</strong> už čoskoro aj v</Typography>
        <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} onClick={() => openSmartphone(!smartphone)} style={{"cursor": "pointer"}}>
                <i id="devices" className="material-icons my-5">smartphone</i>
                <Typography>smartphone</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} onClick={() => openLaptop(!laptop)} style={{"cursor": "pointer"}}>
                <i id="devices" className="material-icons my-5">laptop</i>
                <Typography>PC</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <i id="devices" className="material-icons my-5">tv</i>
                <Typography>android-tv</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} onClick={() => openWatch(!watch)} style={{"cursor": "pointer"}}>
                <i id="devices" className="material-icons my-5">watch</i>
                <Typography>smartwatch</Typography>
            </Grid>
        </Grid> 
        {smartphone && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-white container">
                    <CardActions>
                    <Button onClick={() => openSmartphone(!smartphone)} variant="outlined" color="secondary" style={{'top': -30, 'right': 0, 'position': 'relative', 'float': 'right'}}>x</Button>
                    </CardActions>
                    <CardContent>
                    <i id="devices" className="material-icons my-4">smartphone</i>
                    <Typography variant="h5">Smartphone</Typography>
                    <Typography variant="h6" className="my-2">Minimálne hardvérové požiadavky</Typography>
                    <Box>
                        <Typography>Operačný systém: android 8.0</Typography>
                        <Typography>Operačná pamäť (RAM): 2 BG</Typography>
                        <Typography>Uložný priestor: 10 GB</Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableRow>Minimálne hardvérové požiadavky</TableRow>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </CardContent>
                </Card>    
            </Container>    
        </Box>}
        {laptop && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-white container">
                    <Button onClick={() => openLaptop(!laptop)} variant="outlined" color="secondary" style={{'top': -30, 'left': 20, 'position': 'relative', 'float': 'right'}}>x</Button>
                    <i id="devices" className="material-icons my-5">laptop</i>
                    <Typography variant="h5">PC</Typography>
                    <Typography variant="h6" className="my-2">Minimálne hardvérové požiadavky</Typography>
                    <Box>
                        <Typography>Operačný systém: android 8.0 a vyššie</Typography>
                        <Typography>Operačná pamäť (RAM): 2 BG a viac</Typography>
                        <Typography>Uložný priestor: 32 GB</Typography>
                    </Box>
                </Card>    
            </Container>    
        </Box>}
        {watch && <Box id="dark-background">
            <Container>
                <Card className="bg-dark p-5 rounded text-white container">
                    <Button onClick={() => openWatch(!watch)} variant="outlined" color="secondary" style={{'top': -30, 'left': 20, 'position': 'relative', 'float': 'right'}}>x</Button>
                    <i id="devices" className="material-icons my-5">watch</i>
                    <Typography variant="h5">smartwatch</Typography>
                    <Typography variant="h6" className="my-2">Minimálne hardvérové požiadavky</Typography>
                    <Box>
                        <Typography>Operačný systém: android 8.0 a vyššie</Typography>
                        <Typography>operačná pamäť (RAM): 2 BG a viac</Typography>
                        <Typography>Uložný priestor: 150 MB</Typography>
                    </Box>
                </Card>    
            </Container>    
        </Box>}
    </Box>)
}