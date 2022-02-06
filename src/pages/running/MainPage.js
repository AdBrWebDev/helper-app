import React, {lazy} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import {motion} from 'framer-motion'
const AppInDevices = lazy(() => import('../../components/AppInDevices'))
const Sections = lazy(() => import('../../components/Sections'))

export default function MainPage(){
    const sections = [{img: 'gps.png', title: 'E-shop', text: "Chceš sa k nám pridať"},
    {img: 'runningForum.jpg', title: 'Fórum', text: "Potrebuješ pomôcť?"},
    {img: 'maps.png', title: 'Mapa', text: "So mnou sa nestratíš"},
    {img: 'runningArticles.jpg', title: 'Články',  text: "Spoznávaj nové miesta"},
    {img: 'forest.jpg', title: 'Príroda', text: "Pomôž zachrániť prírodu"},
    {img: 'runningMain.jpg', title: 'Pathfinder plus', text:"Tu najdeš pomoc pri tvojich problémoch"}]

    return(<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}><Box className="w-100 text-center">
        <Grid container className="mt-5">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img style={{'height': '500px', 'transformOrigin': ' bottom', 'transform': 'skewY(-3deg)'}} src="images/runningMain.jpg" alt="" />
            </Grid>
            <Grid className="my-auto text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h3" className="text-white">Vitaj! Chceš vedieť čo tu nájdeš?</Typography>
            </Grid>
        </Grid>
        <AppInDevices />
        <LinearProgress className="container bg-transparent" />
        <Typography variant="h2" color="white" className="my-5 pt-5">Prečo pathfinder</Typography>
        {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} text={section.text}/>)}
    </Box></motion.div>)
}