import React, {useState} from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import '../App.css'

export default function Health(){
    const [health, openHealth] = useState(false)

    return(<Box>
        <Button className="align-middle position-relative" onClick={() => openHealth(!health)} variant="outlined" color="info" style={{'transform': 'scale(4)', 'marginTop': '300px'}}>
            <i className="material-icons text-info">health_and_safety</i>
        </Button>
    </Box>)
}