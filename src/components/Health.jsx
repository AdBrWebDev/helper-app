import React, {useState} from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import '../App.css'
import Card from '@mui/material/Card'

export default function Health(){
    const [health, openHealth] = useState(false)

    return(<Box>
        <Button id="card" className="align-middle position-relative" onClick={() => openHealth(!health)} variant="outlined" color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
            <i className="material-icons text-info">health_and_safety</i>
        </Button>
        {health && <Box id="dark-background">
        <Card className="container my-5 p-3 bg-dark border border-info">
                <Box>
                <Button variant="outlined" color="error" onClick={() => openHealth(!health)}>x</Button>
                </Box>
            </Card>
        </Box>}
    </Box>)
}