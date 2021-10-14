import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {gsap, TimelineLite, Power3} from 'gsap';
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import '../App.css'


export default function Nature(){
    const [expand, setExpand] = useState('panel1');

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
            <Box className='level is-mobile mt-5'>
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
            <Typography variant="h3">Prečo sa k nam pridať</Typography>
            <Container>
                <Card className="border border-success bg-transparent text-white my-5 p-5" id="nature-border">
                    kaskdjfhaskjdh
                </Card>
            </Container>
            <Typography variant="h3">Tak čo, zaujali sme ťa?</Typography>
            <Typography variant="h3">Chceš pomôcť viac?</Typography>
            <Container>
                <Accordion expanded={expand === 'panel1'} onChange={changePanel('panel1')}>
                    <AccordionSummary aria-controls="panel1-control" id="panel1">
                        <Typography>Bicykel namiesto auta</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>aklsdhfkajsh</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expand === 'panel2'} onChange={changePanel('panel2')}>
                    <AccordionSummary aria-controls="panel2-control" id="panel2">
                        <Typography>Bicykel namiesto auta</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>aklsdhfkajsh</Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
            <Container>
                <Card className="my-5 container p-5 shadow-lg" id='forest-form'>
                    <Box autoComplete="off" className="row container text-center px-5">
                        <input label="Meno" className="text-center" variant="standard" placeholder="Meno" />
                        <input label="Priezvisko" variant="standard" className="my-1" />
                        <input label="E-mail" variant="standard" className="my-1" />
                        <input label="Telefónne číslo" className="my-1" variant="standard" />
                        <Box><Button variant='contained' color='error' className="my-4">Odoslať</Button></Box>
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}