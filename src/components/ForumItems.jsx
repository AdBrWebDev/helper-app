import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Axios from 'axios'

export default function ForumItems(props){
let avatar = null
    return(<Card className="my-3 p-5 bg-dark text-white shadow-lg border border-info border-2" style={{'MinHeight': 400}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} xl={2} lg={2}>
                <Avatar className="mx-auto">{avatar != null ? "/images/alien.png" : avatar}</Avatar>
                <Typography>Meno: {}</Typography>
                <Typography>Priezvisko: {}</Typography>
                <Typography>Krajina: {}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} xl={10} lg={10}>
                <Typography>{props.data.text}</Typography>
            </Grid>
        </Grid>
    </Card>)
}