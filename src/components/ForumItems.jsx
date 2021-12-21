import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Axios from 'axios'

export default function ForumItems(props){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [country, setCountry] = useState('')
    //const [avatar, setAvatar] = useState('')

    let avatar = null


    useEffect(() => {
        Axios.post('http://localhost:3001/forumUserInfo', {id: props.data.id_user}).then((response) => {
            console.log(response.data)
            setName(response.data[0].name)
            setSurname(response.data[0].surname)
            setCountry(response.data[0].country)
            //setAvatar(response.data[0].avatar)
        });
    }, [props.data.id_user]);

    return(<Card className="my-3 p-5 bg-dark text-white shadow-lg border border-info border-2" key={props.key} style={{'MinHeight': 400}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} xl={2} lg={2}>
                <Avatar className="mx-auto">{avatar != null ? "/images/alien.png" : avatar}</Avatar>
                <Typography>Meno: {name}</Typography>
                <Typography>Priezvisko: {surname}</Typography>
                <Typography>Krajina: {country}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} xl={10} lg={10}>
                <Typography>{props.data.text}</Typography>
                <Typography>{props.data.dateOfPublic}</Typography>
            </Grid>
        </Grid>
    </Card>)
}