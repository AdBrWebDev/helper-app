import React, {lazy} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
const AppInDevices = lazy(() => import('../../components/AppInDevices'))
const MainImageOfPage = lazy(() => import('../../components/MainImageOfPage'))
const Sections = lazy(() => import('../../components/Sections'))
const Sponsors = lazy(() => import('../../components/Sponsors'))

export default function MainPage(){
    const sections = [{img: 'maps.png', title: 'E-shop', link: './Nature', text: "Chceš sa k nám pridať"},
    {img: 'forum-img.jpg', title: 'Fórum', link: './Forum', text: "Potrebuješ pomôcť?"},
    {img: 'maps.png', title: 'Mapa', link: '../Map.js', text: "So mnou sa nestratíš"},
    {img: 'slDom.jpg', title: 'Články', link: './Articles', text: "Spoznávaj nové miesta"},
    {img: 'forest.jpg', title: 'Príroda', link: './Nature', text: "Pomôž zachrániť prírodu"},
    {img: 'pathfinder.jpg', title: 'Pomocník', link: './BikeHelper', text:""}]

    return(<Box className="w-100 text-center">
        <MainImageOfPage img="cyclingMain.jpg" text="Vitaj! Chceš vedieť čo tu nájdeš?" href="" />
        <AppInDevices />
        <LinearProgress className="container bg-transparent" />
        <Typography variant="h2" color="white" className="my-5 pt-5">Prečo pathfinder</Typography>
        {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} link={section.link} text={section.text}/>)}
        <Sponsors />
    </Box>)
}