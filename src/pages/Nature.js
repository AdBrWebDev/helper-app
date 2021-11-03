import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {gsap, TimelineLite, Power3} from 'gsap';
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
//import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import '../App.css'


export default function Nature(){
    const [expand, setExpand] = useState('panel1');
    const [form, openForm] = useState(false);

    let tl = new TimelineLite();

    useEffect(() => {
        tl.from('img', {y: 200, opacity: 0, ease: Power3.zoomIn, delay: .5});
    })

    const changePanel = (panel) => (newExpand) => {
        setExpand(newExpand ? panel : false);
    }

    return(
        <Box className="text-white text-center">
            <Box>
                <img className='w-100' src='/images/forest.jpg' alt='forest' />
                <Typography style={{color: "white", position: 'absolute', top: "45%"}} className="text-center" variant="h1">Pomôž nám ochrániť prírodu</Typography>
            </Box>
            <Box className='level is-mobile mt-5 py-3'>
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Je nás už</Typography>
                         <Typography variant="h2" className="title text-white">50</Typography>
                     </Box>
                </Box>
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Chývajúce podpisy</Typography>
                         <Typography variant="h2" className="title text-white">799 950</Typography>
                     </Box>
                </Box>
            </Box>
            <Container>
                <Typography variant="h3">Aké sú naše ciele</Typography>
                <Card className="border border-success bg-transparent text-white my-5 p-5" id="nature-border">
                    <Typography variant="h6">36% zníženie tažby dreva</Typography>
                    <Typography variant="h6">Vysadenie 17 miliónov stromov ročne</Typography>
                    <Typography variant="h6">10% zníženie lovu zveri</Typography>
                    <Typography variant="h6">Viac ako 100 km nových cyklotrás každý rok</Typography>
                    <Typography variant="h6">Zvýšenie dotácii pre kupu elektromobilov</Typography>
                    <Typography variant="h6">10% zníženie ťažby nerastných surovín</Typography>
                    <Divider className="my-5" />
                    <Typography variant="h5">Chceš nám pomôcť? <Button onClick={() => openForm(!form)} className="ml-5"variant="outlined" color="success"><i className="material-icons">park</i></Button></Typography>
                    <Typography className="mt-4" style={{'opacity': .3, 'fontSize': '12px'}}>Platí pre územie slovenskej republiky</Typography>
                </Card>
            </Container>
            <Typography variant="h3" className="my-3">Chceš pomôcť viac?</Typography>
            <Container>
                {form && 
                <Box id="dark-background">
                <Card className="my-5 container p-5 bg-dark border border-success" id='nature-border'>
                <Button variant="outlined" color="error" style={{'top': -10, 'right': 0, 'position': 'relative', 'float': 'right'}} onClick={() => openForm(!form)}>x</Button>
                    <Box autoComplete="off" className="row container text-center p-5">
                        <input label="Meno" className="text-center" variant="standard" placeholder="Meno" />
                        <input label="Priezvisko" variant="standard" className="my-1" />
                        <input label="E-mail" variant="standard" className="my-1" />
                        <input label="Telefónne číslo" className="my-1" variant="standard" />
                        <Box><Button variant='contained' color='error' className="my-4">Odoslať</Button></Box>
                    </Box>
                </Card></Box>}
                <Container className="mb-3">
                <Accordion className="bg-dark border border-success text-white" id="nature-border" expanded={expand === 'panel1'} onChange={changePanel('panel1')}>
                    <AccordionSummary className="border border-bottom border-success" id="nature-border" aria-controls="panel1-control" id="panel1">
                        <Typography variant="h6">Bicykel namiesto auta</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>aklsdhfkajsh</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="bg-dark border border-success text-white" id="nature-border" expanded={expand === 'panel2'} onChange={changePanel('panel2')}>
                    <AccordionSummary className="border border-bottom border-success" id="nature-border" aria-controls="panel2-control" id="panel2">
                        <Typography variant="h6">Bicykel namiesto auta</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>aklsdhfkajsh</Typography>
                    </AccordionDetails>
                </Accordion>
                </Container>
            </Container>
        </Box>
    )
}