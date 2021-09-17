import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function Eshop(){
    return(<Box className="text-white container p-5 my-5">
        <Container>
        <Typography variant="h3" className="my-4">GPS locatory</Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
        </Grid>
        <Typography variant="h3" className="my-4">Oblečenie a doplnky </Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6}></Grid>
        </Grid>
        </Container>
    </Box>)
}