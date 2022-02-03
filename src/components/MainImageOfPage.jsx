import React from 'react';
import LazyHero from 'react-lazy-hero'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function MainImageOfPage(props){
    return(<Box className="text-center">
        <LazyHero color="#111111" minHeight="90vh" opacity={0.5} parallaxOffset={150} style={{'height': '100%'}} imageSrc={`/images/${props.img}`}>
            <Box>
            <Typography color="white" variant="h2">{props.text}</Typography>
            </Box>
        </LazyHero>
        </Box>)
}