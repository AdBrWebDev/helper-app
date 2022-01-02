import React, {lazy} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
const AppInDevices = lazy(() => import('../../components/AppInDevices'))
const MainImageOfPage = lazy(() => import('../../components/MainImageOfPage'))
const Sections = lazy(() => import('../../components/Sections'))

export default function MainPage(){
    const sections = [{img: 'gps-tracker.png', title: 'E-shop', text: "Chceš sa k nám pridať"},
    {img: 'forumHiking.jpg', title: 'Fórum', text: "Potrebuješ pomôcť?"},
    {img: 'maps.png', title: 'Mapa', text: "So mnou sa nestratíš"},
    {img: 'hikingArticles.jpg', title: 'Články', text: "Spoznávaj nové miesta"},
    {img: 'forest.jpg', title: 'Príroda', text: "Pomôž zachrániť prírodu"},
    {img: 'natureMain.jpg', title: 'Pomocník', text:""}]

    return(<Box className="w-100 text-center">
        <MainImageOfPage img="natureMain.jpg" text="Vitaj! Chceš vedieť čo tu nájdeš?" href="" />
        <AppInDevices />
        <LinearProgress className="container bg-transparent" />
        <Typography variant="h2" color="white" className="my-5 pt-5">Prečo pathfinder</Typography>
        {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} text={section.text}/>)}
    </Box>)
}