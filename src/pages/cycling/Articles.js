import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

export default function Articles(){
    return(<Box className="bg-dark">
        <Grid container>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                <Box className="p-5">
                    <Typography variant="h3" className="w-75 text-center">Zažil si niečo neobyčajné a chceš sa o zážitok podeliť s ostatnými?</Typography>
                </Box>
            </Grid>
        </Grid>
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Card>
                        <CardMedia image="/public/images/slDom.jpg" title="sliezsky dom" />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </Box>)
}