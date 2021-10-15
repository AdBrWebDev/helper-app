import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Sections(props){
    return(<Box>
        <Grid container key={props.index}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                {props.index % 2 == 0 ? <img src={props.img} alt={props.title} /> : <Box className="p-5">
                    <Typography variant="h3" className="mt-5 pt-5" color="white">{props.title}</Typography>
                    <Button variant="outlined" className="mt-5" color="info" href={props.link}>{props.title}</Button>
                    </Box>}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                {props.index % 2 == 1 ? <img src={props.img} alt={props.title} /> : <Box className="p-5">
                    <Typography variant="h3" className="mt-5 pt-5" color="white">{props.title}</Typography>
                    <Button variant="outlined" className="mt-5" target="_self" color="info" href={props.link}>{props.title}</Button>
                    </Box>}
            </Grid>
        </Grid>
    </Box>)
}