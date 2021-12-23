import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Axios from 'axios'
import '../App.css'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'

export default function ProductCard(props){
    const [iWindow, infoOpened] = useState(false)
    const [info, setInfo] = useState([])

    const openInfo = (id) => {
        infoOpened(!iWindow)
        console.log(id)
        function getInfo() {
                Axios.post('http://localhost:3001/getInfo', {product: id}).then((response) => {
                    setInfo(response.data)
                    console.log(response.data[0])
                })
        }
        getInfo()
    }    

    return(<Grid key={props.index} item xs={12} sm={12} lg={4} xl={3} md={6}>
        <Box className="card bg-dark border border-info border-2" id="card">
                    <Box className="card-image">
                        <figure className="image is 4by3 m-2">
                            <img style={{"height": 250, 'width': 250, 'margin': 'auto'}} src={`${props.img}`} alt={props.title} />
                        </figure>
                    </Box>
                    <Box className="card-content text-center">
                        <Box className="content">
                            <Box style={{'height': 60}}>
                            <Typography className="text-white" variant="h3">{props.title}</Typography>
                            </Box>
                            <Typography className="text-white" variant="h4">{props.price} €</Typography>
                            <Box style={{'height': 60}}>
                            {props.contain > 0 ? <Box><Button variant="outlined" color="info" className="mr-1"><i className="material-icons">shopping_cart</i></Button>
                            <Button variant="outlined" color="info" className="ml-1"><i className="material-icons" onClick={() => openInfo(props.id)}>info</i></Button></Box> : 
                            <Box className="message is-danger mt-3"><Typography className="message-body">Vypredané</Typography></Box>}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {iWindow && <Box id="dark-background">
                        <Card className="container bg-dark text-center text-white border border-2 border-info">
                        <Box className="my-4">
                            <Button variant="outlined" color="error" onClick={() => openInfo(!iWindow)}>x</Button>
                        </Box>
                        <Box>
                            <img style={{'height': 300}} src={props.img} alt={props.title} />
                        </Box>
                        <Box className="p-5">
                            <Typography variant="h3">{props.title}</Typography>
                            <Typography variant="h4">{props.price} €</Typography>
                            <Box>
                            <Box className="message is-success mt-3 w-25 mx-auto my-3 "><Typography className="message-body">Skladom {props.contain} ks</Typography></Box>
                            </Box>
                            <Box>
                                <TextField type="number" className="text-white" style={{'width': 100}} />
                                <Button variant="outlined" color="success"><i className="material-icons">shopping_cart</i></Button>
                            </Box>
                        </Box>
                        </Card>
                    </Box>}
    </Grid>);
}