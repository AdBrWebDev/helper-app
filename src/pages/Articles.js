import React, {lazy, useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../App.css'
import Axios from 'axios'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Cookies from 'js-cookie'
import Modal from '@mui/material/Modal'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))
const ArticlesItem = lazy(() => import('../components/ArticlesItem'))

export default function Articles(props){
    const [articles, getArticles] = useState([])
    const [openArticle, openAddArticle] = useState(false)
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false);
    const [MainImg, setMainImg] = useState({
        file: []
    })

    useEffect(() => {
        Axios.post('http://localhost:3001/articles', {title: props.title}).then((response) => { 
            console.log(response.data)
            getArticles(response.data)
    });
}, [props.title]);

const publicArticle = () => {
    let specialId = new Date()+Cookies.get("id").toString()
    const formData = new FormData();
    formData.append('mainImg', MainImg.file)
    //Axios.post('http://localhost:3001/publicate', {id_user: Cookies.get("id"), sign: title, rating: rating, text: text, theme: props.title, specialId: specialId, formData})
    Axios.post('http://localhost:3001/publicateImg', [formData])
    openAddArticle(false)
    handleClick()
}

const setImg = (e) => {
    setMainImg({
        ...MainImg,
        file:e.target.files[0]
    });
    console.log(e.target.files[0])
    console.log(MainImg)
}

const setMultipleImg = (e) => {
    console.log(e.target.files)
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(<Box className="bg-dark text-center">
        <MainImageOfPage img={props.img} text={props.text} />
        <Box className="container py-5 text-center">
            <Box>
                <Button variant="outlined" className="mb-4" disabled={!Cookies.get("id")} color="info" onClick={() => openAddArticle(!openArticle)}>Pridať nový článok</Button>
            </Box>
        <Grid container>
            {articles.map((article, index) => <ArticlesItem index={index} article={article} />)}
            </Grid>
            <Box className="text-center w-25 mx-auto">
            </Box>
        </Box>
        <Modal open={openArticle} onClose={() => openAddArticle(false)}>
                <Card id="card" className="p-5 border container bg-dark text-center border-dark text-white mt-5" style={{'overflowY': 'scroll', 'height': '95%'}}>
                    <Typography variant="h2">{title}</Typography>
                    <input type="text" className="w-75 mx-auto text-center text-white" onChange={(e) => setTitle(e.target.value)} placeholder="názov článku" />
                    <Typography className="text-white mr-3" variant="h6">náročnosť trasy</Typography>
                    <input type="number" className="w-25 text-white" min={0} max={5} onChange={(e) => setRating(e.target.value)}/>
                    <Typography variant="h6" className="mt-4">Nahrať hlavný obrázok</Typography>
                    <Box className="mx-auto w-75 bg-white">
                    <input className="form-control" onChange={(e) => setImg(e)} type="file" name="mainImg" placeholder="Hlavný obrázok" />
                    </Box>
                    <Typography variant="h6" className="mt-4">Nahrať galériu obrázkov</Typography>
                    <Box className="mx-auto w-75 bg-white">
                    <input className="form-control"  onChange={(e) => setMultipleImg(e)} type="file" multiple placeholder="Hlavný obrázok" />
                    </Box>
                    <Box>
                    <textarea style={{'minHeight': '500px'}} className="my-3 form-control text-white bg-transparent" onChange={(e) => setText(e.target.value)} cols="10" rows="10" placeholder="obsah článku"></textarea>
                    </Box>
                    <Button variant="contained" color="info" onClick={publicArticle}>Zverejniť článok</Button>
                </Card> 
            </Modal>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={4000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                <Typography>Váš článok bol zverejnený</Typography>
                                            </Alert>
                                        </Snackbar>
    </Box>)
}