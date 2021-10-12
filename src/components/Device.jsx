import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'

export default function Device(props){
    const [device, openDevice] = useState(false)

    return(
        <Grid item className="py-4" index={props.index} onClick={() => openDevice(!device)} xs={12} sm={6} md={6} lg={3} xl={3} style={{"cursor": "pointer"}}>
            <i id="devices" className="material-icons my-5">{props.icon}</i>
            <Typography>{props.text}</Typography>
            {device && <Box id="dark-background">
                <Container>
                    <Card className="bg-dark p-5 rounded text-white container border border-info">
                        <CardActions>
                            <Button variant="outlined" color="primary">x</Button>
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
                                        {/*(props.terms).map((term, index) => <TableRow index={index}>
                                            <TableCell>{term[0]}</TableCell>
    </TableRow>)*/}
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