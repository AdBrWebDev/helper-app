import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Axios from 'axios'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export default function ForumItems(props){
    const [nick, setNickname] = useState('')
    //const [avatar, setAvatar] = useState('')
    let avatar = null

    const date  = (date) => {
        let d = new Date(date)
        return(`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`)
    }

    useEffect(() => {
        Axios.post('http://localhost:3001/forumUserInfo', {id: props.data.id_user}).then((response) => {
            console.log(response.data)
            setNickname(response.data[0].nickname)
            //setAvatar(response.data[0].avatar)
        });
    }, [props.data.id_user]);

    return(<Card className="my-3 p-5 text-white shadow-lg border border-dark" id="card" key={props.key} style={{'MinHeight': 400}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} xl={2} lg={2}>
                <Avatar sx={{height: 60, width: 60}} className="mx-auto my-3">{avatar != null ? "/images/alien.png" : avatar}</Avatar>
                <Typography>Nick: {nick}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} xl={10} lg={10}>
                <Grid item xs={12} style={{'minHeight': 100}}>
                <Typography>{props.data.text}</Typography>
                {props.data.image == null || props.data.image === "" ? '' : <img src={props.data.image} height="250" alt="fourmImg"/>}
                </Grid>
                <Grid item xs={12}>
                <Divider className="w-75 mx-auto" />
        <Box className="mt-2">
        <Typography className="right-0">Pridané: {date(props.data.dateOfPublic)}</Typography>
        </Box>
        </Grid>
        </Grid>
        </Grid>
    </Card>)
}