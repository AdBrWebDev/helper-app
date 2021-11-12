import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import '../../App.css'
import Pagination from '@mui/material/Pagination'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MainImageOfPage from '../../components/MainImageOfPage'

export default function Articles(){
    const [count, setCount] = useState(15)

    const setNum = (event) => {
        setCount(event.target.value)
    }

    return(<Box className="bg-dark text-center">
        <MainImageOfPage img="articles-img.jpg" text="Podeľ sa o svoje zážitky" href="" />
        <Container>
        <Box style={{'width': '350px'}} className="d-flex">
            <FormControl fullWidth>
                <Select className="text-white my-5 border border-info"
                labelId="select-articles-count"
                id="select"
                value={count}
                label={count}
                onChange={setNum}
                title="Vybrať počet článkov na strane">
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
        </Container>
        <Box className="container py-5 text-center">
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Card className="text-center bg-dark border border-info text-white border-2 pb-2" id="card">
                        <CardContent>
                            <Box className="card-image mb-5">
                                <figure className="image is-4by3">
                                    <img src="/images/slDom.jpg" alt="sliezsky dom" />
                                </figure>
                                <a class="btn-floating halfway-fab btn-large waves-effect info"><i class="material-icons">auto_stories</i></a>
                            </Box>
                            <Typography variant="h4">Sliezsky dóm</Typography>
                        </CardContent>
                        <CardActions className="px-2">
                            <Grid container>
                            <Grid item className="d-flex text-center my-1 ml-2">
                                <Typography variant="h6">Náročnosť:</Typography>
                                <Rating value={2.5} readOnly precision={0.5} emptyIcon={<StarIcon style={{opacity: .55, color: "white"}} />}></Rating>
                            </Grid>
                            <Grid item className="d-flex text-center">
                            <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">thumb_up</i></Button>
                            <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">favorite</i></Button>
                            <Button variant="outlined" color="info" className="mx-1"><i className="material-icons">star</i></Button>
                            </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box className="text-center w-25 mx-auto">
                <Pagination style={{'background': 'transparent'}} className="my-5" size="large" variant="outlined" count={2} color="info" />
            </Box>
        </Box>
    </Box>)
}