import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {gsap, TimelineLite, Power3} from 'gsap';
import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';

export default function Nature(){
    let tl = new TimelineLite();

    useEffect(() => {
        tl.from('img', {y: 200, opacity: 0, ease: Power3.zoomIn, delay: .5});
    })

    return(
        <Box>
            <Box>
                <img className='w-100' src='/images/forest.jpg' alt='forest' />
                <Typography style={{color: "white", position: 'absolute', top: "45%"}} className="text-center" variant="h1">Pomôž nám ochrániť prírodu</Typography>
            </Box>
            <Container>
                <Card className="my-5 container p-5 shadow-lg" id='forest-form'>
                    <form autoComplete="off" className="row container text-center px-5">
                        <TextField label="Meno" className="my-1" />
                        <TextField label="Priezvisko" className="my-1" />
                        <TextField label="E-mail" className="my-1" autoComplete="off" />
                        <TextField label="Telefónne číslo" className="my-1" />
                        <Box><Button variant='contained' color='error' className="my-4">Odoslať</Button></Box>
                    </form>
                </Card>
            </Container>
        </Box>
    )
}