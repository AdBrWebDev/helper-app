import React, {useState, lazy, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'
import Axios from 'axios'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import {TimelineLite, Expo, Elastic, TweenMax} from 'gsap'
import Modal from '@mui/material/Modal'
const Health = lazy(() => import('./Health')) 

let tl = new TimelineLite();
export default function PathfinderPlus(props){
    const [window, openWindow] = useState(false)
    const [result, setResult] = useState([])
    const [detailWin, openDetailWin] = useState(false)
    const [details, setDetails] = useState([])
    const [SEARCH, setSearch] = useState('')

    useEffect(() => {tl.fromTo("#pathPlus", {transform: 'scale(3)', y: 100, opacity: 0, boxShadow: "0 0 0 0 rgba(30, 135, 177,.6)"}, {transform: 'scale(4)', y:0, opacity: 1, ease: Elastic.easeOut, duration: 3, boxShadow: "0 0 20px 5px rgba(30, 135, 177,.6)"})
    tl.fromTo('#icon', {transform: 'scale(0)'}, {transform: 'scale(1)', ease: Expo.easeOut}, '-=1.5')}, [])

    
    const openF = () => {
        openWindow(!window);
        function getData(){
            Axios.post('http://localhost:3001/pathPlus', {search: props.theme}).then(result => {
            setResult(result.data)
        })
        }
        getData();
        TweenMax.fromTo("#card", {transform: 'scale(3)', y: 100, opacity: 0}, {transform: 'scale(4)', y:0, opacity: 1, ease: Elastic.easeOut, duration: 3})
    }

    const openDetails = (search) => {
        openDetailWin(!detailWin)
        function sendDetails(){
            Axios.post('http://localhost:3001/findDetails', {search: search}).then(result => {
                setDetails(result.data)
            })
        }
        sendDetails();
        setSearch(search)
    }

    return(<Box className="text-center align-middle">
    <Grid container>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Health />
        <Modal open={detailWin} onClose={() => openDetailWin(!detailWin)}>
                <Card className="container text-center text-white h-75 p-5 mb-5 border border-dark" id="card modal" style={{'overflowY': 'scroll', 'maxHeight': '90%','marginTop': '5%'}}>
                <Typography variant="h3">{SEARCH}</Typography>
                {details.map((detail, index) => <Box className="my-5 w-75 mx-auto" key={index}>
                        <Typography variant="h1">{index+1}</Typography>
                        <Typography>{detail.text}</Typography>
                </Box>)}
                </Card>
            </Modal>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Button className="align-middle position-relative" variant="outlined" id="pathPlus" onClick={openF} color="info">
                <i className="material-icons text-info" id="icon">{props.icon}</i>
            </Button>
        </Grid>
    </Grid>
    <Modal open={window} onClose={(e) => openWindow(!window)}>
            <Card className="container p-5 border border-dark bg-dark text-white text-center" id="card" style={{'overflowY': 'scroll', 'maxHeight': '90%', 'marginTop': '10%'}}>
                <Box>
                    <Avatar src="/images/pathfinder.jpg" className="mx-auto my-5" style={{'transform': 'scale(2)'}} />
                    <Typography variant="h4" className="mb-3">Aký je tvoj problém?</Typography>
                </Box>
                <Grid container>
                    {result.map((res, index) => <Grid className="my-3" key={index} item xs={12} sm={12} md={4} xl={3} lg={3}><Button className="p-3 w-75 h-100" variant="contained" color="info" onClick={()=> openDetails(res.header)}>{res.header}</Button></Grid>)}
                </Grid>
            </Card>
        </Modal>
        <Modal open={detailWin} onClose={() => openDetailWin(!detailWin)}>
                <Card className="container text-white bg-dark text-center h-75 p-5 mb-5 border border-dark" id="card" style={{'overflowY': 'scroll','marginTop': '5%'}}>
                <Typography variant="h2">{SEARCH}</Typography>
                {details.map((detail, index) => <Box className="my-5 w-75 mx-auto" key={index}>
                        <Typography variant="h1">{index+1}</Typography>
                        <Typography className="mb-5">{detail.text}</Typography>
                </Box>)}
                </Card>
                </Modal>
</Box>)
}