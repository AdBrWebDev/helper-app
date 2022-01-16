import React, {useState, useEffect, lazy} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import '../App.css'
import MainImageOfPage from '../components/MainImageOfPage'
import Axios from 'axios'
import Cookies from 'js-cookie'
const ForumItems = lazy(() => import('../components/ForumItems'))

export default function Forum(props){
    const [newTheme, NewTheme] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [items, setItems] = useState([])
    const [window, oWindow] = useState(false)
    const [forumItems, setForumItems] = useState([])
    const [sign, setSign] = useState('')

    const createNewItem = () => {
        Axios.post('http://localhost:3001/forumNewItem', {id_user: Cookies.get('id'), dateOfPublic: new Date(), title: title, text: text, theme: props.title})
    }

    useEffect(() => {
        Axios.post('http://localhost:3001/forumItems', {theme: props.title}).then((response) => {
            console.log(response.data)
            setItems(response.data)
        });
    }, [props.title]);

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
        if(!Cookies.get("id")) console.log("nie ste prihlásený")
        else{
        Axios.post('http://localhost:3001/addComment', {txt: txt, id_user: Cookies.get('id'), text:text, theme: theme}).then((response) => {
                console.log(response)
            })}
        } 

    return (<Box>
        <MainImageOfPage img={props.img} text={props.text} />
        <Box className="container p-3 rounded bg-dark shadow my-5">
            <Box className="text-end mb-5">
            <Button variant="outlined" color="info" onClick={() => Cookies.get("id") ? NewTheme(!newTheme) : console.log("nie ste prihlásený")}>Pridať tému</Button>
            </Box>
            <Box>
                {items.map((item, index) => <Card id="card" key={index} className="p-3 my-2 px-5 border border-dark text-white border-2 shadow">
                    <Typography onClick={() => openWindow(item.title)} style={{'cursor': 'pointer'}}><i className="material-icons mr-5">forum</i>{item.title}</Typography>
                </Card>)}
            </Box>
        </Box>
        {newTheme && <Box id="dark-background">
            <Container>  
                <Card className="container text-center border border-dark border-2 text-white p-5 shadow w-75" id="card">
                    <Button variant="contained" color="error" onClick={() => NewTheme(!newTheme)} style={{'top': -10, 'left': 10, 'position': 'relative', 'float': 'right'}}>x</Button>
                    <Typography variant="h3">Pridať novú tému</Typography>
                        <input type="text" placeholder="Názov témy" className="form-control mb-4 text-center text-info" name="title" onChange={(e) => setTitle(e.target.value)} />
                        <textarea cols="80" placeholder="Váš text" name="text" className="form-control mb-4 text-info bg-transparent" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
                        <Button variant="contained" color="info" onClick={createNewItem}>Pridať</Button>
                </Card>
            </Container>
        </Box>} 
        {window && <Box id="dark-background">
        <Box className="text-center">
        <Button variant="contained" className="my-2" color="error" onClick={() => openWindow(!window)}>x</Button>
        </Box>
            <Card className="container text-center border border-dark text-white p-5" id="card" style={{'overflowY': 'scroll', 'height': "90%"}}> 
                    <Typography variant="h3" className="text-white mt-2">{sign}</Typography>
                    <Box className="p-5">
                    {forumItems.map((fItems, index) => <ForumItems index={index} data={fItems} />)}
                    </Box>
                    <Card className="container text-center text-white p-5 shadow w-100" id="card">
                    <Typography variant="h3">Pridať komentar</Typography>
                        <textarea cols="10" placeholder="Váš komentár" className="text-center form-control bg-transparent text-white" name="comment" rows="15" onChange={(e) => setText(e.target.value)}></textarea>
                        <Box className="my-3">
                        <Button variant="contained" color="info" onClick={() => addComment(sign, props.title)}>Pridať</Button>
                        </Box>
                </Card>
                </Card>
            </Box>}
    </Box>)
}