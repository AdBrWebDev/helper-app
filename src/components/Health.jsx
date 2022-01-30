import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'
import Axios from 'axios'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Modal from '@mui/material/Modal'
import { TimelineLite, Expo, Elastic } from 'gsap/all';

export default function Health(){
    const [health, openHealth] = useState(false)
    const [data, setData] = useState([])
    const [details, setDetails] = useState([])
    const [detailWin, openDetailWin] = useState(false)
    const [SEARCH, setSearch] = useState('')

    const openF = () => {
        openHealth(!health);
        function getData(){
            Axios.post('http://localhost:3001/pathPlus', {search: 'first-aid'}).then(result => {
            setData(result.data)
        })
        }
        getData();
    }

    let tl = new TimelineLite()

    useEffect(() => {
        tl.fromTo('#pathPlus', {transform: 'scale(3)', y: 100, opacity: 0}, {transform: 'scale(4)', y:0, opacity: 1, ease: Elastic.easeOut, duration: 3})
        tl.fromTo('#icon', {transform: 'scale(0)'}, {transform: 'scale(1)', ease: Expo.easeOut}, '-=1')
    })

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

    return(<Box>
        <Button className="align-middle position-relative" onClick={openF} variant="outlined" color="info" id="pathPlus">
            <i className="material-icons text-info" id="icon">health_and_safety</i>
        </Button>
        <Modal open={health} onClose={openF}>
        <Card style={{'marginTop': '10%'}} className="container text-center p-5 border border-dark text-white" id="card">
                <Box>
                    <Avatar src="/images/pathfinder.jpg" className="mx-auto my-5" style={{'transform': 'scale(2)'}} />
                    <Typography variant="h4">Aký je tvoj problém?</Typography>
                </Box>
                <Grid container>
                    {data.map((res, index) => <Grid key={index} item className="my-3" xs={12} sm={12} md={4} xl={3} lg={3}><Button className="p-3 w-75 h-100" variant="contained" color="info" onClick={()=> openDetails(res.header)}>{res.header}</Button></Grid>)}
                </Grid>
            </Card>
        </Modal>
        <Modal open={detailWin} onClose={() => openDetailWin(!detailWin)}>
                <Card className="container text-center text-white h-75 p-5 mb-5 border border-dark" id="card" style={{'overflowY': 'scroll', 'maxHeight': '90%','marginTop': '5%'}}>
                <Typography variant="h3">{SEARCH}</Typography>
                {details.map((detail, index) => <Box className="my-5 w-75 mx-auto" key={index}>
                        <Typography variant="h1">{index+1}</Typography>
                        <Typography>{detail.text}</Typography>
                </Box>)}
                </Card>
            </Modal>
            </Box>)
}