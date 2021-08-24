import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import '../../App.css'

export default function Forum(){
    const [newTheme, NewTheme] = useState(false)

    return (<Box>
        <Box className="container p-3 rounded bg-white my-4">
            <Button variant="outlined" className="text-dark" onClick={() => NewTheme(!newTheme)}>Pridať tému</Button>
            <Box>
                <Card className="p-2 my-2">
                    <Typography>Pravidla pridavania príspevkov</Typography>
                </Card>
            </Box>
        </Box>
        {newTheme && <Box id="dark-background">
            <Container className="bg-dark">     
                <Card>
                    <Typography>Pridať novú tému</Typography>
                    <Button variant="outlined" color="secondary">Pridať</Button>
                </Card>
            </Container>
        </Box>}
    </Box>)
}