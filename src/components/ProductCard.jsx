import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Axios from 'axios'
import '../App.css'

export default function ProductCard(props){
    const [iWindow, infoOpened] = useState(false)
    const [info, setInfo] = useState([])

    const openInfo = () => {
        infoOpened(!iWindow)
        function getInfo() {
                Axios.get('http://localhost:3001/getInfo').then((response) => {
                    setInfo(response)
                    console.log(response)
                })
        }
        getInfo()
    }

     

    return(<Grid key={props.index} item xs={6} sm={6} lg={3} xl={3} md={4}>
        <Box className="card bg-dark border border-info border-2" id="card" key={props.index}>
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

                    </Box>}
    </Grid>);
}