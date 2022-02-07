import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import Axios from 'axios'
import '../App.css'
import LazyHero from 'react-lazy-hero'
import Modal from '@mui/material/Modal'
import Cookies from 'js-cookie'
import {motion} from 'framer-motion'

export default function ArticlesItem(props){
    const [data, getData] =  useState([])
    const [window, openWindow] = useState(false)

    const openArticle = (id) => {
        Axios.post('http://localhost:3001/articlesData', {id: id}).then((response) => { 
            getData(response.data[0])
    });
    openWindow(!window)
    }

    function addToFavorite(id){
        Axios.post('http://localhost:3001/addToFav', {id: id, user: Cookies.get("id")})
    }

    function addLike(like, id){
        Axios.post('http://localhost:3001/addLike', {id: id, like: like+1})
    }

    return(<Grid key={props.index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card className="text-center border border-dark text-white pb-2" id="cardh" data-aos="fade-up" data-aos-offset="200">
                <CardContent>
                    <Box className="card-image mb-5">
                        <figure className="image is-4by3">
                            <img src={`upload/${props.article.mainImg}`} alt={props.article.title} />
                        </figure>
                        <button data-aos="zoom-in" data-aos-offset="100" className="btn-floating halfway-fab btn-large waves-effect btn-info" onClick={() => openArticle(props.article.id_article)}><i class="material-icons">auto_stories</i></button>
                    </Box>
                    <Box style={{'minHeight': '60px'}}><Typography variant="h4">{props.article.title}</Typography></Box>
                </CardContent>
                <CardActions className="px-2">
                    <Grid container>
                    <Grid item className="d-flex text-center my-1 ml-2">
                        <Typography variant="h6">Náročnosť:</Typography>
                        <Rating value={props.article.rating} readOnly precision={0.5} emptyIcon={<StarIcon style={{opacity: .55, color: "white"}} />}></Rating>
                    </Grid>
                    <Grid item className="d-flex text-center mx-auto mt-2">
                    <Button data-aos="fade-up-right" data-aos-offset="100" variant="contained" onClick={() => addLike(props.article.likes, props.article.id_article)} disabled={!Cookies.get("id")} color="info" className="mx-3"><i className="material-icons">thumb_up</i><Typography className="ml-2">{props.article.likes}</Typography></Button>
                    <Button data-aos="fade-up-left" data-aos-offset="100" variant="contained" onClick={() => addToFavorite(props.article.id_article)} disabled={!Cookies.get("id")} color="info" className="mx-3"><i className="material-icons">favorite</i></Button>
                    </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <Modal open={window} onClose={() => openWindow(false)}>
            <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Card className="border text-center border-dark mt-5 bg-dark" id="card" style={{'overflowY': 'scroll', 'height': '95%'}}>
                    <LazyHero color="#111111" minHeight="80vh" opacity="0.5" parallaxOffset={150} imageSrc={`/upload/${props.article.mainImg}`}>
                        <Box>
                            <Typography color="white" variant="h2">{props.article.title}</Typography>
                        </Box>
                    </LazyHero>
                    <Box className="text-white container mx-auto">
                    <Typography style={{'font-size': '18px'}} className="w-75 mx-auto mt-5">{data.text}</Typography>
                    <Typography variant="h2">Galeria</Typography>
                    </Box>
                </Card></motion.div>
                </Modal>
        </Grid>)
}