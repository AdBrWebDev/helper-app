import React, {lazy} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../App.css'
import Pagination from '@mui/material/Pagination'
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))
const ArticlesItem = lazy(() => import('../components/ArticlesItem'))

export default function Articles(props){
    const articles = [
        {title: 'Sliezsky dom', img: 'slDom.jpg', value: 2.5}
    ]
    return(<Box className="bg-dark text-center">
        <MainImageOfPage img={props.img} text={props.text} href="" />
        <Box className="container py-5 text-center">
        <Grid container>
            {articles.map((article, index) => <ArticlesItem index={index} title={article.title} value={article.value} img={article.img} />)}
            </Grid>
            <Box className="text-center w-25 mx-auto">
                <Pagination style={{'background': 'transparent'}} className="my-5" size="large" variant="outlined" count={2} color="info" />
            </Box>
        </Box>
    </Box>)
}