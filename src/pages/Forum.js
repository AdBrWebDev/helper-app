import React, {useState, useEffect, lazy} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import '../App.css'
import MainImageOfPage from '../components/MainImageOfPage'
import Axios from 'axios'
import Cookies from 'js-cookie'
import Modal from '@mui/material/Modal'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {motion} from 'framer-motion'
const ForumItems = lazy(() => import('../components/ForumItems'))

export default function Forum(props){
    const [newTheme, NewTheme] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([])
    const [window, oWindow] = useState(false)
    const [forumItems, setForumItems] = useState([])
    const [sign, setSign] = useState('')

    const createNewItem = () => {
        Axios.post('http://localhost:3001/forumNewItem', {id_user: Cookies.get('id'), dateOfPublic: new Date(), title: title, text: text, theme: props.title})
        NewTheme(false)
        handleClick()
        setTimeout(() => handleClose(), 2000)
    }

    useEffect(() => {
        Axios.post('http://localhost:3001/forumItems', {theme: props.title}).then((response) => {
            console.log(response.data)
            setItems(response.data)
        });
    }, [props.title]);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return setOpen(false);
        }
    
        setOpen(false);
      };

    const openWindow = (txt) => {
        function findThemes(){
            Axios.post('http://localhost:3001/findItems', {txt: txt}).then((response) => {
                console.log(response.data)
                setForumItems(response.data)
                setSign(txt)
            })
        }
        findThemes();
        oWindow(!window)
    }

    const addComment = async (txt, theme) => {
        Axios.post('http://localhost:3001/addComment', {txt: txt, id_user: Cookies.get('id'), text:text, theme: theme}).then((response) => {
                console.log(response)
            })
        handleClick()
        setTimeout(() => handleClose(), 2000)
        } 

    return (<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
        <MainImageOfPage img={props.img} text={props.text} />
        <Box className="container p-3 rounded bg-dark shadow my-5">
            <Box className="text-end mb-5">
            <Button variant="outlined" color="info" disabled={!Cookies.get("id")} onClick={() => Cookies.get("id") ? NewTheme(!newTheme) : console.log("nie ste prihlásený")}>Pridať tému</Button>
            </Box>
            <Box>
                {items.map((item, index) => <Card data-aos="fade-up" data-aos-offset="100" id="card" key={index} className="p-3 my-2 px-5 border border-dark text-white border-2 shadow">
                    <Typography onClick={() => openWindow(item.title)} style={{'cursor': 'pointer'}}><i className="material-icons mr-5">forum</i>{item.title}</Typography>
                </Card>)}
            </Box>
        </Box>
        <Modal open={newTheme} onClose={() => NewTheme(false)}>
        <motion.div className="container" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Card className="text-center border border-dark bg-dark border-2 text-white p-5 w-75 mx-auto align-middle" style={{'marginTop': '5%'}} id="card">
                    <Typography variant="h3">Pridať novú tému</Typography>
                        <input type="text" placeholder="Názov témy" className="form-control mb-4 text-center text-info text-white" name="title" onChange={(e) => setTitle(e.target.value)} />
                        <textarea cols="80" placeholder="Váš text" name="text" className="form-control mb-4 text-white bg-transparent" style={{'minHeight': '100px'}} rows="10" onChange={(e) => setText(e.target.value)}></textarea>
                        <Button variant="contained" color="info" onClick={createNewItem}>Pridať</Button>
                </Card></motion.div>
                </Modal>  
        <Modal open={window} onClose={() => openWindow(false)}>
        <motion.div className="container" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
            <Card className="text-center border border-dark text-white bg-dark p-5 mt-5" id="card" style={{'overflowY': 'scroll', 'height': "90%"}}> 
                    <Typography variant="h3" className="text-white mt-2">{sign}</Typography>
                    <Box className="p-5">
                    {forumItems.map((fItems, index) => <ForumItems index={index} data={fItems} />)}
                    </Box>
                    <Card className="container text-center text-white p-5 shadow w-100" id="card">
                    <Typography variant="h3">Pridať komentar</Typography>
                        <textarea cols="10" placeholder="Váš komentár" className="text-center form-control bg-transparent text-white" style={{'minHeight': '100px'}} name="comment" rows="80" onChange={(e) => setText(e.target.value)}></textarea>
                        <Box className="my-3">
                        <Button variant="contained" color="info" disabled={!Cookies.get("id")} onClick={() => {addComment(sign, props.title)}}>Pridať</Button>
                        </Box>
                </Card>
                </Card></motion.div>
                </Modal>
                <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={4000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                <Typography>Nová téma bola vytvorená</Typography>
                                            </Alert>
                                        </Snackbar>
                                        </motion.div>)
}