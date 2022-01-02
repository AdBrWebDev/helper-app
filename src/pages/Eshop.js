import React, {lazy, useState, useEffect} from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import '../App.css'
import Axios from 'axios'
const ProductCard = lazy(() => import('../components/ProductCard'))
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))

export default function Eshop(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/products').then((response) => { 
            console.log(response.data)
            setProducts(response.data)
    });
}, []);

    return(<Box className="text-white">
        <MainImageOfPage id="main-image" img="gps-tracker.png" text="Pridaj sa k nám" href="" />
        <Box className="container p-5 my-5">
        <Box className="message is-info mt-3">
            <Typography className="message-body">Začiatok predaja 22.11.2022</Typography>
        </Box>
        <Container>
        <Typography variant="h3" className="my-4 mt-5">GPS zariadenia a oblečenie</Typography>
        <Grid container spacing={3}>
                {products.map((product, index) => <ProductCard index={index} id={product.id_product} contain={product.contain_in_warehouse} img={product.image} title={product.title} price={product.price} />)}
        </Grid>
        </Container>
        </Box>
    </Box>)
}