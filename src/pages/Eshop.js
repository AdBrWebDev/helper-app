import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

export default function Eshop(){
    return(<Box className="text-white container p-5 my-5">
        <Container>
        <Typography variant="h3" className="my-4">GPS locatory</Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={3} xl={3} md={4}>
                <Box className="card">
                    <Box className="card-image">
                        <figure className="image is 4by3 m-2">
                            <img style={{"maxHeight": 300}} src="/images/gps.jpg" />
                        </figure>
                    </Box>
                    <Box className="card-content text-center">
                        <Box className="content">
                            <Typography variant="h3">GPS pathfinder 500</Typography>
                            <Typography variant="h4">40 €</Typography>
                            <Button variant="outlined" color="success"><i className="material-icons">shopping_cart</i></Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Typography variant="h3" className="my-4">Oblečenie a doplnky </Typography>
        <Grid container>
            <Grid item xs={6} sm={6} lg={3} xl={3} md={4}>
            <Box className="card">
                    <Box className="card-image">
                        <figure className="image is 4by3 m-2">
                            <img style={{"maxHeight": 300}} src="/images/jacket.jpg" />
                        </figure>
                    </Box>
                    <Box className="card-content">
                        <Box className="content text-center">
                            <Typography variant="h3">pathfinder discover</Typography>
                            <Typography variant="h4">30 €</Typography>
                            <Button variant="outlined" color="success"><i className="material-icons">shopping_cart</i></Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </Container>
    </Box>)
}