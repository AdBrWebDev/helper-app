import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid'
import Axios from 'axios'

export default function Sponsors(){
    const [sponsors, setSponsors] = useState([])

    useEffect(() => Axios.get('http://localhost:3001/sponsors').then((response) => {
        console.log(response.data)
        setSponsors(response.data)
    }), [])

    return(
        <Grid container className="container mt-5">
            {sponsors.map((sponsor, index) => <Grid className="my-auto p-5" xs={6} sm={6} md={3} lg={2} xl={2} item key={index}><img src={`pathfinderImages/${sponsor.img}`} alt={sponsor.title} /></Grid>)}
        </Grid>
    )
}