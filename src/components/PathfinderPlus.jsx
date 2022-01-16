import React, {useState, useEffect, lazy} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'
import Axios from 'axios'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import {gsap, TweenMax} from 'gsap'
import Skeleton from '@mui/material/Skeleton'
const Health = lazy(() => import('./Health')) 

export default function PathfinderPlus(props){
    const [window, openWindow] = useState(false)
    const [result, setResult] = useState([])
    const [detailWin, openDetailWin] = useState(false)
    const [details, setDetails] = useState([])
    const [SEARCH, setSearch] = useState('')

    const openF = () => {
        openWindow(!window);
        function getData(){
            Axios.post('http://localhost:3001/pathPlus', {search: props.theme}).then(result => {
            setResult(result.data)
        })
        }
        getData();
    }

    const openDetails = (search) => {
        openDetailWin(!detailWin)
        function sendDetails(){
            Axios.post('http://localhost:3001/findDetails', {search: search}).then(result => {
                setDetails(result.data)
            })
        }
        console.log(search)
        sendDetails();
        setSearch(search)
    }

    console.log(details)

    return(<Box className="text-center align-middle">
    <Grid container>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Health />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Button className="align-middle position-relative" variant="outlined" id="pathPlus" onClick={openF} color="info">
                <i className="material-icons text-info" id="icon">{props.icon}</i>
            </Button>
        </Grid>
    </Grid>
    {window && <Box id="dark-background">
    <Box>
                <Button variant="contained" color="error" onClick={() => openWindow(!window)}>x</Button>
                </Box>
            <Card className="container my-5 p-5 border border-dark text-white" id="card" style={{'overflowY': 'scroll', 'maxHeight': '90%'}}>
                <Box>
                    <Avatar src="/images/pathfinder.jpg" className="mx-auto my-5" style={{'transform': 'scale(2)'}} />
                    <Typography variant="h4">Aký je tvoj problém?</Typography>
                </Box>
                <Grid container>
                    {result.map((res, index) => <Grid className="my-3" key={index} item xs={12} sm={12} md={4} xl={3} lg={3}><Button className="p-3 w-75 h-100" variant="contained" color="info" onClick={()=> openDetails(res.header)}>{res.header}</Button></Grid>)}
                </Grid>
            </Card>
        </Box>}
        {detailWin && <Box id="dark-background">
                <Box>
                    <Button variant="contained" color="error" className="mb-5" onClick={() => openDetailWin(!detailWin)}>x</Button>
                </Box>
                <Card className="container text-white h-75 p-5 mb-5 border border-dark" id="card" style={{'overflowY': 'scroll'}}>
                <Typography variant="h3">{SEARCH}</Typography>
                {details.map((detail, index) => <Box className="my-5 w-75 mx-auto" key={index}>
                        <Typography variant="h1">{index+1}</Typography>
                        <Typography className="mb-5">{detail.text}</Typography>
                </Box>)}
                </Card>
            </Box>}
</Box>)
}