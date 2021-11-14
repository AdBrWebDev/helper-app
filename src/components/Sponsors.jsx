import Grid from '@mui/material/Grid'

export default function Sponsors(){
    const sponsors = []
    return(
        <Grid container>
            {sponsors.map((sponsor, index) => <Grid item key={index}>{sponsor}</Grid>)}
        </Grid>
    )
}