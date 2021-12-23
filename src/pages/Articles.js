import React, {lazy, useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../App.css'
import Axios from 'axios'
import Pagination from '@mui/material/Pagination'
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))
const ArticlesItem = lazy(() => import('../components/ArticlesItem'))

export default function Articles(props){
    const [articles, getArticles] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:3001/articles', {title: props.title}).then((response) => { 
            console.log(response.data)
            getArticles(response.data)
    });
}, [props.title]);

console.log(articles)

    /*const articles = [
        {title: 'Sliezsky dom', img: 'slDom.jpg', value: 2.5}
    ]*/
    return(<Box className="bg-dark text-center">
        <MainImageOfPage img={props.img} text={props.text} href="" />
        <Box className="container py-5 text-center">
        <Grid container>
            {articles.map((article, index) => <ArticlesItem index={index} data={articles} />)}
            </Grid>
            <Box className="text-center w-25 mx-auto">
                <Pagination style={{'background': 'transparent'}} className="my-5" size="large" variant="outlined" count={2} color="info" />
            </Box>
        </Box>
    </Box>)
}