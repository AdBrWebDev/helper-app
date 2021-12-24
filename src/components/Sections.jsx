import React, {useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {gsap, TimelineLite, Power3} from 'gsap';

export default function Sections(props){

    let tl = new TimelineLite();

    useEffect(() => {
        tl.from('imgSrc', {y: 200, opacity: 0, ease: Power3.zoomIn, delay: .5});
    })

    return(<Grid className="my-5 py-2" container key={props.index}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                {props.index % 2 === 0 ? <img src={`/images/${props.img}`} alt={props.title} style={{'maxHeight': 500}} /> : <Box className="p-5 aling-middle">
                    <Typography variant="h3" className="mt-5 pt-5 text-white">{props.title}</Typography>
                    <Typography variant="h5" className="pt-4 text-white w-75 mx-auto">{props.text}</Typography>
                    </Box>}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                {props.index % 2 === 1 ? <img src={`/images/${props.img}`} alt={props.title} style={{'maxHeight': 500}} /> : <Box className="p-5 aling-middle">
                    <Typography variant="h3" className="mt-5 pt-5 text-white">{props.title}</Typography>
                    <Typography variant="h5" className="pt-4 text-white w-75 mx-auto">{props.text}</Typography>
                    </Box>}
            </Grid>
        </Grid>)
}