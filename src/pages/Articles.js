import React, {lazy, useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../App.css'
import Axios from 'axios'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import Typography from '@mui/material/Typography'
import Cookies from 'js-cookie'
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))
const ArticlesItem = lazy(() => import('../components/ArticlesItem'))

export default function Articles(props){
    const [articles, getArticles] = useState([])
    const [openArticle, openAddArticle] = useState(false)
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')
    const [MainImg, setMainImg] = useState('')

    useEffect(() => {
        Axios.post('http://localhost:3001/articles', {title: props.title}).then((response) => { 
            console.log(response.data)
            getArticles(response.data)
    });
}, [props.title]);

const publicArticle = () => {
    Axios.post('http://localhost:3001/publicate', {id_user: Cookies.get("id"), mainImg: MainImg, sign: title, rating: rating, text: text, theme: props.title})
}

    return(<Box className="bg-dark text-center">
        <MainImageOfPage img={props.img} text={props.text} href="" />
        <Box className="container py-5 text-center">
            <Box>
                <Button variant="outlined" color="info" onClick={() => openAddArticle(!openArticle)}>Pridať nový článok</Button>
            </Box>
        <Grid container>
            {articles.map((article, index) => <ArticlesItem index={index} data={articles} />)}
            </Grid>
            <Box className="text-center w-25 mx-auto">
            </Box>
        </Box>
        {openArticle && <Box id="dark-background">
                <Box className="mb-5 mx-auto text-center">
                    <Button variant="contained" color="error" onClick={() => openAddArticle(!openArticle)}>x</Button>
                </Box>
                <Card id="card" className="p-5 border border-dark">
                    <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="názov článku" />
                    <Typography>náročnosť trasy</Typography>
                    <Rating value={0}  onChange={(e) => setRating(e.target.value)} precision={0.5} emptyIcon={<StarIcon style={{opacity: .55, color: "white"}} />}/>
                    <input  onChange={(e) => setMainImg(e.target.value)} type="file" placeholder="Hlavný obrázok" />
                    <textarea  onChange={(e) => setText(e.target.value)} cols="80" rows="80" placeholder="obsah článku"></textarea>
                    <Button variant="contained" color="success" onClick={publicArticle}>Zverejniť článok</Button>
                </Card> 
            </Box>}
    </Box>)
}