import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Axios from 'axios'

export default function ForumItems(props){
    const [data, setData] = useState([])
let avatar = null
console.log("data")
console.log(props.data)

useEffect(() => {
    Axios.post('http://localhost:3001/forumItems', {theme: props.data.id_user}).then((response) => {
        console.log(response.data)
        setData(response.data)
    });
}, [props.data.id_user]);
    console.log(data)

    return(<Card className="my-3 p-5 bg-dark text-white shadow-lg border border-info border-2" key={props.key} style={{'MinHeight': 400}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} xl={2} lg={2}>
                <Avatar className="mx-auto">{avatar != null ? "/images/alien.png" : avatar}</Avatar>
                <Typography>Meno: {data.name}</Typography>
                <Typography>Priezvisko: {data.surname}</Typography>
                <Typography>Krajina: {data.country}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} xl={10} lg={10}>
                <Typography>{props.data.text}</Typography>
                <Typography>{props.data.dateOfPublic}</Typography>
            </Grid>
        </Grid>
    </Card>)
}