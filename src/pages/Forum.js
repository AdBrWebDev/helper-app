import React, {useState, useEffect, lazy} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import '../App.css'
import MainImageOfPage from '../components/MainImageOfPage'
import Axios from 'axios'
const ForumItems = lazy(() => import('../components/ForumItems'))

export default function Forum(props){
    const [newTheme, NewTheme] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [items, setItems] = useState([])
    const [window, oWindow] = useState(false)
    const [forumItems, setForumItems] = useState([])
    const [sign, setSign] = useState('')
    let user = localStorage.getItem('userId')

    const createNewItem = () => {
        let date = new Date()
        Axios.post('http://localhost:3001/forumNewItem', {id_user: user, dateOfPublic: date, title: title, text: text, theme: props.title})
    }

    useEffect(() => {
        Axios.post('http://localhost:3001/forumItems', {theme: props.title}).then((response) => {
            console.log(response.data)
            setItems(response.data)
        });
    }, []);

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

    return (<Box>
        <MainImageOfPage img={props.img} text={props.text} />
        <Box className="container p-3 rounded bg-dark shadow my-5">
            <Box className="text-end mb-5">
            <Button variant="outlined" color="info" onClick={() => NewTheme(!newTheme)}>Pridať tému</Button>
            </Box>
            <Box>
                {items.map((item, index) => <Card key={index} className="p-3 my-2 px-5 border border-info bg-dark text-info border-2 shadow">
                    <Typography onClick={() => openWindow(item.title)} style={{'cursor': 'pointer'}}>{item.title}</Typography>
                </Card>)}
            </Box>
        </Box>
        <Box className="text-center w-25 mx-auto">
                <Pagination style={{'background': 'transparent'}} className="my-5" size="large" variant="outlined" count={2} color="info" />
        </Box>
        {newTheme && <Box id="dark-background">
            <Container>  
                <Card className="bg-dark container text-center border border-info border-2 text-white p-5 shadow w-75" id="shadow">
                    <Button variant="outlined" color="info" onClick={() => NewTheme(!newTheme)} style={{'top': -10, 'left': 10, 'position': 'relative', 'float': 'right'}}>x</Button>
                    <Typography variant="h3">Pridať novú tému</Typography>
                        <input type="text" placeholder="Názov témy" className="form-control mb-4 text-center text-info" name="title" onChange={(e) => setTitle(e.target.value)} />
                        <textarea cols="80" placeholder="Váš text" name="text" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
                        <Button variant="outlined" color="info" onClick={createNewItem}>Pridať</Button>
                </Card>
            </Container>
        </Box>}
        {window && <Box id="dark-background">
            <Card className="bg-dark container text-center border border-info border-2 text-white p-5 shadow w-75" id="shadow">
                <Button variant="outlined" color="error" onClick={() => openWindow(!window)}>x</Button> 
                    <Typography variant="h3" className="text-white mt-2">{sign}</Typography>
                    <Box className="p-5">
                    {forumItems.map((fItems, index) => <ForumItems index={index} data={fItems} />)}
                    </Box>
                </Card>
            </Box>}
    </Box>)
}