import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Axios from 'axios'
import '../App.css'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import StarIcon from '@mui/icons-material/Star'
import { useSelector, useDispatch } from 'react-redux'

export default function ProductCard(props){
    const [iWindow, infoOpened] = useState(false)
    const [info, setInfo] = useState([])
    const [rating, setRating] = useState(null)
    const cart = useSelector((state) => state)
    console.log(cart)
    const dispatch = useDispatch();

    const openInfo = (id) => {
        infoOpened(!iWindow)
        console.log(id)
        function getInfo() {
                Axios.post('http://localhost:3001/getInfo', {product: id}).then((response) => {
                    setInfo(response.data)
                    console.log(response.data)
                })
        }
        getInfo()
    } 

    return(<Grid key={props.index} item xs={12} sm={12} lg={4} xl={3} md={6}>
        <Box className="card border border-dark" id="cardh">
                    <Box className="card-image">
                        <figure className="image is 4by3 m-2">
                            <img style={{"height": 250, 'width': 250, 'margin': 'auto'}} src={`/images/${props.img}`} alt={props.title} />
                        </figure>
                    </Box>
                    <Box className="card-content text-center">
                        <Box className="content">
                            <Box style={{'height': 60}}>
                            <Typography className="text-white" variant="h3">{props.title}</Typography>
                            </Box>
                            <Typography className="text-white" variant="h4">{props.price} €</Typography>
                            <Box style={{'height': 60}}>
                            {props.contain > 0 ? <Box><Button variant="outlined" color="info" className="mr-1" onClick={() =>dispatch({type: "ADD", payload: props.product})}><i className="material-icons">shopping_cart</i></Button>
                            <Button variant="outlined" color="info" className="ml-1"><i className="material-icons" onClick={() => openInfo(props.id)}>info</i></Button></Box> : 
                            <Box className="message is-danger mt-3"><Typography className="message-body">Nedostupné</Typography></Box>}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {iWindow && <Box id="dark-background">
                <Box className="mb-5 mx-auto text-center">
                            <Button variant="contained" color="error" onClick={() => openInfo(!iWindow)}>x</Button>
                        </Box>
                        <Card className="container text-center text-white border p-5 border-dark" id="card" style={{'marginTop': 30, 'overflowY': 'scroll'}}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={5} xl={5} lg={5}>
                                <img style={{'height': 350, 'marginTop': 50}} src={`/images/${props.img}`} alt={props.title} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={7} xl={7} lg={7}>
                                    <Card id="card" className="border p-5 h-100 border-dark">
                                <Typography variant="h3">{props.title}</Typography>
                                <Divider className="w-75 mx-auto my-3 bg-dark" />
                                <Box>
                                    <Typography className="my-2" variant="h5" style={{'text-align': 'left'}}>Prevedenie:</Typography>
                                    <Typography className="my-2" variant="h5" style={{'text-align': 'left'}}>Veľkosti:</Typography>
                                </Box>
                                <Button variant="contained" color="info">Info o produkte</Button>
                            <Box>
                            <Typography variant="h2" style={{'textAlign': 'left'}}>{props.price} €</Typography>
                             </Box>
                            <Box className="d-flex">
                            <Rating className="my-auto" value={rating} onChange={(e) => setRating(e.target.value)} readOnly precision={0.5} emptyIcon={<StarIcon style={{opacity: .55, color: "white"}} />} />
                            <Box className="message is-success w-50 mx-auto my-auto"><Typography className="message-body">Skladom {props.contain} ks</Typography></Box>
                            <Button variant="contained" color="success"><i className="material-icons" onClick={() =>dispatch({type: "ADD", payload: props.product})}>shopping_cart</i></Button>
                            </Box>
                            </Card>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>}
    </Grid>);
}