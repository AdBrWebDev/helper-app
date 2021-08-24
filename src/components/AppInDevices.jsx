import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import '../App.css'

export default function AppInDevices(){
    return(<Box style={{"minHeight": 400}} className="container my-4 mt-5 mb-5 text-white text-center">
        <Typography variant="h3" className="py-5 mb-5"><strong>Pathfinder</strong> už čoskoro aj v</Typography>
        <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <i id="devices" className="material-icons my-5">smartphone</i>
                <Typography>smartphone</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <i id="devices" className="material-icons my-5">laptop</i>
                <Typography>PC</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <i id="devices" className="material-icons my-5">tv</i>
                <Typography>android-tv</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <i id="devices" className="material-icons my-5">watch</i>
                <Typography>smartwatch</Typography>
            </Grid>
        </Grid> 
    </Box>)
}