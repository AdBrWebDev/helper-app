import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'

export default function Device(props){
    const [device, openDevice] = useState(false)

    return(
        <Grid item index={props.index} onClick={() => openDevice(!device)} xs={12} sm={6} md={6} lg={3} xl={3} style={{"cursor": "pointer"}}>
            <i id="devices" className="material-icons my-5">{props.icon}</i>
            <Typography>{props.text}</Typography>
            {device && <Box id="dark-background">
                <Container>
                    <Card className="bg-dark p-5 rounded text-white container">
                        <CardActions>
                            <Button variant="outlined" color="secondary" style={{'top': -30, 'right': 0, 'position': 'relative', 'float': 'right'}}>x</Button>
                        </CardActions>
                        <CardContent>
                            <i id="devices" className="material-icons my-4">{props.icon}</i>
                            <Typography variant="h5">{props.text}</Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>Minimálne hardvérové požiadavky</TableRow>
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
        </Grid>
    )
}