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

export default function ArticlesItem(props){
    const [data, getData] =  useState([])
    const [window, openWindow] = useState(false)

    const openArticle = (id) => {
        Axios.post('http://localhost:3001/articlesData', {id: id}).then((response) => { 
            getData(response.data[0])
            console.log(response.data[0])
    });
    openWindow(!window)
    }

    console.log(data.likes)

    return(<Grid key={props.index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card className="text-center border border-dark text-white pb-2" id="cardh">
                <CardContent>
                    <Box className="card-image mb-5">
                        <figure className="image is-4by3">
                            <img src={`/images/${props.data[0].mainImg}`} alt={props.data[0].title} />
                        </figure>
                        <button className="btn-floating halfway-fab btn-large waves-effect info" onClick={() => openArticle(props.data[0].id_article)}><i class="material-icons">auto_stories</i></button>
                    </Box>
                    <Typography variant="h4">{props.data[0].title}</Typography>
                </CardContent>
                <CardActions className="px-2">
                    <Grid container>
                    <Grid item className="d-flex text-center my-1 ml-2">
                        <Typography variant="h6">Náročnosť:</Typography>
                        <Rating value={props.data[0].rating} readOnly precision={0.5} emptyIcon={<StarIcon style={{opacity: .55, color: "white"}} />}></Rating>
                    </Grid>
                    <Grid item className="d-flex text-center">
                    <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">thumb_up</i></Button>
                    <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">favorite</i></Button>
                    <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">star</i></Button>
                    </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <Modal open={window} onClose={() => openWindow(false)}>
                <Card className="container border text-center border-dark p-5" id="card" style={{'overflowY': 'scroll', 'height': '92%'}}>
                    <LazyHero color="#111111" minHeight="80vh" opacity="0.5" parallaxOffset={150} imageSrc={`/images/${props.data[0].mainImg}`}>
                        <Box>
                            <Typography color="white" variant="h2">{props.data[0].title}</Typography>
                        </Box>
                    </LazyHero>
                    <Box className="text-white container mx-auto">
                    <Typography>{data.text}</Typography>
                    <Typography variant="h2">Galeria</Typography>
                    </Box>
                </Card>  
                </Modal>
        </Grid>)
}