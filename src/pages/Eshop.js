import React, {lazy, useState, useEffect} from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import '../App.css'
import Axios from 'axios'
import {motion} from 'framer-motion'
const ProductCard = lazy(() => import('../components/ProductCard'))

export default function Eshop(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/products').then((response) => { 
            console.log(response.data)
            setProducts(response.data)
    });
}, []);

    return(<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
        <Box className="text-white">
        <Grid container className="mt-5">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <img style={{'height': '600px', 'transformOrigin': ' bottom', 'transform': 'skewY(-3deg)'}} src="images/gps.png" alt="" />
            </Grid>
            <Grid className="my-auto text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h3" className="text-white">Pridaj sa k nám</Typography>
            </Grid>
        </Grid>
        <Box className="container p-5 my-5">
        <Box className="message is-info mt-3" data-aos="fade-up" data-aos-offset="100">
            <Typography className="message-body">Začiatok predaja 22.11.2022</Typography>
        </Box>
        <Container>
        <Typography variant="h3" className="my-4 mt-5" data-aos="flip-up" data-aos-offset="100">GPS zariadenia a oblečenie</Typography>
        <Grid container spacing={3}>
                {products.map((product, index) => { product.quantity = 1; 
                    return (<ProductCard index={index} product={product} id={product.id_product} img={product.image} contain={product.contain} title={product.title} price={product.price} />)})}
        </Grid>
        </Container>
        </Box>
    </Box></motion.div>)
}