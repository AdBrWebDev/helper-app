import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Axios from 'axios'
import '../App.css'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@mui/material/Modal'

export default function ProductCard(props){
    const [iWindow, infoOpened] = useState(false)
    const [info,  setInfo] = useState([])
    const cart = useSelector((state) => state)
    console.log(cart)
    const dispatch = useDispatch();
    console.log(props.product.color)
    let color = props.product.color

    const openInfo = (id) => {
        infoOpened(!iWindow)
        console.log(id)
        function getInfo() {
                Axios.post('http://localhost:3001/getInfo', {product: id}).then((response) => {
                    setInfo(response.data)
                })
        }
        getInfo()
    } 

    return(<Grid key={props.index} item xs={12} sm={12} lg={4} xl={3} md={6}>
        <Box className="card border border-dark" id="cardh" onClick={() => openInfo(props.id)}>
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
                            {props.contain > 0 ? <Box className="message is-success mt-3"><Typography className="message-body">Skladom {props.contain} ks</Typography></Box> : 
                            <Box className="message is-danger mt-3"><Typography className="message-body">Nedostupné</Typography></Box>}</Box>
                        </Box>
                    </Box>
                </Box>
                <Modal open={iWindow} onClose={() => infoOpened(false)}>
                    <Card className="container text-center text-white border p-5 border-dark" id="card" style={{'marginTop': 30, 'overflowY': 'scroll', 'height': '90%'}}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={5} xl={5} lg={5}>
                                <img style={{'height': 350, 'marginTop': 50}} src={`/images/${props.img}`} alt={props.title} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={7} xl={7} lg={7}>
                                    <Card id="card" className="border p-5 h-100 border-dark">
                                <Typography variant="h3">{props.title}</Typography>
                                <Divider className="w-75 mx-auto my-3 bg-dark" />
                                <Box>
                                    <Typography variant="h5" style={{'text-align': 'left', 'marginTop': '5%'}}>Prevedenie: {props.product.color}</Typography>
                                </Box>
                            <Box>
                            <Typography variant="h2" style={{'textAlign': 'left', 'marginTop': '10%'}}>{props.price} €</Typography>
                             </Box>
                            <Box className="d-flex mt-5">
                            {props.contain > 0 ? <Box className="message is-success w-50 mx-auto my-auto"><Typography className="message-body">Skladom {props.contain} ks</Typography></Box> : 
                            <Box className="message is-danger w-50 mx-auto my-auto"><Typography className="message-body">Nedostupné</Typography></Box>}
                            <Button disabled={props.contain < 1} variant="contained" className="mr-5" color="success"><i className="material-icons" onClick={() => dispatch({type: "ADD", payload: props.product})}>shopping_cart</i></Button>
                            </Box>
                            </Card>
                            </Grid>
                        </Grid>
                            <Box>
                                <Typography variant="h4" className="my-4 mt-5">Informácie o produkte</Typography>
                                <Grid container>
                                    {info.map((info, index) => <Grid key={index} item xs={12} sm={12} md={6} xl={6} lg={6}>
                                        <Box id="card" style={{'minHeight': 230}} className="text-dark p-5 m-2">
                                                <Typography variant="h4">{info.title}</Typography>
                                                <Divider className="my-1 mb-3" />
                                                <Typography>{info.text}</Typography>
                                        </Box>
                                        </Grid>)}
                                </Grid>
                            </Box>
                        </Card>
                    </Modal>
    </Grid>);
}