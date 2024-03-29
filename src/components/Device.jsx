import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import Modal from '@mui/material/Modal'
import {TimelineMax} from 'gsap'
import {motion} from 'framer-motion'
let tl = new TimelineMax()
export default function Device(props){
    const [device, openDevice] = useState(false)
    let importantText = ['Operačný systém', 'Verzie', 'Operačná pamäť (GB)', 'Veľkosť uložiska (GB)','Počet jadier procesora', 'Veľkosť displeja'];
    let importantParts = ['os', 'minVersion','ram','memory', 'cpu', 'minDisplaySize'];

    return(
        <Grid data-aos="fade-up" data-aos-offset="250" data-aos-duration="600" data-aos-delay={150*props.index} item className="py-5 my-5" key={props.index} onClick={() => {openDevice(!device); tl.fromTo("#card", {y: 200}, {y:0, duration: 2})}} xs={12} sm={6} md={6} lg={3} xl={3} style={{"cursor": "pointer"}}>
            <i id="devices" className="material-icons my-5">{props.icon}</i>
            <Typography>{props.text}</Typography>
            <Modal open={device} onClose={() => openDevice(false)}>
            <motion.div initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Card className="p-5 rounded text-center text-white container border border-dark" style={{'marginTop': '5%'}} id="card">
                        <CardContent>
                            <i id="devices" className="material-icons my-4">{props.icon}</i>
                            <Typography variant="h5" className="mt-2">{props.text}</Typography>
                            <TableContainer component={Paper} style={{'backgroundColor': 'transparent'}}>
                                <Typography variant="h4" className="text-white my-3 mt-4">Minimálne hardvérové požiadavky</Typography>
                                <Table className="text-white table table-striped bg-transparent table-bordered">
                                    <TableBody>
                                        {(props.terms).map((term, index) => <TableRow key={index}>
                                            <TableCell className="text-white py-4">{importantText[index]}</TableCell>
                                            <TableCell className="text-white py-4">{term[importantParts[index]]}</TableCell>
                                        </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card></motion.div>
                    </Modal>
        </Grid>
    )
}