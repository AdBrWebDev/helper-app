import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import '../App.css'
import MainImageOfPage from '../components/MainImageOfPage'

export default function Forum(props){
    const [newTheme, NewTheme] = useState(false)

    return (<Box>
        <MainImageOfPage img={props.img} text={props.text} />
        <Box className="container p-3 rounded bg-dark shadow my-5">
            <Box className="text-end mb-5">
            <Button variant="outlined" color="info" onClick={() => NewTheme(!newTheme)}>Pridať tému</Button>
            </Box>
            <Box>
                <Card className="p-3 my-2 px-5 border border-info bg-dark text-info border-2 shadow">
                    <Typography style={{'cursor': 'pointer'}}>Pravidla pridavania príspevkov</Typography>
                </Card>
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
                        <input type="text" placeholder="Názov témy" className="form-control mb-4 text-center text-info" />
                        <Button variant="outlined" color="info">Pridať</Button>
                </Card>
            </Container>
        </Box>}
    </Box>)
}