import React, {useState} from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'
import Axios from 'axios'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

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

    return(<Box>
        <Button id="card" className="align-middle position-relative" onClick={openF} variant="outlined" color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
            <i className="material-icons text-info">health_and_safety</i>
        </Button>
        {health && <Box id="dark-background">
        <Card className="container my-5 p-3 bg-dark border border-info text-white">
                <Box>
                <Button variant="outlined" color="error" onClick={openF}>x</Button>
                </Box>
                <Box>
                    <Avatar src="/images/pathfinder.jpg" className="mx-auto my-5" style={{'transform': 'scale(2)'}} />
                    <Typography variant="h4">Aký je tvoj problém?</Typography>
                </Box>
                <Grid container>
                    {data.map((res, index) => <Grid key={index} item className="my-3" xs={12} sm={12} md={4} xl={3} lg={3}><Button className="p-3 w-75 h-100" variant="outlined" color="info" onClick={()=> openDetails(res.header)}>{res.header}</Button></Grid>)}
                </Grid>
            </Card>
        </Box>}
        {detailWin && <Box id="dark-background">
                <Card className="container bg-dark text-white h-75 p-5 mb-5 border border-info" style={{'overflowY': 'scroll'}}>
                <Box>
                    <Button variant="outlined" color="error" className="mb-5" onClick={() => openDetailWin(!detailWin)}>x</Button>
                </Box>
                <Typography variant="h3">{SEARCH}</Typography>
                {details.map((detail, index) => <Box className="my-5" key={index}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                            <img src="" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                        <Typography variant="h1">{index+1}</Typography>
                        <Typography>{detail.text}</Typography>
                        </Grid>
                    </Grid>
                </Box>)}
                </Card>
            </Box>}
    </Box>)
}