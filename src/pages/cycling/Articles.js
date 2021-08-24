import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function Articles(){
    return(<Box className="bg-dark">
        <Grid container>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{/*backgroundImage: "url('/images/cycling.jpg')"*/}}>
                <img src="/images/cycling.jpg" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Box className="p-5">
                    <Typography variant="h3" className="w-75 text-center">Zažil si niečo neobyčajné a chceš sa o zážitok podeliť s ostatnými?</Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>)
}