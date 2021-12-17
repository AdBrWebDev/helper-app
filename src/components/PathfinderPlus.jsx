import React, {useState, lazy} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'
import Axios from 'axios'
import Typography from '@mui/material/Typography'
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
            <Button id="card" className="align-middle position-relative" variant="outlined" onClick={openF} color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
                <i className="material-icons text-info">{props.icon}</i>
            </Button>
        </Grid>
    </Grid>
    {window && <Box id="dark-background">
            <Card className="container my-5 p-3 bg-dark border border-info">
                <Box>
                <Button variant="outlined" color="error" onClick={() => openWindow(!window)}>x</Button>
                </Box>
                <Box>
                    {result.map((res, index) => <Button index={index} variant="outlined" color="info" onClick={()=> openDetails('first-aid')}>{res.header}</Button>)}
                </Box>
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