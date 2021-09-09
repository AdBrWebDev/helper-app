import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating'

export default function Articles(){
    return(<Box className="bg-dark container py-4">
                <Box className="p-5">
                    <Typography variant="h3" className="w-75 text-center">Zažil si niečo neobyčajné a chceš sa o zážitok podeliť s ostatnými?</Typography>
                </Box>
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Card className="p-2 text-center">
                        <CardContent>
                            <CardMedia image="../../../images/slDom.jpg" title="sliezsky dom" />
                            <Typography variant="h4">Sliezsky dóm</Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                            <Grid item className="d-flex text-center mb-3">
                                <Typography variant="h6">Náročnosť:</Typography>
                                <Rating name="read-only" value={3} readOnly />
                            </Grid>
                            <Grid item className="d-flex text-center">
                            <Button variant="contained" color="secondary" className="mx-2"><i className="material-icons">thumb_up</i></Button>
                            <Button variant="contained" color="secondary" className="mx-2"><i className="material-icons">favorite</i></Button>
                            <Button variant="contained" color="secondary" className="mx-2"><i className="material-icons">star</i></Button>
                            </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </Box>)
}