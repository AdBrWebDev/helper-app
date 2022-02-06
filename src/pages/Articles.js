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
import {motion} from 'framer-motion'
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
    const [images, uploadImages] = useState([]);

    useEffect(() => {
        Axios.post('http://localhost:3001/articles', {title: props.title}).then((response) => { 
            console.log(response.data)
            getArticles(response.data)
    });
}, [props.title]);

const publicArticle = (e) => {
    e.preventDefault();
    let specialId = new Date()+Cookies.get("id").toString()
    const formData = new FormData();
    const formDataImages = new FormData();
    formData.append('mainImg', MainImg.file)
    console.log(MainImg.file.name)
    for(let i = 0; i< images.length; i++) {
        formDataImages.append('images', images[i])
    }
    Axios.post('http://localhost:3000/publicate', {id_user: Cookies.get("id"), sign: title, mainImg: MainImg.file.name, rating: rating, text: text, theme: props.title, specialId: specialId, formData})
    Axios.post('http://localhost:3000/publicateImg', formData)
    Axios.post('http://localhost:3000/publicateImages', formDataImages)
    openAddArticle(false)
    handleClick()
}

const setImg = (e) => {
    setMainImg({
        ...MainImg,
        file:e.target.files[0]
    });
}

const setMultipleImg = (e) => {
    console.log(e.target.files)
    uploadImages(e.target.files)
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

    return(<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
    <Box className="bg-dark text-center">
        <Grid container className="mt-5">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <img style={{'height': '600px', 'transformOrigin': ' bottom', 'transform': 'skewY(-3deg)'}} src={`images/${props.img}`} alt="" />
            </Grid>
            <Grid className="my-auto text-center" item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h3" className="text-white">{props.text}</Typography>
            </Grid>
        </Grid>
        <Box className="container py-5 text-center">
            <Box>
                <Button variant="outlined" className="mb-4" disabled={!Cookies.get("id")} color="info" onClick={() => openAddArticle(!openArticle)}>Pridať nový článok</Button>
            </Box>
        <Grid container spacing={2}>
            {articles.map((article, index) => <ArticlesItem index={index} article={article} />)}
            </Grid>
            <Box className="text-center w-25 mx-auto">
            </Box>
        </Box>
        <Modal open={openArticle} onClose={() => openAddArticle(false)}>
        <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Card id="card" className="p-5 border bg-dark text-center border-dark text-white mt-5" style={{'overflowY': 'scroll', 'height': '90%'}}>
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
                    <input className="form-control"  onChange={(e) => setMultipleImg(e)} type="file" name="images" multiple placeholder="Hlavný obrázok" />
                    </Box>
                    <Box>
                    <textarea style={{'minHeight': '500px'}} className="my-3 form-control text-white bg-transparent" onChange={(e) => setText(e.target.value)} cols="10" rows="10" placeholder="obsah článku"></textarea>
                    </Box>
                    <Button variant="contained" color="info" onClick={(e) => publicArticle(e.preventDefault())}>Zverejniť článok</Button>
                </Card></motion.div>
            </Modal>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={2000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                <Typography>Váš článok bol zverejnený</Typography>
                                            </Alert>
                                        </Snackbar>
    </Box></motion.div>)
}