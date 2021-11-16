import React, {lazy} from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import '../App.css'
const ProductCard = lazy(() => import('../components/ProductCard'))

const GPS = [
    {img: 'gps-tracker.png', title: 'GPS pathfinder 500', price: 50},
    {img: 'gps-tracker.png', title: 'GPS pathfinder 500', price: 80}
]

const clothes = [
    {img: 'jacket.png', title: 'Jacket pathfinder', price: 40},
    {img: 'jacket.png', title: 'Jacket pathfinder', price: 10},
    {img: 'jacket.png', title: 'Jacket pathfinder', price: 20}
]

export default function Eshop(){
    return(<Box className="text-white p-5 my-5">
        <Box className="container">
        <Box className="message is-info">
            <Typography className="message-body">Začiatok predaja 22.11.2022</Typography>
        </Box>
        <Container>
        <Typography variant="h3" className="my-4 mt-5">GPS locatory</Typography>
        <Grid container spacing={1}>
                {GPS.map((gps, index) => <ProductCard index={index} img={gps.img} title={gps.title} price={gps.price} />)}
        </Grid>
        <Typography variant="h3" className="my-4 mt-5">Oblečenie  a doplnky </Typography>
        <Grid container spacing={1}>
                {clothes.map((clothes, index) => <ProductCard index={index} img={clothes.img} title={clothes.title} price={clothes.price} />)}
        </Grid>
        </Container>
        </Box>
    </Box>)
}