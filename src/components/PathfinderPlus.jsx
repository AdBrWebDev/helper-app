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

    const openF = () => {
        openWindow(!window);
        function getData(){
            Axios.get('http://localhost:3001/pathPlus').then(result => {
            setResult(result.data)
        })
        }
        getData();
    }

    console.log(result)

    return(<Box className="text-center align-middle">
    <Grid container>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Health />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{'height': '700px'}}>
            <Button id="card" className="align-middle position-relative" variant="outlined" onClick={openF} color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
                <i className="material-icons text-info">pedal_bike</i>
            </Button>
        </Grid>
    </Grid>
    {window && <Box id="dark-background">
            <Card className="container my-5 p-3 bg-dark border border-info">
                <Box>
                <Button variant="outlined" color="error" onClick={() => openWindow(!window)}>x</Button>
                </Box>
                <Box>
                    {result.map((res, index) =>
                <Typography key={index} className="text-white">{res.text}</Typography>)}
                </Box>
            </Card>
        </Box>}
</Box>)
}