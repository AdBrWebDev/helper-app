import React, {lazy} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import {motion} from 'framer-motion'
import Grid from '@mui/material/Grid'
const AppInDevices = lazy(() => import('../../components/AppInDevices'))
const Sections = lazy(() => import('../../components/Sections'))

export default function MainPage(){
    const sections = [{img: 'gps.png', title: 'E-shop', link: '../Eshop.js', text: "Chceš sa k nám pridať?"},
    {img: 'forum-img.jpg', title: 'Fórum', link: './Forum', text: "Potrebuješ pomôcť?"},
    {img: 'maps.png', title: 'Mapa', link: '../Map.js', text: "So mnou sa nestratíš"},
    {img: 'articles-img.jpg', title: 'Články', link: './Articles', text: "Spoznávaj nové miesta"},
    {img: 'forest.jpg', title: 'Príroda', link: './Nature', text: "Pomôž zachrániť prírodu"},
    {img: 'cyclingMain.jpg', title: 'Pathfinder plus', link: './BikeHelper', text:"Tu najdeš pomoc pri tvojich problémoch"}]

    return(<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}><Box className="w-100 text-center">
        <Grid container className="mt-5">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img style={{'height': '500px', 'transformOrigin': ' bottom', 'transform': 'skewY(-3deg)'}} src="images/cyclingMain.jpg" alt="" />
            </Grid>
            <Grid className="my-auto text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h3" className="text-white">Radi ta tu opäť vidíme</Typography>
            </Grid>
        </Grid>
        <AppInDevices />
        <LinearProgress className="container bg-transparent" />
        <Typography variant="h2" color="white" className="my-5 pt-5" data-aos="flip-up" data-aos-offset="150">Prečo pathfinder</Typography>
        {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} link={section.link} text={section.text}/>)}
    </Box></motion.div>)
}