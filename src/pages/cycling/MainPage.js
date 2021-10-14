import React, {lazy} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
const AppInDevices = lazy(() => import('../../components/AppInDevices'))
const MainImageOfPage = lazy(() => import('../../components/MainImageOfPage'))
const Sections = lazy(() => import('../../components/Sections'))

export default function MainPage(){
    const sections = [{img: '/images/forest.jpg', title: 'E-shop', link: './Nature'},
    {img: '/images/bike-repair.jpg', title: 'Fórum', link: './Forum'},
    {img: '/images/googleMapsImg.jpg', title: 'Mapa', link: '../Map.js'},
    {img: '/images/slDom.jpg', title: 'Články', link: './Articles'},
    {img: '/images/forest.jpg', title: 'Príroda', link: './Nature'},
    {img: '', title: 'Pomocník', link: './BikeHelper'}]

    return(<Box className="w-100 text-center">
        <MainImageOfPage img="/images/cyclingMain.jpg" text="" />
        <AppInDevices />
        <Typography variant="h2" color="white" className="my-5">Prečo pathfinder</Typography>
        {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} link={section.link}/>)}
    </Box>)
}