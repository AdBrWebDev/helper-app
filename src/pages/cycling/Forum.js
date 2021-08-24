import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export default function Forum(){
    return (<Box>
        <Box className="container p-3 rounded bg-white my-4">
            <Button variant="outlined" className="text-dark">Pridať tému</Button>
            <Box>
                <Card className="p-2 my-2">
                    <Typography>Pravidla pridavania príspevkov</Typography>
                </Card>
            </Box>
        </Box>
    </Box>)
}