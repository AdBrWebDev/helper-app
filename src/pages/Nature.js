import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
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