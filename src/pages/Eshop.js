import React, {lazy} from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import '../App.css'
const ProductCard = lazy(() => import('../components/ProductCard'))

const GPS = [
    {img: '/images/GPS.jpg', title: 'GPS pathfinder 500', price: 50}
]

const clothes = [
    {img: '/images/jacket.jpg', title: 'Jacket pathfinder', price: 40}
]

export default function Eshop(){
    return(<Box className="text-white container p-5 my-5">
        <Box className="message is-info">
            <Typography className="message-body">Začiatok predaja 22.11.2022</Typography>
        </Box>
        <Container>
        <Typography variant="h3" className="my-4">GPS locatory</Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={3} xl={3} md={4}>
                {GPS.map((gps, index) => <ProductCard index={index} img={gps.img} title={gps.title} price={gps.price} />)}
            </Grid>
        </Grid>
        <Typography variant="h3" className="my-4">Oblečenie a doplnky </Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={3} xl={3} md={4}>
                {clothes.map((clothes, index) => <ProductCard index={index} img={clothes.img} title={clothes.title} price={clothes.price} />)}
            </Grid>
        </Grid>
        </Container>
    </Box>)
}